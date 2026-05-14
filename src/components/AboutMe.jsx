import React from 'react'
import edit from "../assets/icons/edit.svg"

const AboutMe = () => {
    return (
        <div className="mt-4">
            <h3 className="text-[12px] text-[#666666] mb-2">
                A Little About Me
            </h3>

            <div
                className="
          h-[44px]
          bg-white
          rounded-[14px]
          px-4
          flex
          items-center
          justify-between
          border border-[#F0F0F0]
        "
            >
                <p className="text-[14px] text-[#5A5A5A]">
                    Hey, I’m Aman , into good music and chill nights
                </p>

                <img src={edit} />
            </div>
        </div>
    )
}

export default AboutMe