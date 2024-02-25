import { memo, useState } from "react";
import "./input.scss";
import { TInput } from "./input.types";

function Input(props: TInput) {
  const { label, icon, errorMessage, pattern, ...input } = props;
  const [isFocus, setFocus] = useState(false);

  return (
    <div className="inputField">
      <input
        className={isFocus ? "input focused" : "input"}
        pattern={pattern}
        onBlur={() => setFocus(true)}
        autoComplete="off"
        required
        {...input}
      />
      {label && <label className="inputLabel">{label}</label>}
      {icon && icon}
      <p className={isFocus ? "inputError focused" : "inputError"}>
        {errorMessage}
      </p>
    </div>
  );
}

export default memo(Input);
