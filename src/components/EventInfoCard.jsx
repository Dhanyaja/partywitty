import React from 'react'
import profile from '../assets/icons/zoe.svg'
import verified from '../assets/icons/verified.svg'
import location from '../assets/icons/location.svg'

const EventInfoCard = () => {
  return (
    <div
      className="
        w-full
        bg-[#FBFBFB]
        rounded-[20px]
        px-[24px]
        py-[22px]
        flex
        items-start
        justify-between
      "
    >
      {/* Left Content */}
      <div className="flex flex-col">

        {/* Top Row */}
        <div className="flex items-center gap-[8px]">
          <h3 className="text-[28px] font-semibold text-[#1D1D1D]">
            Illusion
          </h3>

          <span className="text-[#F5C518] text-[18px]">
            ★
          </span>

          <span className="text-[18px] font-medium text-[#1D1D1D]">
            4.1
          </span>

          <span className="text-[16px] font-medium text-[#1D1D1D]">
            Review (03)
          </span>
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-[18px] mt-[18px]">

          <img
            src={profile}
            alt="Zoe Miller"
            className="w-[86px] h-[86px] rounded-full object-cover"
          />

          <div>
            <div className="flex items-center gap-[8px]">
              <h4 className="text-[24px] font-semibold text-[#1D1D1D]">
                Zoe Miller, 22
              </h4>

              <img
                src={verified}
                alt="verified"
                className="w-[18px] h-[18px]"
              />
            </div>

            <p className="text-[20px] text-[#1D1D1D] mt-[4px]">
              Nocturne Rooftop
            </p>

            <div className="flex items-center gap-[6px] mt-[8px]">
              <img
                src={location}
                alt="location"
                className="w-[14px] h-[14px]"
              />

              <p className="text-[16px] text-[#666666]">
                Sector 38, Entertainment City • 13 km
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Date Badge */}
      <div
        className="
          w-[72px]
          h-[72px]
          rounded-[16px]
          bg-[#F4F4F4]
          flex
          flex-col
          items-center
          justify-center
        "
      >
        <span className="text-[14px] font-medium text-[#666666]">
          OCT
        </span>

        <span className="text-[28px] font-semibold text-[#1D1D1D] leading-none">
          24
        </span>
      </div>
    </div>
  )
}

export default EventInfoCard