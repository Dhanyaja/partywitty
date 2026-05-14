import React from 'react'
import location from '../assets/icons/location.svg'
import star from '../assets/icons/star.svg'
import arrowDown from '../assets/icons/downarrow.svg'

import avatar1 from '../assets/icons/zoe.svg'
import avatar2 from '../assets/icons/zoe.svg'
import avatar3 from '../assets/icons/zoe.svg'
import { useNavigate } from 'react-router-dom'

const EventCard = ({ event }) => {

  const navigate = useNavigate()

  return (
    <article className='
      w-[380px]
      rounded-[26px]
      overflow-hidden
      bg-[#F6F1E8]
      shadow-sm
      cursor-pointer
    ' onClick={() => navigate("/buy-drinks")}
    >

      {/* Image Section */}
      <div className='relative h-[430px]'>

        <img
          src={event.image}
          alt={event.title}
          className='w-full h-full object-cover'
        />

        {/* Top badges */}
        <div className='absolute top-[18px] left-[18px]'>
          <span className='
            px-[14px]
            py-[5px]
            rounded-full
            bg-[#1D8B3B]
            text-[11px]
            text-white
          '>
            HAPPENING NOW
          </span>
        </div>

        <div className='absolute top-[18px] right-[18px]'>
          <span className='
            px-[14px]
            py-[5px]
            rounded-full
            bg-[#C8B6D9]
            text-[11px]
            text-[#1D1D1D]
          '>
            Vibe Matches
          </span>
        </div>

        {/* Bottom Overlay */}
        <div className='absolute bottom-[28px] left-[22px] right-[22px] text-white'>

          <p className='text-[13px] tracking-[2px] uppercase'>
            {event.club}
          </p>

          <div className='flex justify-between items-end mt-[8px]'>

            <div className='flex items-center gap-[10px]'>

              <h2 className='text-[42px] font-bold leading-none'>
                {event.title}
              </h2>

              <div className='
                flex items-center
                gap-[4px]
                bg-black/40
                rounded-full
                px-[12px]
                py-[5px]
              '>
                <img
                  src={star}
                  alt=""
                  className='w-[12px]'
                />
                <span className='text-[14px]'>
                  {event.rating}
                </span>
              </div>
            </div>

            <div className='text-right'>
              <p className='text-[22px] font-medium'>
                {event.day}
              </p>

              <p className='text-[16px]'>
                {event.time}
              </p>
            </div>
          </div>
        </div>

        {/* Pink Tag */}
        <div className='
          absolute
          bottom-[-16px]
          left-1/2
          -translate-x-1/2
          bg-[#FF4F93]
          rounded-full
          px-[18px]
          py-[8px]
          flex items-center
          gap-[8px]
          z-20
          w-max
        '>
          <img
            src={avatar1}
            alt=""
            className='w-[24px] h-[24px] rounded-full shrink-0'
          />

          <span className='text-white text-[13px] whitespace-nowrap'>
            Zoya has been here twice
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='px-[24px] pt-[34px] pb-[22px]'>

        <div className='flex justify-between'>

          <div>

            <div className='flex items-center gap-[8px]'>
              <img
                src={location}
                alt=""
                className='w-[18px]'
              />

              <h3 className='font-semibold text-[24px]'>
                {event.location}
              </h3>
            </div>

            <p className='text-[15px] text-[#5E5E5E] mt-[5px]'>
              {event.address} • {event.distance}
            </p>
          </div>

          <button>
            <img
              src={arrowDown}
              alt=""
              className='w-[20px]'
            />
          </button>
        </div>

        {/* Bottom Row */}
        <div className='flex justify-between items-center mt-[18px]'>

          <div className='flex items-center'>

            <img
              src={avatar1}
              alt=""
              className='w-[42px] h-[42px] rounded-full border-2 border-white'
            />

            <img
              src={avatar2}
              alt=""
              className='w-[42px] h-[42px] rounded-full border-2 border-white -ml-3'
            />

            <img
              src={avatar3}
              alt=""
              className='w-[42px] h-[42px] rounded-full border-2 border-white -ml-3'
            />

            <div className='
              w-[42px]
              h-[42px]
              rounded-full
              bg-white
              border
              flex
              items-center
              justify-center
              -ml-3
              text-[14px]
              font-medium
            '>
              22+
            </div>

            <span className='ml-[12px] text-[15px] text-[#5B5B5B]'>
              Your Circle
            </span>
          </div>

          <p className='
            text-[#0E9B22]
            text-[28px]
            font-semibold
          '>
            {event.offer}
          </p>
        </div>
      </div>
    </article>
  )
}

export default EventCard