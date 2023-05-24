import React, { useState } from "react";
import ".././main-page/main-style.css";
import close from "../../assets/close.svg";
import { addRows } from "../../state/home.slice";
import { useDispatch } from "react-redux";

export const AddPage = ({ setAdd }) => {
  const dispatch = useDispatch();
  const [inputs, setInputes] = useState({});
  const handleSubmit = () => {
    console.log("handleSubmit", inputs);
    if (
      inputs.ProductName &&
      inputs.Description &&
      inputs.Price &&
      inputs.Discount &&
      inputs.Available
    ) {
      console.log("random", Math.floor(Math.random() * 19999), {
        id: Math.floor(Math.random() * 19999),
        ...inputs,
      });
      dispatch(addRows({ id: Math.floor(Math.random() * 19999), ...inputs }));
      setAdd(false);
    } else {
      document.getElementById("error").innerText =
        "All Fields are Mendatory !!!";
    }
  };
  return (
    <div className="AddWrapper">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Form</h2>{" "}
        <img onClick={() => setAdd(false)} src={close} alt="cross" />
      </div>
      <div className="inputWrapper">
        <input
          className="input"
          id="ProductName"
          name="ProductName"
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
          onChange={(e) =>
            setInputes({ ...inputs, [e.target.name]: e.target.value })
          }
        />
      </div>
      <div className="inputWrapper">
        <select
          onChange={(e) =>
            setInputes({
              ...inputs,
              [e.target.name]: e.target.value,
            })
          }
          className="input"
          id="Available"
          name="Available"
          type="select"
          placeholder="Available"
        >
          <option value="@">select</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
      </div>
      <div>
        <button style={{ marginRight: "10px" }} onClick={() => setAdd(false)}>
          Cancle
        </button>
        <button
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
