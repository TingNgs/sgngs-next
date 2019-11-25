import React from "react";

import { ABOUT } from "./constant";

import styles from "./style.scss";
import cStyles from "../style.scss";

const About = () => {
  return (
    <div id="About">
      <div className={cStyles.title}>{ABOUT.title}</div>
    </div>
  );
};

export default About;
