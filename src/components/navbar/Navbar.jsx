import { NavLink } from "react-router-dom";
import "./style.css"

const Navbar = ({currentUser, setCurrentUser}) => {

  const logout = () => {
    setCurrentUser(false)
    sessionStorage.clear()
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mx-4 fs-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand fs-2 fw-semibold fst-italic rounded" to="/">
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
          <NavLink
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
            <a className="nav-link" href="https://github.com/HKavci/recipe-app" target="_blank" rel="noreferrer">
              GitHub
            </a>
            {currentUser ? (
              <NavLink className="nav-link" to="/login" onClick={logout}>
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

