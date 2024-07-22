import React from 'react'
import Doted from "../assets/animate.gif";

const WhyHabyt = () => {
  return (
    <div className='why max-w-[1440px] mx-auto flex flex-col lg:flex-row border-t-2 border-b-2 border-gray-500 text-gray-800'>
      <div className='whyright w-[100%] lg:w-[50%] flex justify-start lg:justify-center p-8 lg:p-0 items-center text-4xl font-bold '>
        <img src={Doted} alt="" />
      </div>

      <div className='options flex flex-col   w-[100%] lg:w-[50%] border-l-2 border-gray-500 border-t-2 border-t-0 gap-[80px] lg:gap-[20px] pb-[62px] lg:[pb-0]  responsiveborder'>
        <div className='one flex flex-col pt-16 pb-16 justify-center lg:items-center items-start lg:flex-row h-[100px] gap-[20px] lg-[gap-1px] mt-[40px]'>
          {/* <h1 className='para  w-[20px] text-3xl  pr-12 flex justify-center items-center border-r-2 border-gray-500 h-[100%]'>1</h1> */}
          <h1 className='text-[96px] ml-[20px] font-bold p-1 border-l-8 h-[100px] flex items-center border-transparent transition duration-300 hover:border-[#C2E976] pl-[20px]'>
            01
          </h1>
          <div className='ml-[20px] chooseRes'>
            <h2 className='text-[28px] leading-[34px] font-bold pb-2'>
              Choose Your Stay
            </h2>
            <p className='leading-[26px] text-[17px] pb-2'>
              Send your application through a simple online form to reserve your
              desired accommodation.
            </p>
          </div>
        </div>
        <div className='one flex flex-col pt-16 pb-16 justify-center lg:items-center items-start lg:flex-row h-[100px] gap-[20px] lg-[gap-1px]  '>
          {/* <h1 className='para  w-[20px] text-3xl  pr-12 flex justify-center items-center border-r-2 border-gray-500 h-[100%]'>1</h1> */}
          <h1 className='text-[96px] ml-[20px] font-bold p-1 border-l-8 h-[100px] flex items-center border-transparent transition duration-300 hover:border-[#C2E976] pl-[20px]'>
            02
          </h1>
          <div>
            <h2 className='text-[28px] leading-[34px] font-bold pb-2'>
              Sales Follow-up & Approval
            </h2>
            <p className='leading-[26px] text-[17px] pb-2'>
              Our Sales Team contacts you to finalize the details of your
              reservation.
            </p>
          </div>
        </div>
        <div className='one flex flex-col pt-16 pb-16 justify-center lg:items-center items-start  lg:flex-row h-[100px] gap-[20px] lg-[gap-1px] mt-[20px] lg:mt-[1px] '>
          {/* <h1 className='para  w-[20px] text-3xl  pr-12 flex justify-center items-center border-r-2 border-gray-500 h-[100%]'>1</h1> */}
          <h1 className='text-[96px] ml-[20px] font-bold p-1 border-l-8 h-[100px] flex items-center border-transparent transition duration-300 hover:border-[#C2E976] pl-[20px]'>
            03
          </h1>
          <div className='ml-[10px]'>
            <h2 className='   text-[28px] leading-[34px] font-bold pb-2'>
              Online Contract Signature
            </h2>
            <p className='leading-[26px] text-[17px] pb-2'>
              You can sign all contracts and agreements fully online through
              your personal Habyt profile and set your move ‒ in date.
            </p>
          </div>
        </div>
        <div className='one flex flex-col pt-16 pb-16 justify-center lg:items-center items-start lg:flex-row h-[100px] gap-[40px] lg-[gap-1px] mt-[20px] lg:mt-[1px] respon04'>
          {/* <h1 className='para  w-[20px] text-3xl  pr-12 flex justify-center items-center border-r-2 border-gray-500 h-[100%]'>1</h1> */}
          <h1 className='text-[96px] ml-[20px] font-bold p-1 border-l-8 h-[100px] flex items-center border-transparent transition duration-300 hover:border-[#C2E976] pl-[20px]'>
            04
          </h1>
          <div className='ml-[10px]'>
            <h2 className='   text-[28px] leading-[34px] font-bold pb-2'>
              Move-in to your Habyt Home
            </h2>
            <p className='leading-[26px] text-[17px] pb-2'>
              Once everything is set up, it’s time to move-in. You just need to
              follow the directions sent by email and bring your luggage. Enjoy
              your stay!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyHabyt
