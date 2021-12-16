import React from "react";
import Notificaciones from "./Notificaciones";
//  import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-around">
          <a className="navbar-brand" href="/#">
            Navbar
          </a>

          <div
            className="collapse navbar-collapse justify-content-around"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <Notificaciones />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
