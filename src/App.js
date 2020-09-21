import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Home from "./Home";
import Contact from "./Contact";
import Blog from "./Blog";

export default function App() {
  return (
    <Router>
      <div>
        <Nav />
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function Resume() {
//   return <h2>Resume</h2>;
// }

// function Portfolio() {
//   return <h2>Portfolio</h2>;
// }
