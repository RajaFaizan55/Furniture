import React from "react";

import bg from "../../assets/nav-bar/nav-bar-backgrounnd.png";
import style from "./navbar.module.scss";

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.wholeMenuBar}>
        <h1 className={style.logo}>Logo</h1>
      </div>
      <img className={style.image} src={bg} alt="bg" />
    </div>
  );
};

export default NavBar;
