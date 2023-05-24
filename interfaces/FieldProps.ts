import { ChangeEventHandler, MutableRefObject } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface FieldProps {
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  value?: string | number | readonly string[] | undefined;
  name: string;
  inputClasses?: string;
  labelClasses?: string;
  fieldClasses?: string;
  wrapperClasses?: string;
  type?: string;
  id?: string;
  text?: string;
  help?: string;
  onChange?: ChangeEventHandler<HTMLInputElement> | any;
  onClick?: ChangeEventHandler<HTMLInputElement> | any;
  errors?: any;
  defaultValue?: any;
  setValue?: any;
  ref?: MutableRefObject<null>;
}

export default FieldProps;
