import "./breadcrumbs.scss";
import { Link, useLocation } from "react-router-dom";

function Breadcrumbs() {
  const { pathname } = useLocation();
  const segments = pathname.split("/");
  let url = "";

  return (
    <ul className="breadcrumbs">
      {segments.map((segment, index) => {
        if (segment !== "") {
          url += `/${segment}`;
          return (
            <Link key={index} to={url}>
              {segment}
              <span>&gt;</span>
            </Link>
          );
        }
      })}
    </ul>
  );
}

export default Breadcrumbs;
