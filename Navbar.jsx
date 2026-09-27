import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Student Event Registration</h2>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/registration">Register</Link>
        <Link to="/history">History</Link>
      </div>
    </nav>
  );
}

export default Navbar;