import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 bg-light"
        style={{ width: "280px", minHeight: "100vh", height: "100%" }}
      >
        <div className="sticky-top">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <img src="../../public/react.png" alt="" height={25} />
            <span className="fs-4 ms-2" style={{ fontWeight: "bold" }}>
              React
            </span>
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
                Add User
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
