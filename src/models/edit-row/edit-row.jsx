import React, { useState } from "react";
import "../main-page/main-style.css";
import close from "../../assets/close.svg";
import { addRows, editRows } from "../../state/home.slice.js";
import { useDispatch, useSelector } from "react-redux";

export const EditRow = ({ editItem, setShowEdit }) => {
  const { tableData } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  const [inputs, setInputes] = useState(editItem ? editItem : {});

  const handleSubmit = () => {
    console.log("handleSubmit", inputs);
    if (
      inputs.ProductName &&
      inputs.Description &&
      inputs.Price &&
      inputs.Discount &&
      inputs.Available
    ) {
      const updatedData = tableData?.map((item) =>
        item?.id === inputs?.id ? inputs : item
      );
      dispatch(editRows(updatedData));
      setShowEdit(false);
    } else {
      document.getElementById("error").innerText =
        "All Fields are Mendatory !!!";
    }
  };
  return (
    <div className="AddWrapper modals ">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Edit Form</h2>{" "}
        <img onClick={() => setShowEdit(false)} src={close} alt="cross" />
      </div>
      <div className="inputWrapper">
        <input
          className="input"
          id="ProductName"
          name="ProductName"
          value={inputs?.ProductName}
          onChange={(e) =>
            setInputes({ ...inputs, [e.target.name]: e.target.value })
          }
          placeholder="Product Name"
          type="text"
        />
      </div>
      <div className="inputWrapper">
        <textarea
          className="input"
          id="Description"
          name="Description"
          placeholder="Discription"
          value={inputs?.Description}
          onChange={(e) =>
            setInputes({ ...inputs, [e.target.name]: e.target.value })
          }
          type="text-aria"
          row={25}
        />
      </div>
      <div className="inputWrapper">
        <input
          className="input"
          id="Price"
          name="Price"
          type="text-aria"
          value={inputs?.Price}
          onChange={(e) =>
            setInputes({ ...inputs, [e.target.name]: e.target.value })
          }
          placeholder="Price"
        />
      </div>
      <div className="inputWrapper">
        <input
          className="input"
          id="Discount"
          name="Discount"
          type="text-aria"
          placeholder="Discount"
          value={inputs?.Discount}
          onChange={(e) =>
            setInputes({ ...inputs, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="inputWrapper">
        <select
          className="input"
          id="Available"
          name="Available"
          type="select"
          onChange={(e) =>
            setInputes({
              ...inputs,
              [e.target.name]: e.target.value,
            })
          }
          value={inputs?.Available}
          placeholder="Available"
        >
          <option value="@">select</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      <div>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => setShowEdit(false)}
        >
          Cancle
        </button>
        <button
          disabled={editItem === inputs}
          onClick={() => {
            handleSubmit();
          }}
        >
          Save
        </button>
      </div>
      <p style={{ color: "red" }} id="error">
        {" "}
      </p>
    </div>
  );
};
