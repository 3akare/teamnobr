import React, { Component } from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

class Example extends Component {
  render() {
    return (
      <FlipClockCountdown
        to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
        labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
        labelStyle={{
          fontSize: 10,
          fontWeight: 500,
          textTransform: "uppercase",
          color: "black",
        }}
        digitBlockStyle={{ width: 32, height: 50, fontSize: 30 }}
        dividerStyle={{ color: "white", height: 1 }}
        separatorStyle={{ color: "#F5841B", size: "6px" }}
        duration={0.5}
      >
        Finished
      </FlipClockCountdown>
    );
  }
}

function App() {
  return (
    <>
    <nav>
      <div>
        <div></div>
      </div>
    </nav>
    <main className="main">
      <h1 className="body--text">
        Countdown to the <span style={{ color: "#f5841b" }}>nobr</span> team
        website
      </h1>
      <div>
        <Example />
      </div>
      <img
        src="/launch.svg"
        alt=""
        aria-disabled
        className="body--image"
      />
    </main>
    </>
  );
}

export default App;
