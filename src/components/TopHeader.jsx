import React from 'react'
import zoe from '../assets/icons/zoe.svg'
import alen from '../assets/icons/alen.svg'

const TopHeader = () => {
  return (
    <header>

      {/* Breadcrumb */}
      <p className='text-[11px] text-[#4A4A4A] mb-[14px]'>
        Home / Party Package / <span className='font-medium'>Selected item</span>
      </p>

      
      <div className='flex items-start justify-between w-[1200px] h-[98px] gap-[31px]'>

        {/* Plan Card */}
        <div className='w-full h-full  rounded-[18px] bg-white/45 px-[20px] flex flex-col justify-center'>
          <h3 className='text-[14px] font-medium text-[#1D1D1D]'>
            Pick a plan you'd both enjoy
          </h3>

          <div className='flex items-center gap-2 mt-1'>
            <img
              src={zoe}
              alt=""
              className='w-[28px] h-[28px] rounded-full object-cover'
            />

            <p className='text-[13px] font-medium'>
              Zoe Miller, 22
            </p>

            <img
              src={alen}
              alt=""
              className='w-[14px]'
            />
          </div>
        </div>

        {/* Right Profile */}
        <div className='flex justify-center items-center w-[201px] h-[69px] gap-[12px]'>

          <img
            src={alen}
            alt=""
            className='w-[52px] h-[52px] rounded-full border-[3px] border-[#7464E4]'
          />

          <div>
            <h3 className='text-[15px] font-medium text-[#4A4A4A]'>
              Alen Markram
            </h3>

            <button className='bg-[#F83E93] text-white text-[12px] px-[12px] py-[5px] rounded-full'>
              Get Verified
            </button>
          </div>
        </div>

      </div>
    </header>
  )
}

export default TopHeader