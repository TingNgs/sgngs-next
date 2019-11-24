import React from "react";

import BG_IMAGE from "../../static/img/bg.jpg";
import NAME from "../../static/img/header_name.svg";
import LINE from "../../static/img/header_line.svg";

import styles from "./style.scss";

const Nav = () => {
  return (
    <div className={styles.header}>
      <img className={styles.banner} src={BG_IMAGE} alt="" />
      <div className={styles.name_container}>
        <img className={styles.line} src={LINE} alt="" />
        <img className={styles.name} src={NAME} alt="" />
        <img className={styles.line} src={LINE} alt="" />
      </div>
    </div>
  );
};

export default Nav;
