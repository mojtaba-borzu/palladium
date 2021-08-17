import React from "react";
import awesome from "./images/awesome.png";
import allLevel from "./images/allLevel.png";
import Group2642 from "./images/Group2642.png";
import Group2669 from "./images/Group2669.png";
import Group2670 from "./images/Group2670.png";
import Group2671 from "./images/Group2671.png";
import Group2672 from "./images/Group2672.png";
import Group2673 from "./images/Group2673.png";
import Component122 from "./images/Component122.png";
import Group2675 from "./images/Group2675.png";
import Group2676 from "./images/Group2676.png";
import Group2677 from "./images/Group2677.png";
import Group2678 from "./images/Group2678.png";
import Group2679 from "./images/Group2679.png";
import Group2680 from "./images/Group2680.png";
import Group2681 from "./images/Group2681.png";
import Group2682 from "./images/Group2682.png";
import onLayout from "./images/onLayout.png";

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
      <main className="flex flex-col w-full">
        <button
          className="flex justify-center w-full h-44 border hover:bg-backgroundHeader border-gray-200"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center">
            <span className="mr-5">تمام طبقات</span>
            <img className="mr-5 w-16 h-16" src={allLevel} alt="allLevel" />
          </div>
        </button>
        <button
          className="flex justify-center w-full h-44 border hover:bg-backgroundHeader border-gray-200"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center hover:bg-backgroundHeader">
            <span className="mr-5">طبقه پنجم</span>
            <img className="mr-5 w-16 h-16" src={Group2642} alt="allLevel" />
          </div>
        </button>
        <button
          className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center">
            <span className="mr-5">طبقه چهارم</span>
            <img className="mr-5 w-16 h-16" src={Group2669} alt="allLevel" />
          </div>
        </button>

        <button
          className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center">
            <span className="mr-5"> طبقه سوم میانی</span>
            <img className="mr-5 w-16 h-16" src={Group2670} alt="allLevel" />
          </div>
        </button>
        <button
          className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center">
            <span className="mr-5">طبقه سوم </span>
            <img className="mr-5 w-16 h-16" src={Group2671} alt="allLevel" />
          </div>
        </button>
        <button
          className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center ">
            <span className="mr-5">طبقه دوم میانی </span>
            <img className="mr-5 w-16 h-16" src={Group2672} alt="allLevel" />
          </div>
        </button>
        <button
          className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center">
            <span className="mr-5">طبقه دوم</span>
            <img className="mr-5 w-16 h-16" src={Group2673} alt="allLevel" />
          </div>
        </button>
        <button
          className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center">
            <span className="mr-5">طبقه اول</span>
            <img className="mr-5 w-16 h-16" src={onLayout} alt="allLevel" />
          </div>
        </button>
        <button
          className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center">
            <span className="mr-5">همکف</span>
            <img className="mr-5 w-16 h-16" src={Group2675} alt="allLevel" />
          </div>
        </button>
        <button
          className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center">
            <span className="mr-5"> زیر همکف</span>
            <img className="mr-5 w-16 h-16" src={Group2676} alt="allLevel" />
          </div>
        </button>
        <button
          className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center">
            <div className="w-3/5">
              <img
                className="w-32 h-22"
                src={Component122}
                alt="Component122"
              />
            </div>

            <span className="mr-5">پارکینگ 1</span>
            <img className="mr-5 w-16 h-16" src={Group2677} alt="allLevel" />
          </div>
        </button>
        <button
          className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center">
            <span className="mr-5">پارکینگ 2</span>
            <img className="mr-5 w-16 h-16" src={Group2678} alt="allLevel" />
          </div>
        </button>
        <button
          className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center">
            <span className="mr-5"> پارکینگ 3</span>
            <img className="mr-5 w-16 h-16" src={Group2679} alt="allLevel" />
          </div>
        </button>
        <button
          className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center">
            <span className="mr-5"> پارکینگ 4</span>
            <img className="mr-5 w-16 h-16" src={Group2680} alt="allLevel" />
          </div>
        </button>
        <button
          className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center">
            <span className="mr-5"> پارکینگ 5</span>
            <img className="mr-5 w-16 h-16" src={Group2681} alt="allLevel" />
          </div>
        </button>
        <button
          className="flex justify-center w-full h-44 border border-gray-200 hover:bg-backgroundHeader"
          type="button">
          <div className="flex flex-row justify-end w-full h-full items-center">
            <span className="mr-5">پارکینگ 6</span>
            <img className="mr-5 w-16 h-16" src={Group2682} alt="allLevel" />
          </div>
        </button>
      </main>
    </div>
  );
}

export default Levels;
