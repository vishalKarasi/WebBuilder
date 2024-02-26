import "./header.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  Cancel,
  Menu,
  Moon,
  Search,
  Sun,
  Theme,
} from "@src/assets/icons/icons.tsx";
import Navlink from "@src/components/navlink/Navlink.tsx";
import { setTheme, toggle, toggleMode } from "@app/services/uiSlice.ts";
import { useLocation } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { theme, mode, menu } = useSelector((state: any) => state.ui);
  const NavLinks = [
    { label: "Categories", path: "/categories" },
    { label: "Web Builders", path: "/web-builders" },
    { label: "Today's deals", path: "/todays-deals" },
  ];
  return (
    <header className="header">
      <div className="searchBar">
        <Search />
        <input type="search" />
      </div>

      <nav className={menu ? "active" : ""}>
        {pathname !== "/home" && <Navlink label="Home" path="/home" />}
        {NavLinks.map((link) => (
          <Navlink key={link.label} {...link} />
        ))}
      </nav>
      <ul className="options">
        <li className="theme">
          <input
            type="color"
            value={theme}
            id="theme"
            onChange={(event) => dispatch(setTheme(event.target.value))}
          />
          <label htmlFor="theme">
            <Theme />
          </label>
        </li>
        <li className="mode" onClick={() => dispatch(toggleMode())}>
          {mode === "light" ? <Moon /> : <Sun />}
        </li>
        <li className="menu" onClick={() => dispatch(toggle("menu"))}>
          {menu ? <Cancel /> : <Menu />}
        </li>
      </ul>
    </header>
  );
}

export default Header;
