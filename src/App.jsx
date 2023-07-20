import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MainPage } from "./models/main-page/MainPage";
import "./App.css";
// import { increment } from "./state/home.slice";

function App() {
  return (
    <>
      <MainPage />
    </>
  );
}

export default App;
