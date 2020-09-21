import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer footer-light" id="footer">
      <div className="container">
        <div className="col text-center">
          <p className="copyright d-none d-sm-block"> © Ehson Raza 2020</p>
        </div>
      </div>
    </footer>
  );
}
