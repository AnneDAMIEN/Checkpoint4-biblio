import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";

export default function Footer() {
  return (
    <nav className="navbar">
      <NavLink to="/">
        <img src={logo} alt="logo" className="logo" />
      </NavLink>
    </nav>
  );
}
