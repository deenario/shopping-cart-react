import React from "react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="main-header">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand white-text" href="#">
              <img src={logo} width="50" height="40" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link white-text" href="#">
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link white-text" href="#">
                    Cart
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="second-header">
        <div className="pl-5 pr-5">
          <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
            <ul className="navbar-nav text-center">
              <li className="nav-item">
                <a className="nav-link white-text" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link white-text" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link white-text" href="#">
                  Gallary
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link white-text" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link white-text" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
