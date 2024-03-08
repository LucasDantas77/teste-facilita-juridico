import { Request, Response } from "express";
import { client } from "./database";
import {
  IlistClients,
  IlistClientsRequest,
  IlistClientsResult,
  TClientCoordinates,
} from "./interfaces";
import format from "pg-format";

export const getClients = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const query: string = `
    SELECT
    *
    FROM
      clients ;
    
    
    `;

  const queryResult: IlistClientsResult = await client.query(query);
  return response.status(200).json(queryResult.rows);
};

export const postClients = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const listDataRequest: IlistClientsRequest = request.body;
    const clientsOrder: IlistClientsRequest = {
      ...listDataRequest,
    };

    const query: string = format(
      `
    INSERT INTO clients(%I)
    VALUES (%L)
    RETURNING *;
    `,

      Object.keys(clientsOrder),
      Object.values(clientsOrder)
    );
    const queryResut: IlistClientsResult = await client.query(query);
    const newQueryResult: IlistClients = queryResut.rows[0];
    return response.status(201).json(newQueryResult);
  } catch (error: any) {
    console.error(error);
    if (
      error.message.includes(
        "duplicar valor da chave viola a restrição de unicidade"
      )
    ) {
      return response.status(409).json({
        message: "email ou telefone já existe",
      });
    }
    return response.status(500).json({
      message: "internal server error.",
    });
  }
};

const calcularDistancia = (
  ponto1: [number, number],
  ponto2: [number, number]
): number => {
  return Math.sqrt((ponto2[0] - ponto1[0]) ** 2 + (ponto2[1] - ponto1[1]) ** 2);
};

const calcularDistanciaTotal = (
  rota: number[],
  coordenadas: [number, number][]
): number => {
  let distanciaTotal = 0;

  if (rota.length <= 1) {
    return distanciaTotal;
  }

  for (let i = 0; i < rota.length - 1; i++) {
    const ponto1 = coordenadas[rota[i]];
    const ponto2 = coordenadas[rota[i + 1]];

    if (ponto1 && ponto2) {
      distanciaTotal += calcularDistancia(ponto1, ponto2);
    } else {
      console.error("Erro: Coordenadas faltando para formar a rota.");
      return Infinity;
    }
  }

  return distanciaTotal;
};

const encontrarRotaOtima = async (
  clientes: TClientCoordinates[]
): Promise<{ rota: number[]; distancia: number; clientes: string[] }> => {
  const coordenadas: [number, number][] = clientes.map((cliente) => {
    const coordenadaX = cliente.coordenada_x;
    const coordenadaY = cliente.coordenada_y;

    if (typeof coordenadaX === "number" && typeof coordenadaY === "number") {
      return [coordenadaX, coordenadaY];
    } else {
      console.error(`Coordenadas inválidas para o cliente: ${cliente.name}`);
      return [0, 0];
    }
  });

  const n = coordenadas.length;
  const indicesClientes = Array.from({ length: n - 1 }, (_, i) => i + 1);

  let menorDistancia = Infinity;
  let melhorRota: number[] | null = null;
  let clientesNaRota: string[] = [];

  await permutacaoHeap(indicesClientes, n);

  async function permutacaoHeap(arr: number[], tamanho: number) {
    if (tamanho === 1) {
      const rotaAtual = [0, ...arr, 0];
      const distanciaAtual = calcularDistanciaTotal(rotaAtual, coordenadas);

      if (distanciaAtual < menorDistancia) {
        menorDistancia = distanciaAtual;
        melhorRota = rotaAtual;
        clientesNaRota = melhorRota.map((indice) => clientes[indice].name);
      }
    }

    for (let i = 0; i < tamanho; i++) {
      await permutacaoHeap(arr, tamanho - 1);

      if (tamanho % 2 === 1) {
        [arr[0], arr[tamanho - 1]] = [arr[tamanho - 1], arr[0]];
      } else {
        [arr[i], arr[tamanho - 1]] = [arr[tamanho - 1], arr[i]];
      }
    }
  }

  return {
    rota: melhorRota!,
    distancia: menorDistancia,
    clientes: clientesNaRota,
  };
};

export const getCordenates = async (request: Request, response: Response) => {
  const queryString = `
SELECT
id,
coordenada_x,
coordenada_y,
name
FROM
clients;
`;

  try {
    const resultadoConsulta = await client.query(queryString);

    const clientes: TClientCoordinates[] = resultadoConsulta.rows;
    const empresa: TClientCoordinates = {
      id: 256,
      name: "Empresa",
      coordenada_x: 0,
      coordenada_y: 0,
    };
    clientes.unshift(empresa);
    const {
      clientes: clientesNaRota,
      distancia,
      rota,
    } = await encontrarRotaOtima(clientes);
    const coordenadasNaRota = rota.map((indice) => {
      const cliente = clientes[indice];
      return {
        id: cliente.id,
        name: cliente.name,
        coordenada_x: cliente.coordenada_x,
        coordenada_y: cliente.coordenada_y,
      };
    });

    coordenadasNaRota.sort((a, b) => {
      const distanciaParaEmpresaA = calcularDistancia(
        [a.coordenada_x, a.coordenada_y],
        [empresa.coordenada_x, empresa.coordenada_y]
      );
      const distanciaParaEmpresaB = calcularDistancia(
        [b.coordenada_x, b.coordenada_y],
        [empresa.coordenada_x, empresa.coordenada_y]
      );

      if (a.name === "Empresa" && b.name === "Empresa") {
        return 0;
      } else if (a.name === "Empresa") {
        return 1;
      } else if (b.name === "Empresa") {
        return -1;
      }

      return distanciaParaEmpresaA - distanciaParaEmpresaB;
    });

    return response.status(200).json({
      rota,
      distancia,
      calcularDistancia,
      clientes: clientesNaRota,
      coordenadasNaRota,
    });
  } catch (error) {
    console.error("Erro ao buscar clientes no banco de dados:", error);
    return response.status(500).json({
      error: "Erro interno do servidor",
      detalhes: (error as Error | null)?.message,
    });
  }
};

export const deleteClientById = async (
  request: Request,
  response: Response
) => {
  const { id } = request.params;

  if (!id) {
    return response.status(400).json({ error: "ID inválido" });
  }

  const deleteQueryString = `
    DELETE FROM clients
    WHERE id = $1;
  `;

  try {
    await client.query(deleteQueryString, [id]);

    return response
      .status(200)
      .json({ message: "Cliente excluído com sucesso" });
  } catch (error) {
    console.error("Erro ao excluir cliente:", error);
    return response
      .status(500)
      .json({ error: "Erro interno ao excluir cliente" });
  }
};
