import React from 'react'
import shield from '../assets/icons/shield.svg'
import dots from '../assets/icons/more.svg'
import { useNavigate } from 'react-router-dom'

const BottomCTA = () => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-center mt-[34px] mb-[20px]">
            <div
                className="
          bg-white
          rounded-full
          p-[8px]
          flex
          items-center
          gap-[10px]
          shadow-[0px_8px_30px_rgba(0,0,0,0.08)]
        "
            >
                {/* Shield Button */}
                <button
                    className="
            w-[48px]
            h-[48px]
            rounded-full
            border
            border-[#7464E4]
            flex
            items-center
            justify-center
            cursor-pointer
          "
                >
                    <img
                        src={shield}
                        alt="shield"
                        className="w-[22px] h-[22px]"
                    />
                </button>

                {/* Dots Button */}
                <button
                    className="
            w-[48px]
            h-[48px]
            rounded-full
            bg-[#7464E4]
            flex
            items-center
            justify-center
            cursor-pointer
          "
                >
                    <img
                        src={dots}
                        alt="more"
                        className="w-[18px] h-[18px]"
                    />
                </button>

                {/* Main CTA */}
                <button
                    className="
            h-[56px]
            min-w-[270px]
            px-[32px]
            rounded-full
            bg-[#7464E4]
            text-white
            text-[18px]
            font-semibold
            cursor-pointer
            hover:opacity-95
            transition
          "
                    onClick={() => navigate("/verification")}
                >
                    Make The Move Now
                </button>
            </div>
        </div>
    )
}

export default BottomCTA