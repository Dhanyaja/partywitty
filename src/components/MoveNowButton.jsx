import React from 'react'
import { useNavigate } from 'react-router-dom'

const MoveNowButton = () => {

    const navigate = useNavigate();

    return (
        <div className="flex justify-center mt-8">
            <button
                className="
          w-[290px]
          h-[54px]
          rounded-full
          bg-[#7564F2]
          text-white
          text-[16px]
          font-medium
          shadow-sm
          border-[4px]
          border-white
          hover:opacity-90
          transition
        "
                onClick={() => navigate("/order-summary")}
            >
                Make The Move Now
            </button>
        </div>
    )
}

export default MoveNowButton