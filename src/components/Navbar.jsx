import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-header">

      <nav className="navbar-pro">

        {/* Logo */}
        <div className="nav-logo">

  <img
    src="/logo.jpg"
    alt="Logo"
    className="nav-logo-img"
  />

  <span>Knowledgewala01</span>

</div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setOpen(!open)}
        >
          ☰
        </div>

        {/* Links */}
        <ul className={open ? "nav-menu open" : "nav-menu"}>

          <li>
            <NavLink to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/books" onClick={() => setOpen(false)}>
              Books
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </li>

        </ul>

      </nav>

    </header>
  );
}

export default Navbar;