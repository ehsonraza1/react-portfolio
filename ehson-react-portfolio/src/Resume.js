import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

export default function Resume() {
  return (
    <div className="container">
      {/* SECOND ROW: RESUME INFO */}
      <div className="row under-hero">
        {/* FIRST COLUMN: RESUME NAV */}
        <div id="list-example" className="d-none d-xl-block col-3 bd-toc">
          <div>
            <img
              src="assets/images/jonahpic.jpg"
              alt=""
              width="100%"
              className="mb-3"
            />
          </div>
          <div className="mb-4 text-center">
            <a href="./assets/resume.pdf" download>
              DOWNLOAD RESUME PDF
            </a>
          </div>
          <div className="list-group list-group-flush">
            <a
              className="list-group-item list-group-item-action text-center item1"
              href="#list-item-1"
            >
              Objective
            </a>
            <a
              className="list-group-item list-group-item-action text-center item2"
              href="#list-item-2"
            >
              Experience
            </a>
            <a
              className="list-group-item list-group-item-action text-center item3"
              href="#list-item-3"
            >
              Skills
            </a>
            <a
              className="list-group-item list-group-item-action text-center item4"
              href="#list-item-4"
            >
              Education
            </a>
            <a
              className="list-group-item list-group-item-action text-center item5"
              href="#list-item-5"
            >
              Hobbies
            </a>
          </div>
        </div>
        {/* SECOND COLUMN: RESUME TEXT */}
        <div className="col-9 pl-5">
          {/* <div data-spy="scroll" data-target="#list-example" data-offset="0" class="scrollspy-example"> */}
          <div>
            <h4 id="list-item-1" data-name="education">
              OBJECTIVE
            </h4>
            <p>Placeholder Text</p>
            <br />
            <br />
            <br />
            <h4 id="list-item-2" data-name="experience">
              EXPERIENCE
            </h4>
            <p>
              <strong>Position1</strong>
              <br />
              Location (Tenure)
              <br />
            </p>
            <br />
            <p>
              <strong>Position2</strong>
              <br />
              Location (Tenure))
              <br />
            </p>
            <br />
            <br />
            <br />
            <h4 id="list-item-3" data-name="skills">
              SKILLS
            </h4>
            <div className="row">
              <div className="col">
                <ul>
                  <li>
                    <strong>Technical Skills</strong>
                  </li>
                  <li>- HTML</li>
                  <li>- CSS</li>
                  <li>- Bootstrap CSS</li>
                  <li>- Materialize CSS</li>
                  <li>- Javascript</li>
                  <li>- JSON</li>
                  <li>- jQuery</li>
                  <li>- AJAX</li>
                  <li>- Web APIs</li>
                  <li>- Node.js</li>
                  <li>- UI/UX Design</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>
                    <strong>Additional Skills</strong>
                  </li>
                  <li>- Placeholder</li>
                  <li>- Placeholder</li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <h4 id="list-item-4" data-name="education">
            EDUCATION
          </h4>
          <div className="row">
            <p className="col">
              <strong>University of Houston </strong>
              <br />
              Houston, TX (May 2010)
              <br />
              Bachelors in Business Administration - Accounting &amp; Finance
            </p>
            <p className="col">
              <img src alt="" height />
            </p>
          </div>
          <br />
          <br />
          <br />
          <h4 id="list-item-5" data-name="hobbies">
            HOBBIES
          </h4>
          <p>Placeholder</p>
          <br />
          <br />
          <br />
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}
