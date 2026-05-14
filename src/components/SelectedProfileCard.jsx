import React from 'react'
import profile from '../assets/icons/profile.svg'
import rooftop from '../assets/images/rooftop.png'
import verify from '../assets/icons/verified.svg'
import location from '../assets/icons/location.svg'
import clock from '../assets/icons/clock.svg'

const SelectedProfileCard = () => {
  return (
    <div className="w-[320px]">
      {/* Top User */}
      <div className="flex items-center gap-3 mb-[16px]">
        <img
          src={profile}
          alt="Profile"
          className="w-[54px] h-[54px] rounded-full border-[2px] border-[#7464E4]"
        />

        <div>
          <h3 className="text-[18px] font-medium text-[#1D1D1D]">
            Alen Markram
          </h3>

          <button className="mt-[4px] bg-[#FF3F92] text-white text-[12px] px-[12px] py-[4px] rounded-full">
            Get Verified
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-[24px] overflow-hidden shadow-sm">
        
        {/* Image */}
        <div className="relative">
          <img
            src={rooftop}
            alt="Rooftop"
            className="w-full h-[240px] object-cover"
          />

          {/* Bottom Overlay */}
          <div className="absolute bottom-[16px] left-[16px] flex items-center gap-2">
            <img
              src={profile}
              alt="Zoe"
              className="w-[38px] h-[38px] rounded-full border border-white"
            />

            <div>
              <div className="flex items-center gap-1">
                <h3 className="text-white text-[18px] font-semibold">
                  Zoe Miller, 22
                </h3>

                <img
                  src={verify}
                  alt="Verified"
                  className="w-[14px] h-[14px]"
                />
              </div>

              <p className="text-white text-[13px]">
                Nocturne Rooftop
              </p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="p-[16px] flex flex-col gap-[14px]">
          
          {/* Location */}
          <div className="flex items-center gap-2 text-[#555] text-[14px]">
            <img
              src={location}
              alt="Location"
              className="w-[18px]"
            />

            <p>
              Sector 38, Noida at ILLUSION
            </p>
          </div>

          {/* Time */}
          <div className="flex items-center gap-2 text-[#555] text-[14px]">
            <img
              src={clock}
              alt="Clock"
              className="w-[18px]"
            />

            <p>
              Tonight, 10:30 PM -
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectedProfileCard