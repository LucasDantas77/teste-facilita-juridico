import { DivMain, InputStyle } from "./style";

export const Pesquisa = ({ clients, setFilterCards, search, setSearch }) => {
  const filterCards = (event) => {
    event.preventDefault();
    const searchUpperCase = search.toLowerCase();
    const newFilter = clients.filter((client) => {
      if (
        client.name.toLowerCase().includes(searchUpperCase) ||
        client.email.toLowerCase().includes(searchUpperCase) ||
        client.telefone.toLowerCase().includes(searchUpperCase)
      ) {
        return true;
      }
    });
    setFilterCards(newFilter);
  };
  return (
    <DivMain>
      <InputStyle
        onChange={(event) => setSearch(event.target.value)}
        value={search}
        placeholder="pesquise aqui ..."
        type="text"
      />
      <button onClick={filterCards}>Pesquisar</button>
    </DivMain>
  );
};
