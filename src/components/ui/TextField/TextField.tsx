import { Field } from "formik";

import { TextFieldProps } from "./types";

export const TextField: React.FC<TextFieldProps> = ({
  label,
  ...inputParams
}) => {
  return (
    <label className="flex flex-col gap-1">
      {label}
      <Field
        className="border-solid border-2 border-accent rounded-[5px] px-2 max-w-[300px] h-[40px]"
        {...inputParams}
      />
    </label>
  );
};
