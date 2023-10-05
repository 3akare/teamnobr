import React, { useState } from "react";

//Components
import NavBar from "./components/NavBar";
import Main from "./components/Main";

//styles
import style from "./style.module.css";

function App() {
  const [dark, setDark] = useState(true);

  function handleClick() {
    setDark((state) => !state);
  }
  return (
    <div
      className={style.main}
      style={{
        color: dark ? "" : "white",
        backgroundColor: dark ? "" : "#121212",
        transition:
          "background-color ease-in-out 0.25s, color ease-in-out 0.25s",
      }}
    >
      <NavBar handleClick={handleClick} dark={dark} />
      <Main />
    </div>
  );
}

export default App;
