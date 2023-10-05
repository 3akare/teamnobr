import React from "react";
import style from "./NavBar.module.css";
import { NobrLogo } from "./Logos";

export default function NavBar({ handleClick, dark }) {
  return (
    <nav className={`${style.navigation}`}>
      <NobrLogo dark={dark} />
      <div className={`${style.outer} ${dark ? "" : style.outerLeft}`}>
        <div
          className={`${style.inner} ${
            dark ? style.innerRight : style.innerLeft
          }`}
          onClick={handleClick}
        ></div>
      </div>
    </nav>
  );
}
