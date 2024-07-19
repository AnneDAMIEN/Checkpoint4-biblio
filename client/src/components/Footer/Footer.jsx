import { NavLink } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="ulfooter">
        <li className="footernav">
          <NavLink to="/about"> A propos </NavLink>
        </li>
        <li className="footernav">
          <NavLink to="/data"> Vos données</NavLink>
        </li>
      </ul>
    </footer>
  );
}
