import React from 'react'
import { CheckCircle2, X } from 'lucide-react'
import close from "../assets/icons/close.svg"
import verified from "../assets/icons/verified.svg"
import face from "../assets/icons/face.svg"
import { useNavigate } from 'react-router-dom'

const benefits = [
  'Builds trust instantly',
  'Better chances she accepts',
  'Unlocks special invites',
]

const VerificationIntro = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black/30 flex items-center justify-center px-4">
      {/* Modal */}
      <div
        className="
          relative
          w-full
          max-w-[710px]
          bg-white
          rounded-[32px]
          px-[56px]
          py-[50px]
          text-center
        "
      >
        {/* Close Button */}
        <button
          className="
            absolute
            top-6
            right-6
            w-[36px]
            h-[36px]
            rounded-full
            bg-[#F4F2FF]
            flex
            items-center
            justify-center
          "
        >
          <img src={close} alt="close" />
        </button>

        {/* Illustration Box */}
        <div className="flex justify-center mb-8">
          <div
            className="
              relative
              w-[210px]
              h-[160px]
              border
              border-dashed
              border-[#a8a8a8]
              rounded-[32px]
              flex
              items-center
              justify-center
              bg-gray-200
            "
          >
            <div
              className="
                w-[90px]
                h-[150px]
                rounded-[50px]
                border-[4px]
                border-[#5B5B5B]
                flex
                items-center
                justify-center
              "
            >
              <div className="text-[52px]">
                <img src={face} alt="" />
              </div>
            </div>

            {/* Small verification badge */}
            <div
              className="
                absolute
                top-0
                right-0
                w-[34px]
                h-[34px]
                rounded-full
                bg-gray-400
                flex
                items-center
                justify-center
              "
            >
              <img src={verified} alt="verified" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-[36px] font-semibold text-[#242424]">
          You’re one step away
        </h1>

        {/* Description */}
        <p className="mt-3 text-[18px] text-[#666] leading-[30px]">
          Verify your profile to send this invite and
          connect with people around you.
        </p>

        {/* Benefits */}
        <div className="flex justify-center gap-6 mt-8 whitespace-nowrap">
          {benefits.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2"
            >
              <CheckCircle2
                size={18}
                className="text-[#4CC66A]"
              />

              <span className="text-[14px] text-[#555]">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          className="
            mt-10
            w-[400px]
            h-[62px]
            rounded-full
            text-white
            text-[18px]
            font-semibold
            bg-gradient-to-r
            from-[#C93AEF]
            to-[#FF4F7B]
            hover:opacity-90
            transition
          "
          onClick={() => navigate("/face-verification")}
        >
          Verify & Send Invite
        </button>

        {/* Footer Text */}
        <p className="mt-4 text-[11px] font-semibold text-[#7A7A7A] tracking-[1px] uppercase">
          Takes less than 30 seconds
        </p>
      </div>
    </div>
  )
}

export default VerificationIntro