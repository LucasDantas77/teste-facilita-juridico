import { BackgroundDiv, DivContainer, DivHeader } from "./style";
import { useEffect } from "react";
import { api } from "../../api/api";
export const Modal = ({ modal, setModal, coordenadas, setcoordenadas }) => {
  useEffect(() => {
    const renderCoordenadas = async () => {
      try {
        const response = await api.get("coordenadas");
        setcoordenadas(response.data.coordenadasNaRota);
      } catch (error) {}
    };
    renderCoordenadas();
  }, []);
  if (!modal) {
    return null;
  }

  return (
    <BackgroundDiv>
      <DivContainer>
        <DivHeader>
          <button onClick={() => setModal(false)}>X</button>
        </DivHeader>
        <ul>
          {coordenadas.map((coor) => (
            <li key={coor.id}>
              <h3>{coor.name}</h3>
              <h3>{coor.coordenada_x}</h3>
              <h3>{coor.coordenada_y}</h3>
            </li>
          ))}
        </ul>
      </DivContainer>
    </BackgroundDiv>
  );
};
