// import Image from '../assets/Card (1)/1.jpeg'
import React, { useRef, useState } from "react";

import Doted from "../assets/doted.png";

// import Foo from './Text'
export default function End() {
  return (
    <>
      <div className="relative doted  mt-[-100px] flex justify-end align-center m-auto items-center h-[600px] text-center  ">
        <div
          className="absolute inset-0 bg-cover bgrespons"
          style={{
            backgroundImage: `url(${Doted})`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="flex flex-col mt-40 md:flex-row justify-start items-start md:items-center gap-4 p-4">
            {/* Column 1 */}
            <div className="md:w-1/2  mt-[-40px]  justify-start md:justify-start items-start">
              <p className="w-full ms-[-144px] mb-[20px] text-[8px] respoAbout">ABOUT HABYT</p>
              <h1 className="text-4xl text-start -ms-[-100px] font-bold text-gray-800 respoMX">
                Boundless stays, <br /> built for every move.
              </h1>
            </div>

            {/* Column 2 */}
            <div className="md:w-1/2 p-8 mt-16 w-56 mx-16 respoMX respopadding">
              <p className="mt-4 md:mt-0 text-start text-lg">
                The rental housing model was broken. From bad paperwork, to
                worse flatmates — unlocking your next move was never
                straightforward.
                <br />
                <br />
                <br />
                So we decided to turn hassle into opportunity. We’ve
                standardized the housing process for both Tenants and Landlords
                with a digital-first approach that provides solutions, not
                stress.
              </p>
              <br />
              <a
                href='#'
                className='decoration-0 w-fit font-bold hover:border-b-2 hover:border-zinc-900 text-en ms-[300px]'>
                Learn more about us 
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
