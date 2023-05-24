import React, { useState } from "react";
import "./main-style.css";
import settings from "../../assets/settings.svg";
import plus from "../../assets/plus.svg";
import { MainTable } from "./main-table/main-table.jsx";
import { AddPage } from "../add-page/add-page";

export const MainPage = () => {
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
          <img onClick={() => setAdd(!setting)} src={settings} alt="settings" />
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
      {/* {setting && <AddPage setSetting={setSetting} />} */}
    </div>
  );
};
