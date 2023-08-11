import React from "react";

import bg from "../../assets/nav-bar/nav-bar-backgrounnd.png";
import style from "./navbar.module.scss";
import { Link, useParams, useLocation } from "react-router-dom";

const NavBar = () => {
  const { pathname } = useLocation();
  return (
    <div className={style.container}>
      <div className={style.wholeMenuBar}>
        <h1>Logo</h1>
        <div className={style.menu}>
          {Menudata?.map((item, i) => {
            return (
              <Link to={item?.path} style={{ textDecoration: "none" }}>
                <p
                  className={`  ${
                    item?.path === pathname && style.activeClass
                  } `}
                >
                  {item?.title}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <img className={style.image} src={bg} alt="bg" />
    </div>
  );
};

export default NavBar;

const Menudata = [
  { path: "/", title: "Home" },
  { path: "/about", title: "About" },
  { path: "/contact", title: "Contact" },
];
