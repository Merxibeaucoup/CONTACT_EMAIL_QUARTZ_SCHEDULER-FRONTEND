import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };
  return (
    <nav className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img src="/assets/logo/logo1.svg" alt="" className="nav__logo-img" />
        </Link>
      </div>

      <div className="nav__buttons">
        {user && (
          <div className="nav__buttons__outs">
            <span className="nav__buttons__outs-name">
              Welcome back : {user.firstname}
            </span>
            <button
              onClick={handleLogout}
              className="nav__buttons__outs-logout"
            >
              Log out
            </button>
          </div>
        )}
        {!user && (
          <div className="nav__buttons__ins">
            <Link className="nav__buttons__ins-login" to="/login">
              Login
            </Link>
            <Link className="nav__buttons__ins-register" to="/register">
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
