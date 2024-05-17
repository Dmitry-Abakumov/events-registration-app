import { ChangeEvent } from "react";

export type TextFieldProps = {
  name: string;
  type: string;
  placeholder?: string;
  label?: string;
  value?: "Social media" | "Friends" | "Found myself";
  onChange?: ChangeEvent<HTMLInputElement>;
};
