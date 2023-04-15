import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-warning`}
    >
      <div className="container-fluid d-flex justify-content-center">
        <span style={{
          fontWeight: "bold",
          fontSize: "25px",
        }}>{props.title}</span>

        <div
          className={` mx-5 form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}
        >
          <input
            className="form-check-input pe-auto border border-dark"
            onClick={props.toggleMode}
            type="checkbox"
            id="flexSwitchCheckDefault"
            style={{ cursor: "pointer" }}

          />
          <label
            className="form-check-label"
            htmlFor="flexSwitchCheckDefault"
            style={{
              color: "black",
              cursor: "pointer"
            }}
          >
            Dark Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string, AboutText: PropTypes.string };
Navbar.defaultProps = { title: "set title here", AboutText: "About" };

export default Navbar;