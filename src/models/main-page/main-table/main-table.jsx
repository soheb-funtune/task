import React, { useEffect, useState } from "react";
import "../main-style.css";
import trash from "../../../assets/trash.png";
import edit from "../../../assets/edit.svg";
import Ellipsered from "../../../assets/Ellipsered.png";
import { useDispatch, useSelector } from "react-redux";
import { rowDeleted } from "../../../state/home.slice";
import { EditRow } from "../../edit-row/edit-row.jsx";
export const MainTable = ({ search }) => {
  const dispatch = useDispatch();
  const { titleArray, tableData: Tdata } = useSelector((state) => state.home);

  const [titleData, setTitleData] = useState([]);
  const [tabelData, setTableData] = useState([]);
  const [deleteCalled, setDeleteCalled] = useState("");
  const [editItem, setEdit] = useState("");
  const [showEdit, setShowEdit] = useState(false);
  console.log({ Tdata, tabelData });

  console.log({ titleArray, titleData });
  useEffect(() => {
    setTitleData(titleArray);
    // let arr = [];
    // titleArray?.ProductName && arr.push("ProductName");
    // titleArray?.Description && arr.push("Description");
    // titleArray?.Price && arr.push("Price");
    // titleArray?.Discount && arr.push("Discount");
    // titleArray?.Available && arr.push("Available");
    // console.log({ arr });
    // setTitleData({ arr });
  }, [titleArray]);
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
  console.log({ editItem });
  return (
    <>
      {" "}
      <div className="header modals">
        {titleData?.map((item) => (
          <span widthL={titleData?.length} className="ColumnWidth" key={item}>
            {item}
          </span>
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
            ({
              id,
              ProductName,
              Description,
              Price,
              Discount,
              Available,
            } = item) => (
              <div
                key={id}
                className={`header  ${id ? "show" : "hide"}`}
                // style={{ flexWrap: "wrap" }}
              >
                <tr>
                  {titleData?.includes("ID") && <span>{id}</span>}
                  {titleData?.includes("ProductName") && (
                    <span>{ProductName}</span>
                  )}
                  {titleData?.includes("Description") && (
                    <span>{Description}</span>
                  )}
                  {titleData?.includes("Price") && <span>{Price}</span>}
                  {titleData?.includes("Discount") && <span>{Discount}</span>}
                  {titleData?.includes("Available") && (
                    <span>
                      <img
                        className={`editandtrash ${
                          Available === "false" || !Available
                            ? "redElips  "
                            : "greenElips"
                        }`}
                        src={Ellipsered}
                        alt="Ellipsered"
                      />
                    </span>
                  )}
                  <span>
                    <img
                      onClick={() => {
                        setEdit({
                          id,
                          ProductName,
                          Description,
                          Price,
                          Discount,
                          Available,
                        });
                        setShowEdit(true);
                      }}
                      className="editandtrash"
                      src={edit}
                      alt="edit"
                    ></img>
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
                  {titleData?.includes("ID") && <span>{id}</span>}
                  {titleData?.includes("ProductName") && (
                    <span>{ProductName}</span>
                  )}
                  {titleData?.includes("Description") && (
                    <span>{Description}</span>
                  )}
                  {titleData?.includes("Price") && <span>{Price}</span>}
                  {titleData?.includes("Discount") && <span>{Discount}</span>}
                  {titleData?.includes("Available") && (
                    <span>
                      <img
                        className={`editandtrash ${
                          Available === "false" || !Available
                            ? "redElips  "
                            : "greenElips"
                        }`}
                        src={Ellipsered}
                        alt="Ellipsered"
                      />
                    </span>
                  )}
                  <span>
                    <img
                      onClick={() => {
                        setEdit({
                          id,
                          ProductName,
                          Description,
                          Price,
                          Discount,
                          Available,
                        });
                        setShowEdit(true);
                      }}
                      className="editandtrash"
                      src={edit}
                      alt="edit"
                    ></img>
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
      {editItem && showEdit && (
        <EditRow editItem={editItem} setShowEdit={setShowEdit} />
      )}
    </>
  );
};
