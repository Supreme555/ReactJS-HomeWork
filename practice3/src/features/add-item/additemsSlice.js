import { createSlice } from "@reduxjs/toolkit";
import { cars as carsData } from "../../../public/cars.data";

const initialState = {
  cars: carsData,
  //   value: 0,
};

export const additemsSlice = createSlice({
  name: "carItem",
  initialState,
  reducers: {
    addCar: (state, action) => {
      // let data = action.payload;
      console.log(action);
      //   state.cars((prev) => [...prev, { id: prev.length + 1, ...data }]);
      //   state.cars = action.payload;
      action.payload.name
        ? (state = state.cars.push(action.payload))
        : "NO NAME";
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCar } = additemsSlice.actions;

export default additemsSlice.reducer;
