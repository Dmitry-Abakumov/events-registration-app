import { string, object } from "yup";

const dateRegex =
  /^\s*(3[01]|[12][0-9]|0?[1-9])\.(1[012]|0?[1-9])\.((?:19|20)\d{2})\s*$/g;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const eventRegistrationSchema = object({
  fullName: string().required("Enter a full name"),
  email: string()
    .matches(emailRegex, "Invalid format")
    .required("Enter a email"),
  dateOfBirth: string()
    .matches(dateRegex, "The date must be in the format: 'DD.MM.YYYY'")
    .required("Enter a date of birth"),
});
