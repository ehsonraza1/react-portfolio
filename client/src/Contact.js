import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <div className="container">
      {/*SECOND ROW: TEXT BELOW HEADER*/}
      <div className="row row-style under-hero">
        <div className="col text-center">
          <p>
            Do you have any questions? Please do not hesitate to contact me
            directly. I will come back to you within a matter of hours to assist
            you.
          </p>
        </div>
      </div>
      {/*THIRD ROW*/}
      <div className="row row-style row-bottom">
        {/*COLUMN 1: CONTACT FORM*/}
        <div className="col-md-9 justify-content-center">
          <form id="contact-form" name="contact-form" method="POST">
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="name" className>
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className>
                  Your email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0 mt-2">
                  <label htmlFor="subject" className>
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mt-2">
                  <label htmlFor="message">Your message</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows={2}
                    className="form-control md-textarea"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col mt-4 mb-5">
                <a className="btn btn-primary" onclick>
                  Send
                </a>
              </div>
              <div className="status" />
            </div>
          </form>
        </div>
        {/*COLUMN 2: FA CONTACT ICONS*/}
        <div className="col-md-3 text-center">
          <section>
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps/place/Houston,+TX+77095/@29.9118844,-95.6873945,13z/data=!3m1!4b1!4m5!3m4!1s0x8640d6ce50e00cff:0xd276f136c786113!8m2!3d29.9108312!4d-95.6563119"
                  className="fa-icons"
                  target="blank"
                >
                  <span className="fa fa-map-marker fa-2x" />
                </a>
                <p>Houston, TX 77095</p>
              </li>
              <li>
                <a href="tel:1-832-873-1968" className="fa-icons">
                  <span className="fa fa-phone mt-4 fa-2x" />
                </a>
                <p>+1 (832)873-1968</p>
              </li>
              <li>
                <a href="mailto:ehson.raza1@outlook.com" className="fa-icons">
                  <span className="fa fa-envelope mt-4 fa-2x" />
                </a>
                <p>ehson.raza1@outlook.com</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
