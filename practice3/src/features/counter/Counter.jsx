import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./counterSlice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const [per, setPer] = useState("fghj");
  const Check = () => {
    // console.log(per)
    dispatch(incrementByAmount(per));
  };
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        {/* <input type="text" onChange={(e)=>{setPer(e.target.value)}}/> */}
        <button
          onClick={() => {
            Check();
          }}
        >
          incrementByAmount
        </button>
      </div>
    </div>
  );
}
