import React from "react";
import logoUp from "./images/logoUp.png";
import { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import calender from "./images/calender.png";
import clock from "./images/clock.png";
import onLayout from "./images/onLayout.png";
import Mask from "./images/Mask.png";
import arrow from "./images/arrow.png";
import { market } from "./Data";
import banner4 from "./images/banner4.png";

function HomePage() {
  const [stor, setStor] = useState(market);
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);
  const tick = () => {
    setDate(new Date());
  };

  return (
    <div className="flex flex-col w-full overflow-hidden ">
      <header className="flex flex-col justify-center ">
        <nav className="w-full h-58">
          <div className="flex flex-row-reverse w-full h-full items-center">
            <div className="flex flex-1 flex-col w-full h-full justify-center mr-5">
              <button type="button">
                <div className="w-18 h-3 bg-humColor rounded-lg"></div>
                <div className="w-18 h-3 bg-humColor mt-4 rounded-lg "></div>
                <div className="w-18 h-3 bg-humColor mt-4 rounded-lg"></div>
              </button>
            </div>
            <div className="flex flex-2 w-full h-full justify-center ml-7">
              <img className="w-134 h-58 " src={logoUp} alt="logo_palladium" />
            </div>
          </div>
        </nav>
        <div className="flex flex-row-reverse h-44 w-full border-gray-200 border-t-2 border-b-2">
          <div className="flex flex-1  w-full flex-row-reverse">
            <div className=" w-18 h-full flex justify-center items-center ">
              <img
                className=" -ml-10  w-18 h-18"
                src={calender}
                alt="calender"
              />
            </div>
            <div className="flex justify-end relative">
              <div className="absolute border-white z-10 border-r-2 border-t-2 ml-2 border-b-2  border-l-2 w-full h-full"></div>
              <DatePicker
                onChange={onChange}
                value={value}
                calendarAriaLabel=""
                calendarIcon=""
                clearIcon=""
                format="y/MM/dd"
              />
            </div>
          </div>
          <div className="flex flex-1 w-full h-full items-center  flex-row-reverse  justify-center tet">
            <div className="">
              <img className="ml-4 w-18 h-18" src={clock} alt="clock" />
            </div>
            {date.toLocaleTimeString()}
          </div>
          <div className="flex flex-1 justify-center h-full items-center">
            <button
              className="w-101 h-33 rounded-full bg-buttonColor text-12 text-white "
              type="button">
              پیشنهادات ویژه
            </button>
          </div>
        </div>
      </header>
      <div className="  w-full h-54 bg-scrollColor px-5 overflow-scroll ">
        <div className=" flex flex-row-reverse items-center  w-max h-full  overflow-scroll ">
          <button
            className="flex justify-center  text-center border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4 clear-left"
            type="button">
            <span className="w-full">{"انتخاب  طبقه"}</span>
          </button>
          <button
            className="border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4"
            type="button">
            {"همه دسته بندی ها "}
          </button>
          <button
            className="border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4"
            type="button">
            {" پوشاک مردانه"}
          </button>
          <button
            className="border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4"
            type="button">
            {"پوشاک زنانه "}
          </button>
          <button
            className="border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4"
            type="button">
            {"زیور آلات "}
          </button>
          <button
            className="border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4"
            type="button">
            {"کیف و کفش "}
          </button>
          <button
            className="border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4"
            type="button">
            {"موبایل و لپ تاپ "}
          </button>
          <button
            className="border rounded-full border-gray-300 hover:border-buttonColor hover:text-buttonColor bg-white h-32 px-4 mx-4"
            type="button">
            {"لوازم خانگی "}
          </button>
        </div>
      </div>
      <div className="w-full flex justify-start h-35 items-center flex-row-reverse ">
        <span className="text-textL mr-5">36</span>
        <span className="text-textL"> مورد یافت شد </span>
      </div>
      <div className="w-full h-35 flex flex-row-reverse justify-center items-center bg-backgroundlayoutColor">
        <div className="flex-1 flex flex-row-reverse h-full items-center justify-evenly">
          <img className="w-21 h-22" src={onLayout} alt="onLayout" />
          <span className="font-bold">طبقه اول</span>
        </div>
        <div className="flex flex-1"></div>

        <div className="flex flex-1 justify-around flex-row-reverse  ml-5 h-full items-center float-right ">
          <span className="pr-5">36</span>
          <span className="pl-5"> مورد</span>

          <button className="" type="button x">
            <div className="w-15 h-15 rounded-full border-2 border-buttonColor "></div>
          </button>
        </div>
      </div>
      <div className="relative border border-gray-200">
        <div className="w-full h-216    overflow-scroll ">
          <div className="flex flex-col justify-center absolute w-39 h-48 rounded-lg bg-white mt-4 ml-4">
            <div className="flex justify-center">
              <img className="w-18 h-18" src={arrow} alt="arrow" />
            </div>
            <div className="flex justify-center">
              <span className="text-sm">شمال</span>
            </div>
          </div>
          <div className="  flex justify-center  h-h200 w-max">
            <img className=" h-full " src={Mask} alt="mask" />
          </div>
        </div>
      </div>
      <div className="w-full h-44 flex justify-end -ml-5 items-center">
        <span>QR code محل قرارگیری</span>
      </div>
      <div className="flex flex-col">
        {stor.map((stors) => (
          <div
            key={stors.id}
            className="flex flex-row-reverse mt-4 w-full h-39 px-4">
            <div className="w-79 h-full flex mt-4 flex-1 justify-center  bg-gray-200 items-center text-layouttextColor  ml-2 ">
              <span>{stors.name} </span>
            </div>

            <div className=" h-full w-4/5 mt-4  flex flex-2 justify-end pr-5 items-center text-layouttextColor border-2 border-borderColor">
              <span> {stors.fname}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center w-full h-65 fixed bottom-5">
        <div className="flex justify-center w-h99 h-full relative">
          <div className="absolute flex justify-end w-full">
            <button
              className=" mt-4 px-4 mr-5 border-b bg-gray-300 rounded-lg"
              type="button">
              <span className="text-xs"> بستن تبلیغ</span>
            </button>
          </div>

          <img className="w-full h-full" src={banner4} alt="banner4" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
