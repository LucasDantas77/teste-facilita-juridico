import { ClientSchema } from "../../schema";
import { api } from "../../api/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DivForm } from "./style";
import { toast } from "react-toastify";

export const Form = ({ clients, setclients }) => {
  const createClients = async (data) => {
    try {
      const res = await api.post("clientes", data);
      const newContacts = [...clients, res.data];
      setclients(newContacts);
      toast.success("Cliente cadastrado");
    } catch (error) {
      toast.error("Cliente já existe");
    }
  };

  const submitClients = (data) => {
    createClients(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ClientSchema),
  });

  return (
    <DivForm>
      <form onSubmit={handleSubmit(submitClients)}>
        <label htmlFor="name">Nome</label>
        <input
          name="name"
          type="text"
          placeholder="nome"
          {...register("name")}
        />

        {errors.name && <span>{errors.name.message}</span>}
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="email"
          {...register("email")}
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label htmlFor="telefone">Telefone</label>
        <input
          name="telefone"
          type="text"
          placeholder="Digite seu telefone"
          {...register("telefone")}
        />
        {errors.telefone && <span>{errors.telefone.message}</span>}
        <label htmlFor="coordenada_x">coordenada_x</label>
        <input
          name="coordenada_x"
          type="number"
          placeholder="Digite sua coordenada_x"
          {...register("coordenada_x")}
        />
        <label htmlFor="coordenada_y">coordenada_y</label>
        <input
          name="coordenada_y"
          type="number"
          placeholder="Digite sua coordenada_y"
          {...register("coordenada_y")}
        />
        <button type="submit">Cadastrar Contatos</button>
      </form>
    </DivForm>
  );
};
