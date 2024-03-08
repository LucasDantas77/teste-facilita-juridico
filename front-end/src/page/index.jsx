import { useState } from "react";
import { Cards } from "../components/cards";
import { Pesquisa } from "../components/pesquisa";
import { ButtonHome, MainPage } from "./style";
import { Form } from "../components/form";
import { Modal } from "../components/modal";

export const HomePage = () => {
  const [clients, setclients] = useState([]);
  const [coordenadas, setcoordenadas] = useState([]);
  const [FilterCards, setFilterCards] = useState([]);
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState(false);
  return (
    <MainPage>
      <Pesquisa
        setSearch={setSearch}
        clients={clients}
        FilterCards={FilterCards}
        setFilterCards={setFilterCards}
        search={search}
      />
      <Form clients={clients} setclients={setclients} />
      <ButtonHome onClick={() => setModal(true)}>
        Calcular coordenadas
      </ButtonHome>
      <Cards
        clients={clients}
        setclients={setclients}
        FilterCards={FilterCards}
      />
      <Modal
        modal={modal}
        setModal={setModal}
        coordenadas={coordenadas}
        setcoordenadas={setcoordenadas}
      />
    </MainPage>
  );
};
