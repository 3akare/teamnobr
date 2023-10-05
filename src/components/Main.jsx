import React from "react";
import style from "./Main.module.css";
import { LogosLinkedinIcon, LogosTwitter } from "./Logos";
import CountDown from "./CountDown";

export default function Main() {
  return (
    <main className={style.main}>
      <h1>
        Countdown to
        <span style={{ color: "#F5841B" }}> nobr </span>
        team website
      </h1>
      {/* <CountDown /> */}
      <footer className={style.navigation}>
        <ul>
          <li>
            <LogosTwitter className={style.social} />
          </li>
          <li>
            <LogosLinkedinIcon className={style.social} />
          </li>
        </ul>
      </footer>
    </main>
  );
}
