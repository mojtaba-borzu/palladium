import React from "react";
import awesome from "./images/awesome.png";

function Levels() {
  return (
    <div className="flex flex-col">
      <header className="h-58 w-full flex justify-end bg-headersColor">
        <button className="w-full h-full" type="button">
          <div className="flex flex-row justify-end items-center h-full w-full">
            <span className="mr-5 font-bold">انتخاب طبقه</span>
            <img className="w-16 h-16 mr-5" src={awesome} alt="awesome" />
          </div>
        </button>
      </header>
    </div>
  );
}

export default Levels;
