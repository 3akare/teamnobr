import React from "react";
import style from "./Main.module.css";
import { LogosLinkedinIcon, LogosTwitter } from "./Logos";
import CountDown from "./CountDown";

export default function Main({ dark }) {
  return (
    <main className={style.main}>
      <h1>
        Countdown to
        <span style={{ color: "#F5841B" }}> nobr </span>
        team website
      </h1>
      <CountDown dark={dark} />
      <footer className={style.navigation}>
        <ul>
          <li>
            <a href="https://x.com/nobr_hq?s=08" target="blank">
              <LogosTwitter className={style.social} />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/nobr/" target="blank">
              <LogosLinkedinIcon className={style.social} />
            </a>
          </li>
        </ul>
      </footer>
    </main>
  );
}
