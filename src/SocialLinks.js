import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLinks() {
  return (
    <div class="icon-bar">
      <a
        href="https://www.linkedin.com/in/ehsonraza/"
        target="_blank"
        class="linkedin"
      >
        <i class="fa fa-linkedin"></i>
      </a>
      <a href="https://github.com/ehsonraza1" target="_blank" class="github">
        <i class="fa fa-github"></i>
      </a>
      <a
        href="https://www.youtube.com/channel/UCe2DAJvG3a_epLPpqQX_FaA?view_as=subscriber"
        target="_blank"
        class="youtube"
      >
        <i class="fa fa-youtube"></i>
      </a>
    </div>
  );
}
