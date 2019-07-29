import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
function Navbarexample() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-dark">
      <a class="navbar-brand" href="#">
        {/* <img src={logo} alt="logo"  style={{width:'35px'}}/> */}
        NAVBAR
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars" style={{ color: "#fff" }} />
        </span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto">
          <li class="nav-item active">
            <Link class="nav-link  text-white text-upp ml-5" to="/">
              HOME &nbsp;
              <i class="fas fa-home" />
              <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white text-upp ml-5" to="news">
              NEWS
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link text-white text-upp ml-5" to="contacts">
              CONTACT US
            </Link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbarexample;
