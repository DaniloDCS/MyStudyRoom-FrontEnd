import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  type?: string;
};

export function Input({ name, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <div>
      {error && <span style={{ color: "red" }}>{error}</span>}
      <input ref={inputRef} defaultValue={defaultValue} {...rest} />
    </div>
  );
}
