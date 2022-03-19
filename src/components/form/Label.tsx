import { useEffect, useRef } from "react";
import { useField } from "@unform/core";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  text: string;
};

export function Label({ text, ...rest }: LabelProps) {
  const labelRef = useRef<HTMLLabelElement>(null);
  const { fieldName, registerField } = useField(text);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: labelRef.current,
      path: "htmlFor",
    });
  }, [fieldName, registerField]);

  return (
    <label ref={labelRef} {...rest}>
      {text}
    </label>
  );
}
