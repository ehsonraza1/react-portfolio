import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

export default function Portfolio() {
  return (
    <div className="container">
      <div className="row text-center under-hero">
        <div className="col-lg-6 col-md-12 my-col">
          <section>
            <div className="card mx-auto">
              <img src="/middleground.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Middle Ground</h5>
                <p className="card-text">
                  Middleground is a website that aims to aggregate news from all
                  sides of the political spectrum and strives to bring you the
                  objective truth. We leveraged NYTimes API, Bing News API and
                  Hoaxy API to accomplish this.
                </p>
              </div>
              <div className="card-footer text-muted">
                <a
                  href="https://szaster.github.io/Project1/"
                  className="card-link"
                  target="_blank"
                >
                  Live Site
                </a>
                <a
                  href="https://github.com/szaster/Your-Breaking-News"
                  className="card-link"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className="col-lg-6 col-md-12 my-col">
          <section>
            <div className="card mx-auto">
              <img
                src="./personalcare.png"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Personal Care</h5>
                <p className="card-text">
                  This app is designed for business owners that operate in
                  beauty industry in the Houston market. The content on this
                  website is user-generated i.e. businesses are able to
                  advertise the services they offer and customers can leave
                  reviews on those businesses.
                </p>
              </div>
              <div className="card-footer text-muted">
                <a
                  href="https://personal-care1.herokuapp.com/"
                  className="card-link"
                  target="_blank"
                >
                  Live Site
                </a>
                <a
                  href="https://github.com/barnes-malcolm/personal-care"
                  className="card-link"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="row text-center under-hero">
        <div className="col-lg-6 col-md-12 my-col">
          <section>
            <div className="card mx-auto">
              <img src="./note taker.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Note Taker</h5>
                <p className="card-text">
                  Middleground is a website that aims to aggregate news from all
                  sides of the political spectrum and strives to bring you the
                  objective truth. We leveraged NYTimes API, Bing News API and
                  Hoaxy API to accomplish this.
                </p>
              </div>
              <div className="card-footer text-muted">
                <a
                  href="https://warm-escarpment-11875.herokuapp.com/"
                  className="card-link"
                  target="_blank"
                >
                  Live Site
                </a>
                <a
                  href="https://github.com/ehsonraza1/Express-Homework-Note-Taker"
                  className="card-link"
                  target="_blank"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <SocialLinks />
    </div>
  );
}
