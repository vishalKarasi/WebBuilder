import { NavLink } from "react-router-dom";
import { TNavlink } from "./navlink.types.ts";

function Navlink(props: TNavlink) {
  const { label, icon, path } = props;

  return (
    <NavLink to={path}>
      {icon && icon}
      {label && <label className="label">{label}</label>}
    </NavLink>
  );
}

export default Navlink;
