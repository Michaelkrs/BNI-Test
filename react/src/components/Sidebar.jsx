import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px", minHeight: "100vh", height: "100%" }}
      >
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <span className="fs-4">Pokedex</span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <NavLink
              to="/"
              style={{ textDecoration: "none" }}
              className="nav-link"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add"
              style={{ textDecoration: "none" }}
              className="nav-link"
            >
              Add Pokemon
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/water"
              style={{ textDecoration: "none" }}
              className="nav-link"
            >
              Water
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/fire"
              style={{ textDecoration: "none" }}
              className="nav-link"
            >
              Fire
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/grass"
              style={{ textDecoration: "none" }}
              className="nav-link"
            >
              Grass
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
