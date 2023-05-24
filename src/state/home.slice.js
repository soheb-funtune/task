import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    titleArray: [
      "ID",
      "Product Name",
      "Description",
      "Price",
      "Discount",
      "Available",
      "Action",
    ],

    tableData: [
      {
        id: "01",
        ProductName: "soheb",
        Description: "Lorem...",
        Price: "20",
        Discount: "10",
        Available: true,
      },
      {
        id: "02",
        ProductName: "XYZ",
        Description: "Lorem...",
        Price: "10",
        Discount: "10",
        Available: true,
      },
      {
        id: "03",
        ProductName: "XYZ",
        Description: "Lorem...",
        Price: "10",
        Discount: "10",
        Available: true,
      },
    ],
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addRows: (state, action) => {
      console.log("addRows", action.payload);
      state.tableData = [...state.tableData, action.payload];
    },
    rowDeleted: (state, action) => {
      console.log("rowDeleted", action.payload);
      state.tableData = [...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addRows, rowDeleted } =
  homeSlice.actions;

export default homeSlice.reducer;
