import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

export default function Home() {
  return (
    <div className="container">
      <div className="row row-style under-hero">
        <div className="col">
          <h1 className="recursive">Ehson Raza</h1>
          <p className="lead">WEB DEVELOPER</p>
        </div>
      </div>
      <div className="row row-style under-hero">
        <div className="col-sm-12  text-center col-md-6">
          <img className="centralImg" src="./ehson.jpg" />
        </div>
        <div className="col-sm-12 col-md-6 text-center ">
          <p>
            {" "}
            My name is Ehson Raza and I am Technology Consultant who graduated
            from University of Houston with an undergraduate degree in Finance
            and Accounting. I am currently enrolled in University of Texas' full
            stack web development program which focuses on HTML, CSS,
            Javascript, SQL Database, Node.js and other emerging technologies
            and frameworks.
          </p>
          <p></p>
        </div>
        {/* Navbar Logo */}
      </div>
      <div className="row"></div>
      <SocialLinks />
    </div>
  );
}
