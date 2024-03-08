import { QueryResult } from "pg";

export interface IlistClientsRequest {
  name: string;
  telefone: string;
  email: string;
  coordenada_x: number;
  coordenada_y: number;
}

export interface IlistClients extends IlistClientsRequest {
  id: number;
}

export type TClientCoordinates = {
  id:number;
  coordenada_x: number;
  coordenada_y: number;
  name: string;
};

export type IlistClientsResult = QueryResult<IlistClients>;
