import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="navLogoLink">
          <span className="logo">Booking App</span>
        </Link>
        {user ? (
          <>
            <div className="navItem">
              Hello {user.username}{" "}
              <button className="navButton">Logout</button>
            </div>
          </>
        ) : (
          <div className="navItem">
            <button className="navButton">Register</button>
            <Link to="/login">
              <button className="navButton">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
