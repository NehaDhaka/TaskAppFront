import "./Navbar.scss";
import logo from "../../assets/logo.png";
export default function Navbar() {
  return (
    <aside className="navbar">
      <img className="navbar__logo" src={logo} alt="Logo" />
      <nav className="navbar__container">
        <ul className="navbar__list">
          <li className="navbar__item">Tasks</li>
          <li className="navbar__item">Employees</li>
          <li className="navbar__item">Create New Task</li>
        </ul>
      </nav>
    </aside>
  );
}
