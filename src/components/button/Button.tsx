import "./button.scss";
import { TButton } from "./button.types.ts";

function Button(props: TButton) {
  const { label, icon, type, disabled, onClick, className } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={className}
    >
      {icon && icon}
      {label && <label>{label}</label>}
    </button>
  );
}

export default Button;
