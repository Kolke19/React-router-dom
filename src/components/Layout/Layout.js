// import React, { Children } from "react";
import "./Layout.css";
import { Link, NavLink } from "react-router-dom";

const Layout = ({ children }) => {
  //mirar como escribimos el children, si lo escribimos con mayus no funciona el enrutamiento compa
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link
                className={({ isActive }) => (isActive ? "active" : "")}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/rick-and-morty">Rick and Morty</Link>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
      </header>
      <p>
        <NavLink to="/about-us">Ver mas</NavLink>
      </p>
      <footer>
        <h2>Soy un footer</h2>
      </footer>
    </>
  );
};

export default Layout;
