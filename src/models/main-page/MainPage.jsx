import React, { useState } from "react";
import "./main-style.css";
import settings from "../../assets/settings.svg";
import plus from "../../assets/plus.svg";
import { MainTable } from "./main-table/main-table.jsx";
import { AddPage } from "../add-page/add-page";
import { Setting } from "../setting/setting.jsx";
import { useSelector } from "react-redux";

export const MainPage = () => {
  const { titleArray } = useSelector((state) => state.home);
  const [search, setSearch] = useState("");
  const [add, setAdd] = useState(false);
  const [setting, setSetting] = useState(false);
  return (
    <div>
      <header style={{ marginBottom: "15px" }}>
        <b>Products</b>
        <div className="right-div">
          <input
            type="text"
            onChange={(e) => setSearch(() => e.target.value.toString())}
            name="search"
            placeholder="Search"
          />
          <img
            onClick={() => setSetting(!setting)}
            src={settings}
            alt="settings"
          />
          <img
            onClick={() => setAdd(!add)}
            src={plus}
            alt="plus"
            className="plus"
          />
        </div>
      </header>
      <MainTable search={search} />
      {add && <AddPage setAdd={setAdd} />}
      {setting && <Setting setSetting={setSetting} />}
    </div>
  );
};
