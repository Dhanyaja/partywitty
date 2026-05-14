import { useNavigate } from "react-router-dom";
import close from "../assets/icons/close.svg";
import verifiedFace from "../assets/images/verifieduser.png";
// import sparkle from "../assets/icons/sparkle.svg";
import heart from "../assets/icons/purpleheart.svg";
import { Sparkle } from "lucide-react";

const VerificationSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      
      {/* Modal */}
      <div className="relative w-full max-w-[820px] rounded-[28px] bg-[#F8F8F5] px-8 py-10 shadow-2xl">

        {/* Close Button */}
        <button
          onClick={() => navigate("/feed")}
          className="absolute right-6 top-6 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#EEE8FF] transition hover:scale-105"
        >
          <img src={close} alt="close" />
        </button>

        {/* Top Illustration */}
        <div className="relative mx-auto flex w-fit items-center justify-center">

          {/* Outer Ring */}
          <div className="flex h-[260px] w-[260px] items-center justify-center rounded-full bg-[#EFEFEB]">

            {/* Middle Ring */}
            <div className="flex h-[210px] w-[210px] items-center justify-center rounded-full border border-[#D6D6D6] bg-[#ECECEC]">

              {/* Profile Image */}
              <div className="relative h-[180px] w-[180px] overflow-hidden rounded-full border-[4px] border-[#DADADA]">
                <img
                  src={verifiedFace}
                  alt="verified"
                  className="h-full w-full object-cover"
                />

                {/* Verified Badge */}
                <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#11B117] px-5 py-2 shadow-lg">
                  <span className="text-white text-sm">
                    ✦
                  </span>

                  <p className="text-sm font-semibold text-white">
                    VERIFIED
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Icons */}
          <div className="absolute left-0 top-[160px] flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#C7B9FF] shadow-md">
            <img src={heart} alt="" />
          </div>

          <div className="absolute right-[10px] top-[30px] flex h-[44px] w-[44px] items-center justify-center rounded-full bg-[#C7B9FF] shadow-md">
            <Sparkle />
          </div>
        </div>

        {/* Heading */}
        <div className="mt-8 text-center">
          <h1 className="text-[58px] font-bold leading-none text-[#4B4B4B]">
            You’re verified
          </h1>

          <p className="mt-4 text-[25px] font-medium text-[#575757]">
            No fake vibes here. You’re almost in
          </p>
        </div>

        {/* Progress */}
        <div className="mx-auto mt-8 max-w-[420px]">
          <div className="h-[10px] overflow-hidden rounded-full bg-[#8d8c8c]">
            <div className="h-full w-[98.4%] rounded-full bg-gradient-to-r from-[#7B68FF] to-[#2A00FF]" />
          </div>

          <p className="mt-3 text-center text-[15px] font-semibold tracking-[4px] text-[#5E5E5E]">
            IDENTITY MATCH 98.4%
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/dashboard")}
          className="mx-auto mt-8 flex h-[72px] w-full max-w-[500px] items-center justify-center rounded-full bg-gradient-to-r from-[#7362F6] to-[#7564E6] text-[28px] font-medium text-white transition hover:scale-[1.02]"
        >
          Go to Dashboard
        </button>

        {/* Bottom Text */}
        <p className="mt-6 text-center text-[15px] text-[#3a3939]">
          No fake vibes here. You’re almost in
        </p>
      </div>
    </div>
  );
};

export default VerificationSuccess;