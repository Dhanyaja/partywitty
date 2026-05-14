import React from 'react'
import { useNavigate } from 'react-router-dom';
import close from "../assets/icons/close.svg"
import fire from "../assets/icons/fire.svg"
import zoemiller2 from "../assets/images/zoemiller2.png"


const GoTonight = ({ onClose }) => {

  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-[2px] px-4">
      {/* Modal */}
      <div className="relative w-full max-w-[420px] rounded-[28px] bg-white px-[22px] pt-[28px] pb-[26px]">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-[20px] top-[18px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#F1ECFF]"
        >
          {/* <X size={18} className="text-[#7566FF]" /> */}
          <img src={close} alt="" />


        </button>

        {/* Heading */}
        <h2 className="text-[20px] font-semibold text-[#454545]">
          You chose her
        </h2>

        {/* Subtitle */}
        <p className="mt-[6px] text-[14px] text-[#6D6D6D]">
          You’re about to send her a{" "}
          <span className="text-[#FF4D8D]">
            special invite
          </span>
        </p>

        {/* Profile Card */}
        <div className="relative mt-[18px] overflow-hidden rounded-[26px]">

          {/* Image */}
          <img
            src={zoemiller2}
            alt="Zoe"
            className="h-[390px] w-full object-cover"
          />

          {/* Top Badge */}
          <div className="absolute left-[16px] top-[16px] rounded-full bg-white/20 px-[10px] py-[5px] backdrop-blur-md flex items-center">
            <p className="text-[12px] text-white">
              <img src={fire} alt="" className='inline' /> Casual Fun
            </p>
          </div>

          {/* Bottom Gradient */}
          <div className="absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-t from-black via-black/50 to-transparent" />

          {/* Content */}
          <div className="absolute bottom-[20px] left-[18px] right-[18px] text-white">

            {/* Name */}
            <h3 className="text-[20px] font-semibold leading-none">
              Zoe Miller, 22
            </h3>

            {/* Mutual */}
            <p className="mt-[6px] text-[15px] text-white/50">
              4 Mutual Mates
            </p>

            {/* Tags */}
            <div className="mt-[16px] flex whitespace-nowrap gap-[10px]">
              {[
                "Bollywood Nights",
                "Chill Crowd",
                "Party Regular",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/20 bg-white/10 px-[14px] py-[7px] text-[10px] backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="mt-[18px] h-[56px] w-full rounded-full bg-gradient-to-r from-[#B936F5] to-[#FF4D73] text-[18px] font-medium text-white shadow-md" onClick={() => navigate("/event-listing")}>
          Make Your Move
        </button>

        {/* Bottom Text */}
        <p className="mt-[14px] text-center text-[15px] text-[#6D6D6D]">
          Add a drink to introduce yourself
        </p>
      </div>
    </div>
  );
}

export default GoTonight
