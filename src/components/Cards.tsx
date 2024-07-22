// import Image from '../assets/Card-1.jpeg'
import Slider from "./Slider";
import Slidertwo from "./Slidertwo";
import Sliderthree from "./Sliderthree";
import SliderFour from "./Sliderfour";
import Sliderfifth from "./Sliderfifth";
import SliderSixth from "./Slidersixth";
import sqaure from '../assets/squareicon.svg'
import { FaArrowRight } from "react-icons/fa6";
import { SlArrowRightCircle } from "react-icons/sl";

// import { Carousel, IconButton } from '@material-tailwind/react'

const Card = () => {
  // const images = [Image, Image, Image]
  return (
    <div className="container mx-auto justify-center m-10">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-[90%]  m-auto">
        <div className="relative  w-full">
          <a href="/#" className="relative w-full">
            <div className="shadow bg-white   border border-white hover:border-black">
              <Slider />
              <div className="pt-[20px] pl-[10px]">
                <h2
                  className="font-bold text-[24px] md:text-lg text-gray-800 line-clamp-1"
                  title="New York"
                >
                  Gustav-Tampel-StaBe 2
                </h2>
                <p
                  className="text-sm font-light text-gray-800 line-clamp-1"
                  title="New York, NY 10004, United States"
                >
                  Guastav-Tempel-StraBe 2
                </p>
              </div>
              <div className="pt-[20px] pl-[10px] pb-[10px] flex items-center gap-[20px]">
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                   <img src={sqaure} alt="" />
                    207.sqm
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                  <svg style={{width:'24px'}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalHotelOutlinedIcon"><path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2z"></path></svg>
                    1 Bedroom
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                  <svg  style={{width:'24px'}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StairsOutlinedIcon"><path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 3h-4.42v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18z"></path></svg>
                    3rd Floor
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2  p-3 bg-whiter bg-[#F5F5F5]bg-[#F5F5F5]">
                <div className="flex items-center">
                  <div className="relative">
                    <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                  </div>

                  <p className="text-gray-800 text-[12px] font-semibold line-clamp-1 border p-2">
                    From May 19
                  </p>
                </div>

                <div className="flex justify-end">
                  <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                    <span className="line-through text-[12px] mr-[4px] mt-[-4px]">€1,375</span>
                    <span className="text-xl uppercase text-purple ">
                      <span className="text-[#c355ff]">
                        €1,255
                        <br />
                      </span>
                    </span>
                    <h1 className="ml-12 text-[#707077] font-medium text-[12px]">
                      {" "}
                      monthly{" "}
                    </h1>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="relative  w-full">
          <a href="#" className="relative w-full  ">
            <div className="shadow bg-white   border border-white hover:border-black">
              <Slidertwo />
              <div className="pt-[20px] pl-[10px]">
                <h2
                  className="font-bold text-base md:text-lg text-gray-800 line-clamp-1"
                  title="New York"
                >
                  OstparkstraBe 45a
                </h2>
                <p
                  className="text-sm font-light text-gray-800 line-clamp-1"
                  title="New York, NY 10004, United States"
                >
                  OstparkstraBe 45a
                </p>
              </div>
              <div className="pt-[20px] pl-[10px] pb-[10px] flex items-center gap-[20px]">
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
                    </svg>
                    28.52
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                  <svg style={{width:'24px'}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalHotelOutlinedIcon"><path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2z"></path></svg>

                    1 Bedroom
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                  <svg  style={{width:'24px'}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StairsOutlinedIcon"><path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 3h-4.42v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18z"></path></svg>

                    1st Floor
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2  p-3 bg-whiter bg-[#F5F5F5]">
                <div className="flex items-center">
                  <div className="relative">
                    <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                  </div>

                  <p className="text-gray-800 text-[12px] font-semibold line-clamp-1 border p-2">
                    From June 02
                  </p>
                </div>

                <div className="flex justify-end">
                  <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                    <span className="text-xl uppercase text-purple ml-[30px]">
                      <span className="text-black">
                        €1,320
                        <br />
                      </span>
                    </span>
                    <h1 className="ml-12 text-[#707077] font-medium text-[12px]">
                      {" "}
                      monthly{" "}
                    </h1>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="relative  w-full">
          <a href="#" className="relative w-full  ">
            <div className="shadow bg-white   border border-white hover:border-black">
              <Sliderthree />
              <div className="pt-[20px] pl-[10px]">
                <h2
                  className="font-bold text-base md:text-lg text-gray-800 line-clamp-1"
                  title="New York"
                >
                  10 Beaty Road
                </h2>
                <p
                  className="text-sm font-light text-gray-800 line-clamp-1"
                  title="New York, NY 10004, United States"
                >
                  10 Beaty Road
                </p>
              </div>
              <div className="pt-[20px] pl-[10px] pb-[10px] flex items-center gap-[20px]">
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
                    </svg>
                    6 sqm.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                  <svg style={{width:'24px'}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalHotelOutlinedIcon"><path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2z"></path></svg>

                    3 Bedroom
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                  <svg  style={{width:'24px'}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StairsOutlinedIcon"><path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 3h-4.42v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18z"></path></svg>

                    10th Floor
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2  p-3 bg-whiter bg-[#F5F5F5]">
                <div className="flex items-center">
                  <div className="relative">
                    <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                  </div>

                  <p className="text-gray-800 text-[12px] font-semibold line-clamp-1 border p-2">
                    From Feb 10
                  </p>
                </div>

                <div className="flex justify-end">
                  <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                    <span className="text-xl uppercase text-purple ">
                      <span className="text-black">
                        SGD 2130
                        <br />
                      </span>
                    </span>
                    <h1 className="ml-12 text-[#707077] font-medium text-[12px]">
                      {" "}
                      monthly{" "}
                    </h1>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-[90%]  m-auto  mt-5">
        <div className="relative  w-full">
          <div className="relative w-full  ">
            <div className="shadow bg-white   border border-white hover:border-black">
              <SliderFour />
              <div className="pt-[20px] pl-[10px]">
                <h2
                  className="font-bold text-base md:text-lg text-gray-800 line-clamp-1"
                  title="New York"
                >
                  6 Sarkies Rd
                </h2>
                <p
                  className="text-sm font-light text-gray-800 line-clamp-1"
                  title="New York, NY 10004, United States"
                >
                  6 Sarkies Rd
                </p>
              </div>
              <div className="pt-[20px] pl-[10px] pb-[10px] flex items-center gap-[20px]">
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
                    </svg>
                    8 sqm.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                  <svg style={{width:'24px'}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalHotelOutlinedIcon"><path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2z"></path></svg>

                    3 Bedroom
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                  <svg  style={{width:'24px'}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StairsOutlinedIcon"><path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 3h-4.42v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18z"></path></svg>

                    5th Floor
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2  p-3 bg-whiter bg-[#F5F5F5]">
                <div className="flex items-center">
                  <div className="relative">
                    <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                  </div>

                  <p className="text-gray-800 text-[12px] font-semibold line-clamp-1 border p-2">
                    From Jul 9
                  </p>
                </div>

                <div className="flex justify-end">
                  <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                    <span className="text-xl uppercase text-purple ">
                      <span className="text-black">
                        SGD 2,263
                        <br />
                      </span>
                    </span>
                    <h1 className="ml-12 text-[#707077] font-medium text-[12px]">
                      {" "}
                      monthly{" "}
                    </h1>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative  w-full">
          <div className="relative w-full  ">
            <div className="shadow bg-white   border border-white hover:border-black">
              <Sliderfifth />
              <div className="pt-[20px] pl-[10px]">
                <h2
                  className="font-bold text-base md:text-lg text-gray-800 line-clamp-1"
                  title="New York"
                >
                  17 Tsing Fung Street
                </h2>
                <p
                  className="text-sm font-light text-gray-800 line-clamp-1"
                  title="New York, NY 10004, United States"
                >
                  17 Tsing Fung Street
                </p>
              </div>
              <div className="pt-[20px] pl-[10px] pb-[10px] flex items-center gap-[20px]">
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
                    </svg>
                    10 sqm.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                  <svg style={{width:'24px'}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalHotelOutlinedIcon"><path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2z"></path></svg>

                    3 Bedroom
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                  <svg  style={{width:'24px'}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StairsOutlinedIcon"><path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 3h-4.42v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18z"></path></svg>

                    7th Floor
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2  p-3 bg-whiter bg-[#F5F5F5]">
                <div className="flex items-center">
                  <div className="relative">
                    <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                  </div>

                  <p className="text-gray-800 text-[12px] font-semibold line-clamp-1 border p-2">
                    From Jul 02
                  </p>
                </div>

                <div className="flex justify-end">
                  <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                    <span className="text-xl uppercase text-purple">
                      <span className="text-black">
                        HK $10,500
                        <br />
                      </span>
                    </span>
                    <h1 className="ml-12 text-[#707077] font-medium text-[12px]">
                      {" "}
                      monthly{" "}
                    </h1>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative  w-full">
          <div className="relative w-full  ">
            <div className="shadow bg-white   border border-white hover:border-black">
              <SliderSixth />
              <div className="pt-[20px] pl-[10px]">
                <h2
                  className="font-bold text-base md:text-lg text-gray-800 line-clamp-1"
                  title="New York"
                >
                  5A Lorong How Sun
                </h2>
                <p
                  className="text-sm font-light text-gray-800 line-clamp-1"
                  title="New York, NY 10004, United States"
                >
                  5A Lorong How Sun
                </p>
              </div>
              <div className="pt-[20px] pl-[10px] pb-[10px] flex items-center gap-[20px]">
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M120-120v-200h80v120h120v80H120Zm520 0v-80h120v-120h80v200H640ZM120-640v-200h200v80H200v120h-80Zm640 0v-120H640v-80h200v200h-80Z" />
                    </svg>
                    8 sqm.
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                  <svg style={{width:'24px'}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalHotelOutlinedIcon"><path d="M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3m0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2z"></path></svg>

                    4 Bedroom
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[12px] font-light">
                  <svg  style={{width:'24px'}} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="StairsOutlinedIcon"><path d="M19 5v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-1 3h-4.42v3.33H11v3.33H8.42V16H6v2h4.42v-3.33H13v-3.33h2.58V8H18z"></path></svg>

                    12th Floor
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2  p-3 bg-whiter bg-[#F5F5F5]">
                <div className="flex items-center">
                  <div className="relative">
                    <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-primary-red rounded-full"></span>
                  </div>

                  <p className="text-gray-800 text-[12px] font-semibold line-clamp-1 border p-2">
                    From Feb 10
                  </p>
                </div>

                <div className="flex justify-end">
                  <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl">
                    <span className="text-xl uppercase text-purple ">
                      <span className="text-black">
                        SGD 2130
                        <br />
                      </span>
                    </span>
                    <h1 className="ml-12 text-[#707077] font-medium text-[12px]">
                      {" "}
                      monthly{" "}
                    </h1>
                  </p>
                </div>
              </div>

            </div>

          </div>
         

        </div>
      </div>
      <div>
      <div className="flex justify-end relatives w-[90%] mx-auto">
         <button className="Alllocationbtn flex items-center gap-4"> <span> All Locations  </span><FaArrowRight /></button>
         {/* <SlArrowRightCircle /> */}
         </div>
        </div>
    </div>
  );
};

export default Card;
