import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/favorites" className="nav-links">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
