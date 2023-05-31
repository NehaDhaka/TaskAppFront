import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { Outlet, NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <aside className="navbar">
        <img className="navbar__logo" src={logo} alt="Logo" />
        <nav className="navbar__container">
          <ul className="navbar__list">
            <NavLink className="navbar__item" to="/">
              <li>Tasks</li>
            </NavLink>
            <NavLink className="navbar__item" to="/employees">
              <li>Employees</li>
            </NavLink>
            <NavLink className="navbar__item" to="/new">
              <li>Create New Task</li>
            </NavLink>
          </ul>
        </nav>
      </aside>
      <Outlet />
    </>
  );
}
