import { NavLink } from "react-router-dom";
import "./footer.scss";

function Footer() {
  const CategoriesLinks = [
    { label: "Web Builder", path: "web-builder" },
    { label: "Hosting", path: "/hosting" },
    { label: "Data Center", path: "data-center" },
    { label: "Robotic Automation", path: "robotic-automation" },
  ];

  const ContactLinks = [
    { label: "Contact", path: "/contact" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
    { label: "About", path: "/about" },
  ];

  const countries = [
    "India",
    "Japan",
    "China",
    "United States",
    "Canada",
    "United Kingdom",
    "Germany",
  ];

  return (
    <footer className="footer">
      <nav>
        <h2>Categories</h2>
        {CategoriesLinks.map((link) => (
          <NavLink key={link.label} to={link.path}>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <nav>
        <h2>Contact</h2>
        {ContactLinks.map((link) => (
          <NavLink key={link.label} to={link.path}>
            {link.label}
          </NavLink>
        ))}
      </nav>
      <select>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </footer>
  );
}

export default Footer;
