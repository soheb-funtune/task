import React, { useEffect, useState } from "react";
import "../main-style.css";
import trash from "../../../assets/trash.png";
import edit from "../../../assets/edit.svg";
import Ellipsered from "../../../assets/Ellipsered.png";
import { useDispatch, useSelector } from "react-redux";
import { rowDeleted } from "../../../state/home.slice";
export const MainTable = ({ search }) => {
  const dispatch = useDispatch();
  const { titleArray, tableData: Tdata } = useSelector((state) => state.home);

  const [tabelData, setTableData] = useState([]);
  const [deleteCalled, setDeleteCalled] = useState("");
  console.log({ Tdata, tabelData });

  useEffect(() => {
    setTableData(Tdata);
  }, [Tdata]);
  useEffect(() => {
    if (deleteCalled) {
      let newArray = [];
      const filtered = tabelData?.map((item) =>
        item.id !== deleteCalled ? newArray.push(item) : false
      );
      console.log("hadleDelete", { filtered, newArray });
      dispatch(rowDeleted(newArray));
      setDeleteCalled("");
      console.log("useEffect");
    }
  }, [deleteCalled]);

  return (
    <>
      {" "}
      <div className="header">
        {titleArray?.map((item) => (
          <span>{item}</span>
        ))}
      </div>
      {search
        ? [
            ...tabelData?.map(
              (item) =>
                (item.Description.toLowerCase().includes(
                  search.toLowerCase()
                ) ||
                  item.ProductName.toLowerCase().includes(
                    search.toLowerCase()
                  )) &&
                item
            ),
          ]?.map(
            ({ id, ProductName, Description, Price, Discount, Available }) => (
              <div
                key={id}
                className={`header  ${id ? "show" : "hide"}`}
                // style={{ flexWrap: "wrap" }}
              >
                <tr>
                  <span>{id}</span>
                  <span>{ProductName}</span>
                  <span>{Description}</span>
                  <span>{Price}</span>
                  <span>{Discount}</span>
                  <span>
                    <img
                      className={`editandtrash ${
                        Available === "true" ? "greenElips" : "redElips"
                      }`}
                      src={Ellipsered}
                      alt="Ellipsered"
                    />
                  </span>
                  <span>
                    <img className="editandtrash" src={edit} alt="edit"></img>
                    <img
                      onClick={() => setDeleteCalled(id)}
                      className="editandtrash"
                      src={trash}
                      alt="trash"
                    ></img>
                  </span>
                </tr>
              </div>
            )
          )
        : tabelData?.map(
            ({ id, ProductName, Description, Price, Discount, Available }) => (
              <div key={id} className={`header  ${id ? "show" : "hide"}`}>
                <>
                  <span>{id}</span>
                  <span>{ProductName}</span>
                  <span>{Description}</span>
                  <span>{Price}</span>
                  <span>{Discount}</span>
                  <span>
                    <img
                      className={`editandtrash ${
                        Available === "true" ? "greenElips" : "redElips"
                      }`}
                      src={Ellipsered}
                      alt="Ellipsered"
                    />
                  </span>
                  <span>
                    <img className="editandtrash" src={edit} alt="edit"></img>
                    <img
                      onClick={() => setDeleteCalled(id)}
                      className="editandtrash"
                      src={trash}
                      alt="trash"
                    ></img>
                  </span>
                </>
              </div>
            )
          )}
    </>
  );
};
