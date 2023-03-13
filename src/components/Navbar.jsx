import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img src="/assets/logo/logo1.svg" alt="" className="nav__logo-img" />
        </Link>
      </div>

      <div className="nav__buttons">
        <Link to="/login" className="nav__buttons-login">
          Sign in
        </Link>
        <Link className="nav__buttons-join" to="/register">
          <button>Join</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
