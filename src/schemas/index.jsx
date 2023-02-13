import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Por favor, ingrese un correo electrónico válido")
    .required(),
  name: yup.string().required(),
  surname: yup.string().required(),
});
