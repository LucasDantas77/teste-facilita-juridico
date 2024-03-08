import * as yup from "yup";

export const ClientSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatorio")
    .min(3, "O nome precisa de pelo menos 3 caracteres"),
  email: yup
    .string()
    .required(" O email é obrigatorio")
    .email("o email digitado é invalido"),
  telefone: yup.string().required("Telefone obrigatorio"),
  coordenada_x: yup.number().required("coordenada_x obrigatoria"),
  coordenada_y: yup.number().required("coordenada_y obrigatoria"),
});
