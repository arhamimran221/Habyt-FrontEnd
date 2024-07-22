import React from "react";
import Doted from "../assets/lines.png";

const HowWeDo = () => {
  return (
    <>
      <div
        className=" max-w-[1440px] m-auto flex flex-col lg:flex-row text-gray-800 mt-[-250px] mx-auto bgrespons"
        style={{
          backgroundImage: `url(${Doted})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          
          // width:'56%',
        }}
      >
        <div className="flex  z-10 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
            <div className="col-span-1 md:col-span-2 text-center">
            </div>
            {/* Commitment 1 */}
            <div className="lg:p-4 p-1">
              <div className=" mt-[420px] flex flex-col respmargin">
              <p className="text-[50px]  text-gray-800 font-bold font-sans  lg:w-full  text-left pl-[55px]">
                These are our <br /> commitments to you.
              </p>
              </div>
            </div>
            {/* Commitment 2 */}
            <div className="p-4">
              <div className="mx-[110px] mt-[420px] flex flex-col gap-4 w-full respoMX">
                <div className="bg-[#EF8250] w-[30px] h-[30px]"></div>
                <h2 className="text-2xl font-bold font-sans">
                  We tell it like it is
                </h2>
                <p className="text-[16px] font-sans w-[400px]">
                  We strive to set a new standard in housing, keeping every
                  communication you have with us straight, clear, and as
                  informative as possible.
                </p>
              </div>
            </div>
            {/* Commitment 3 */}
            <div className="p-4 ">
              <div className="mt-[280px] flex flex-col gap-4 w-full respoMX pl-[56px] respopadding">
                <div className="bg-[#F0A93C] w-[30px] h-[30px]"></div>
                <h2 className="text-[20px] font-bold font-sans text-[#272220]">
                  We are here at every turn
                </h2>
                <p className="text-[14px] font-sans pr-[30px]">
                  Securing the right stay should be easy. That’s why we're
                  committed to eliminating all the unnecessary steps to housing,
                  keeping it as simple as possible.
                </p>
              </div>
            </div>
            {/* Commitment 4 */}
            <div className="p-4">
              <div className=" mt-[280px] flex flex-col gap-4 w-full respoMX respopadding">
                <div className="bg-[#FFD378] w-[30px] h-[30px]"></div>
                <h2 className="text-[20px] font-bold font-sans text-[#272220]">
                  We break barriers
                </h2>
                <p className="text-[14px] font-sans pr-[30px] w-[330px]">
                  Securing the right stay should be easy. That’s why we're
                  committed to eliminating all the unnecessary steps to housing,
                  keeping it as simple as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowWeDo;
