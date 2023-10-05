import React, { Component } from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import style from "./Main.module.css";

class CountDown extends Component {
  render() {
    const { dark } = this.props;
    return (
      <div className={style.counterdownContainer}>
        <FlipClockCountdown
          to="2023-10-21T14:27:32.635Z"
          showLabels={true}
          labels={["Days", "Hours", "Minutes", "Seconds"]}
          labelStyle={{ color: dark ? "#121212" : "white" }}
          duration={0.5}
          className={style.hello}
        >
          Finished
        </FlipClockCountdown>
      </div>
    );
  }
}

export default CountDown;
