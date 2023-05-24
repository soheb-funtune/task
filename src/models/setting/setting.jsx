import React, { useState } from "react";
import "../main-page/main-style.css";
import close from "../../assets/close.svg";
import { setTitles } from "../../state/home.slice";
import { useDispatch } from "react-redux";

export const Setting = ({ setSetting }) => {
  const dispatch = useDispatch();
  const [inputs, setInputes] = useState({
    ProductName: false,
    Description: false,
    Price: false,
    Discount: false,
    Available: false,
  });
  const handleSubmit = () => {
    console.log("handleSubmit", inputs);
    if (
      inputs.ProductName ||
      inputs.Description ||
      inputs.Price ||
      inputs.Discount ||
      inputs.Available
    ) {
      let arr = [];
      inputs?.ProductName && arr.push("ProductName");
      inputs?.Description && arr.push("Description");
      inputs?.Price && arr.push("Price");
      inputs?.Discount && arr.push("Discount");
      inputs?.Available && arr.push("Available");
      console.log({ arr });
      dispatch(setTitles(["ID", ...arr, "Action"]));
      setSetting(false);
    }
  };
  return (
    <div className="AddWrapper modals">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Setting Pannel</h2>{" "}
        <img onClick={() => setSetting(false)} src={close} alt="cross" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "fit-contain",
          }}
        >
          <div className="inputWrapper settinInputWrap">
            <input
              className="input"
              id="ProductName"
              name="ProductName"
              //   value={"ProductName"}
              onChange={(e) =>
                setInputes({
                  ...inputs,
                  [e.target.name]: !inputs[[e.target.name]],
                })
              }
              placeholder="Product Name"
              type="checkbox"
            />
            <label htmlFor="ProductName">ProductName</label>
          </div>
          <div className="inputWrapper settinInputWrap">
            <input
              className="input"
              type="checkbox"
              id="Description"
              name="Description"
              placeholder="Discription"
              onChange={(e) =>
                setInputes({
                  ...inputs,
                  [e.target.name]: !inputs[[e.target.name]],
                })
              }
            />
            <label htmlFor="Description">Description</label>
          </div>
          <div className="inputWrapper settinInputWrap">
            <input
              className="input"
              id="Price"
              name="Price"
              type="checkbox"
              onChange={(e) =>
                setInputes({
                  ...inputs,
                  [e.target.name]: !inputs[[e.target.name]],
                })
              }
              placeholder="Price"
            />
            <label htmlFor="Price">Price</label>
          </div>
          <div className="inputWrapper settinInputWrap">
            <input
              className="input"
              id="Discount"
              name="Discount"
              type="checkbox"
              placeholder="Discount"
              onChange={(e) =>
                setInputes({
                  ...inputs,
                  [e.target.name]: !inputs[[e.target.name]],
                })
              }
            />
            <label htmlFor="Discount">Discount</label>
          </div>
          <div className="inputWrapper settinInputWrap">
            <input
              onChange={(e) =>
                setInputes({
                  ...inputs,
                  [e.target.name]: !inputs[[e.target.name]],
                })
              }
              className="input"
              id="Available"
              name="Available"
              type="checkbox"
              placeholder="Available"
            >
              {/* <option value="@">select</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option> */}
            </input>
            <label htmlFor="Available">Available</label>
          </div>
        </div>
      </div>
      <div>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => setSetting(false)}
        >
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
