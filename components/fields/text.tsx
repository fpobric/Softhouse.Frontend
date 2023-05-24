import React from "react";
import FieldProps from "../../interfaces/FieldProps";
import { useTranslation } from "next-i18next";

const TextField = (props: FieldProps) => {
  const required = props.required && props.required === true;
  const { t } = useTranslation();

  return (
    <div className={`${props.inputClasses ? props.inputClasses : "col-md-12"}`}>
      <div
        className={
          props.labelClasses
            ? `mb-3 form-floating ${props.labelClasses}`
            : "mb-3 form-floating"
        }
      >
        <input
          className={`form-control inputs -form-input ${
            props.fieldClasses ? props.fieldClasses : ""
          }`}
          type={props.type}
          placeholder={props.text}
          id={props.id || props.name}
          defaultValue={props.value}
          {...props.register(props.name, { required })}
          onChange={props.onChange ? (e) => props.onChange(e) : () => {}}
        />
        {props.type !== "hidden" ? (
          <label htmlFor={props.id}>{props.text}</label>
        ) : null}
        <>
          {props.help && !props.errors[props.name]?.message ? (
            <div className="form-help">{props.help}</div>
          ) : null}
          <div className="error">
            {props.errors !== undefined && t(props.errors[props.name]?.message)}
          </div>
        </>
      </div>
    </div>
  );
};

export default TextField;
