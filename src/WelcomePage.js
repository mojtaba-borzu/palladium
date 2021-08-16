import React from "react";
import header from "./images/ougrgt.png";
import question from "./images/question.png";
import select from "./images/select.png";
import shop from "./images/shop.png";
import concierge from "./images/concierge.png";
function WelcomePage() {
  return (
    <>
      <div className="w-full bg-site-paladium bg-cover  h-screen ">
        <div className="w-full h-full bg-backgroundWelcome opacity-95 flex flex-col">
          <header className="bg-backgroundHeader w-full h-1/5 mt-10 flex justify-center items-center">
            <img className="w-137 h-137" src={header} alt="logo" />
          </header>
          <main className="text-white flex flex-col w-full align-middle h-4/5">
            <div className="w-full h-1/5 mt-6">
              <div className="w-full flex justify-center ">
                <span>به مرکز خرید پالادیوم</span>
              </div>
              <div className="w-full flex justify-center mt-3 text-36 font-bold">
                <span>خوش آمدید</span>
              </div>
            </div>

            <div className="w-full flex-col h-3/5  mt-2">
              <div className="w-full flex justify-center h-2/6 ">
                <div className="bg-layoutColor w-11/12 h-full rounded-2xl flex flex-row-reverse  items-center hover:bg-backgroundHeader ">
                  <div className="flex w-full flex-1 justify-center items-center">
                    <img className="w-42 h-42" src={question} alt="question" />
                  </div>
                  <div className="flex  flex-2 flex-col w-3/6 items-center">
                    <div className="w-full   flex justify-end ">
                      <span className="text-black font-bold">
                        راهنمای طبقات
                      </span>
                    </div>
                    <div className="w-full  flex justify-end ">
                      <span className="text-black text-right">
                        شما می توانید راهنمای طبقات را مشاهده نمایید
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-center items-center">
                    <img className="w-6.8 h-12" src={select} alt="arrow" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center h-2/6 mt-18">
                <div className="bg-layoutColor w-11/12 h-full rounded-2xl flex flex-row-reverse  items-center hover:bg-backgroundHeader ">
                  <div className="flex w-full flex-1 justify-center items-center">
                    <img className="w-42 h-42" src={shop} alt="question" />
                  </div>
                  <div className="flex  flex-2 flex-col w-3/6 items-center">
                    <div className="w-full   flex justify-end ">
                      <span className="text-black font-bold">
                        پیشنهادات ویژه خرید{" "}
                      </span>
                    </div>
                    <div className="w-full  flex justify-end ">
                      <span className="text-black text-right">
                        شما می توانید پیشنهادات ویژه مرکز خرید را مشاهده نمایید
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-center items-center">
                    <img className="w-6.8 h-12" src={select} alt="arrow" />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-center h-2/6 mt-18 ">
                <div className="bg-layoutColor w-11/12 h-full rounded-2xl flex flex-row-reverse  items-center hover:bg-backgroundHeader ">
                  <div className="flex w-full flex-1 justify-center items-center">
                    <img className="w-42 h-42" src={concierge} alt="question" />
                  </div>
                  <div className="flex  flex-2 flex-col w-3/6 items-center">
                    <div className="w-full   flex justify-end ">
                      <span className="text-black font-bold">سفارش غذا</span>
                    </div>
                    <div className="w-full  flex justify-end ">
                      <span className="text-black text-right">
                        شما می توانید به صورت آنلاین از فودکورت سفارش ثبت کنید
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-center items-center">
                    <img className="w-6.8 h-12" src={select} alt="arrow" />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
