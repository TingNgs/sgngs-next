import React from "react";

import NavItems from "./navItems";
import ProgressBar from "./progressBar";

import { NAV_ITEMS } from "./constant";

import styles from "./style.scss";

const Nav = () => {
  const navLenght = NAV_ITEMS.length;
  return (
    <div className={styles.nav}>
      {NAV_ITEMS.map((item, index) => {
        return (
          <React.Fragment key={`navItems${index}`}>
            <NavItems icon={item.icon} title={item.title} />
            {navLenght != index + 1 ? <ProgressBar /> : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Nav;
