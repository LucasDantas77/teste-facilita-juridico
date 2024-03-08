import { useEffect } from "react";
import { api } from "../../api/api";
import { SectionPage } from "./style";

export const Cards = ({ clients, setclients, FilterCards }) => {
  useEffect(() => {
    const renderCard = async () => {
      try {
        const response = await api.get("clientes");
        setclients(response.data);
        console.log(clients);
      } catch (error) {}
    };
    renderCard();
  }, []);

  return (
    <SectionPage>
      <ul>
        {FilterCards.length > 0
          ? FilterCards.map((client) => (
              <li key={client.id}>
                <h3>{client.name}</h3>
                <p>{client.email}</p>
                <p>{client.telefone}</p>
                <p>{client.coordenada_x}</p>
                <p>{client.coordenada_y}</p>
              </li>
            ))
          : clients.map((client) => (
              <li key={client.id}>
                <h3>{client.name}</h3>
                <p>{client.email}</p>
                <p>{client.telefone}</p>
                <p>{client.coordenada_x}</p>
                <p>{client.coordenada_y}</p>
              </li>
            ))}
      </ul>
    </SectionPage>
  );
};
