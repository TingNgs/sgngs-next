import React from "react";

import styles from "./style.scss";

const NavItems = ({ icon, title }) => {
  return (
    <a href={`#${title}`} className={styles.nav_items_link}>
      <div className={styles.nav_items}>
        <img
          className={styles.nav_icon}
          src={require(`../../static/img/${icon}`)}
          alt=""
        />
        <p className={styles.nav_title}>{title}</p>
      </div>
    </a>
  );
};

export default NavItems;
