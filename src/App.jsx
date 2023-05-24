import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useSelector, useDispatch } from "react-redux";
import { MainPage } from "./models/main-page/MainPage";
import "./App.css";
// import { increment } from "./state/home.slice";

function App() {
  return (
    <>
      <MainPage></MainPage>
    </>
  );
}

export default App;
