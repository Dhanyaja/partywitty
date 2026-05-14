import React from 'react'

const GestureCard = ({
    icon,
    title,
    price,
    selected = false,
}) => {
    return (
        <div
            className={`
        flex flex-col items-center justify-center
        h-[88px]
        rounded-[18px]
        bg-white
        cursor-pointer
        transition-all
        border
        ${selected
                    ? 'border-[#FF4F93]'
                    : 'border-[#ECECEC]'
                }
      `}
        >
            {/* Icon */}
            <img
                src={icon}
                alt={title}
                className="w-[22px] h-[22px] object-contain"
            />

            {/* Title */}
            <h4 className="mt-[8px] text-[14px] font-medium text-[#4A4A4A]">
                {title}
            </h4>

            {/* Price */}
            <p className="mt-[2px] text-[12px] text-[#777] font-medium">
                {price}
            </p>
        </div>
    )
}

export default GestureCard