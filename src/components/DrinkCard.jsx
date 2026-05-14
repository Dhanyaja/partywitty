import React from 'react'

const DrinkCard = ({
    image,
    title,
    subtitle,
    tag,
    price,
    selected = false,
}) => {
    return (
        <div
            className={`
        relative flex items-center gap-3
        bg-white rounded-[20px]
        p-[10px]
        h-[92px]
        cursor-pointer transition-all
        border
        ${selected
                    ? 'border-[#FF4F93] border-[2px]'
                    : 'border-[#ECECEC]'
                }
      `}
        >
            {/* Price Badge */}
            <div
                className="
          absolute top-0 right-0
          bg-[#FF4F93]
          text-white
          text-[11px]
          font-medium
          px-3 py-1
          rounded-bl-[18px]
          rounded-tr-[20px]
        "
            >
                ₹{price}
            </div>

            {/* Drink Image */}
            <img
                src={image}
                alt={title}
                className="
          w-[68px]
          h-[68px]
          rounded-[14px]
          object-cover
        "
            />

            {/* Content */}
            <div className="flex flex-col">
                <h3 className="text-[20px] font-semibold text-[#1D1D1D]">
                    {title}
                </h3>

                <p className="text-[12px] text-[#7A7A7A] mt-[2px]">
                    {subtitle}
                </p>

                <span
                    className="
            mt-[8px]
            w-fit
            bg-[#DDF7DD]
            text-[#4CAF50]
            text-[10px]
            px-3 py-1
            rounded-full
          "
                >
                    {tag}
                </span>
            </div>
        </div>
    )
}

export default DrinkCard