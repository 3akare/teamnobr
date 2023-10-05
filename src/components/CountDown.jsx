import React, { Component } from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import style from "./Main.module.css";

class CountDown extends Component {
  render() {
    return (
      <div className={style.counterdownContainer}>
        <FlipClockCountdown
          to="2023-10-21T14:27:32.635Z"
          separatorStyle={{ color: "#F5841B", size: "6px" }}
          duration={0.5}
        >
          Finished
        </FlipClockCountdown>
      </div>
    );
  }
}

export default CountDown;
