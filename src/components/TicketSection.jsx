import React from 'react'
import drinkImage from '../assets/images/wineglass.png'

const TicketSection = () => {
  return (
    <div className="mt-[28px]">

      {/* Price Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-[22px] font-semibold text-[#1D1D1D]">
          Tickets Price
        </h3>

        <span className="text-[22px] font-semibold text-[#1D1D1D]">
          ₹59.00
        </span>
      </div>

      {/* Drink Card */}
      <div
        className="
          mt-[18px]
          bg-[#FBFBFB]
          rounded-[20px]
          px-[20px]
          py-[20px]
          flex
          items-center
          justify-between
        "
      >
        {/* Left */}
        <div className="flex items-center gap-[18px]">

          {/* Drink Image */}
          <img
            src={drinkImage}
            alt="Wine Glass"
            className="
              w-[92px]
              h-[92px]
              rounded-full
              object-cover
            "
          />

          {/* Text Content */}
          <div>
            <h4 className="text-[34px] font-semibold text-[#1D1D1D]">
              Wine Glass
            </h4>

            <p className="text-[18px] text-[#5E5E5E] mt-[4px]">
              Mint, Lime, Electric Glow
            </p>

            {/* Green Tag */}
            <div
              className="
                mt-[14px]
                bg-[#DDF7DF]
                rounded-[6px]
                px-[16px]
                py-[8px]
                inline-flex
              "
            >
              <span className="text-[14px] text-[#31A24C]">
                You only pay for the drink if they accept your invite
              </span>
            </div>
          </div>
        </div>

        {/* Price */}
        <span className="text-[24px] font-semibold text-[#1D1D1D]">
          ₹2199
        </span>
      </div>
    </div>
  )
}

export default TicketSection