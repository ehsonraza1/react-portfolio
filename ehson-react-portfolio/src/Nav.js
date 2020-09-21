import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-transparent">
      <a className="navbar-brand" href="index.html">
        <img id="frog-logo" src="./frog-logo.png" />
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
        <span className="navbar-toggler-icon" />
      </button>
      {/* NavBar Menu */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link to="/">
              <a className="nav-link">
                About <span className="sr-only">(current)</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio">
              <a className="nav-link">Portfolio</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume">
              <a className="nav-link">Resume</a>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Professional Links
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a
                className="dropdown-item"
                background-image
                href="https://www.linkedin.com/in/ehsonraza/"
                target="_blank"
              >
                <i className="fa fa-linkedin-square" aria-hidden="true" />{" "}
                LinkedIn
              </a>
              <a
                className="dropdown-item"
                background-image
                href="https://github.com/ehsonraza1"
                target="_blank"
              >
                <i className="fa fa-github-square" aria-hidden="true" /> Github{" "}
              </a>
              <a
                className="dropdown-item"
                href="https://drive.google.com/drive/folders/1NjQA1jTX1XT1YSEVcjUovqH4CEduylUJ"
                target="_blank"
              >
                <i className="fa fa-user-o" aria-hidden="true" /> Resume
              </a>
            </div>
          </li>
          <li className="nav-item">
            <Link to="/contact">
              <a className="nav-link">Contact</a>
            </Link>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://trailblazer.me/id/eraza"
              target="_blank"
            >
              <img
                src="./Salesforce_Logo_Web_2019.png"
                className="img-responsive down-logo"
              />{" "}
              Credentials
            </a>
          </li>
          <li className="nav-item">
            <Link to="/blog">
              <a className="nav-link">Blog</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
