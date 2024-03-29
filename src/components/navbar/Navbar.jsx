import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import "./style.css";

const Navbar = () => {
  const { logOut, currentUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mx-4 fs-5">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand fs-2 fw-semibold fst-italic rounded"
          to="/"
        >
          By H.Kavci...
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
            {currentUser ? (
              <NavLink className="nav-link" to="/login" onClick={logOut}>
                Log Out
              </NavLink>
            ) : (
              <NavLink className="nav-link" to="/login">
                Log In
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
