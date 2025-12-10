import React, { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const incNum = () => {
    setCount(count + 1);
  };

  const decNum = () => {
    setCount(count - 1);
  };
  return (
    <div className="h-[500px] w-[500px] shadow-2xl shadow-[#000000] rounded-md">
      <div className="h-full w-full flex flex-col gap-6 items-center justify-center">
        <h1 className="text-3xl text-center font-medium shadow-sm shadow-[#000000] rounded-md w-55">
          Count is {count}
        </h1>
        <div className="gap-4 flex justify-center items-center font-light">
          <button
            onClick={incNum}
            className="cursor-pointer px-4 py-2 shadow-sm shadow-[#000000] rounded-md w-fit hover:font-semibold transition-all ease-in-out"
          >
            Increase
          </button>
          <button
            onClick={decNum}
            className="cursor-pointer px-4 py-2 shadow-sm shadow-[#000000] rounded-md w-fit hover:font-semibold transition-all ease-in-out"
          >
            Decrease
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
