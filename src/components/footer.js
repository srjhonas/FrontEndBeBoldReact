import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <i className="fa-solid fa-code"></i>Jhon Sanchez R.
              <i className="fa-solid fa-code"></i>
            </a>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://gmail.com/"
                  >
                    <i className="fa-solid fa-envelope"></i>srjhonas@gmail.com
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://github.com/srjhonas"
                  >
                    <i className="fa-brands fa-github"></i>{" "}
                    https://github.com/srjhonas{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
