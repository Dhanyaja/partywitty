import { useNavigate } from "react-router-dom";
import close from "../assets/icons/close.svg";
// import sparkle from "../assets/icons/sparkle.svg";
import plus from "../assets/icons/plus.svg";
import trash from "../assets/icons/trash.svg";
import group from "../assets/icons/group.svg";
import stack from "../assets/icons/stack.svg";

import vibe1 from "../assets/images/vibe1.png";
import vibe2 from "../assets/images/vibe2.png";
import vibe3 from "../assets/images/vibe3.png";

import { Sparkle } from "lucide-react";



const ShowVibe = () => {
  const navigate = useNavigate();

  const uploadedPhotos = [
    vibe1,
    vibe2,
    vibe3,
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-sm p-4">
      <div className="flex min-h-full items-center justify-center py-6">
        {/* Modal */}
        <div className="relative w-full max-w-[630px] rounded-[28px] bg-[#F8F8F5] px-8 py-8 shadow-2xl">

          {/* Close */}
          <button
            onClick={() => navigate("/feed")}
            className="absolute right-5 top-5 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#EEE8FF]"
          >
            <img src={close} alt="close" />
          </button>

          {/* Heading */}
          <h1 className="text-[54px] font-bold leading-none text-[#4A4A4A]">
            Show your vibe
          </h1>

          <p className="mt-4 text-[24px] text-[#5E5E5E]">
            Add up to 6 photos people will actually vibe with
          </p>

          {/* Progress */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <p className="text-[14px] font-bold tracking-[2px] text-[#444]">
                3/6 ADDED
              </p>
            </div>

            <div className="mt-3 h-[8px] overflow-hidden rounded-full bg-[#CFCFCF]">
              <div className="h-full w-1/2 rounded-full bg-[#4A4A4A]" />
            </div>
          </div>

          {/* Tip Banner */}
          <div className="mt-5 flex items-center gap-4 rounded-full bg-[#D8D8D8] px-5 py-4">

            <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-[#BFBFBF]">
              <Sparkle />
            </div>

            <p className="text-[17px] font-medium text-[#565656]">
              Profiles with 4+ photos get 3x more invites
            </p>
          </div>

          {/* Photo Grid */}
          <div className="mt-6 grid grid-cols-3 gap-4">

            {/* Add Photo */}
            <button className="flex h-[220px] flex-col items-center justify-center rounded-[22px] bg-[#CFCFCF] transition hover:scale-[1.02]">
              <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full bg-[#686868]">
                <img src={plus} alt="" />
              </div>

              <p className="mt-4 text-[18px] font-medium text-[#5A5A5A]">
                + Add Photo
              </p>
            </button>

            {/* Uploaded Images */}
            {uploadedPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative h-[220px] overflow-hidden rounded-[22px]"
              >
                <img
                  src={photo}
                  alt=""
                  className="h-full w-full object-cover"
                />

                {/* Delete Button */}
                <button className="absolute bottom-4 left-4 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#E56D6D]">
                  <img src={trash} alt="" />
                </button>
              </div>
            ))}

            {/* Hint Card 1 */}
            <div className="flex h-[220px] flex-col items-center justify-center rounded-[22px] bg-[#CFCFCF] px-4 text-center">

              <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#666]">
                <img src={group} alt="" />
              </div>

              <p className="mt-5 text-[16px] font-bold tracking-[3px] text-[#555]">
                HINT
              </p>

              <p className="mt-1 text-[14px] text-[#666]">
                With friends
              </p>
            </div>

            {/* Hint Card 2 */}
            <div className="flex h-[220px] flex-col items-center justify-center rounded-[22px] bg-[#CFCFCF] px-4 text-center">

              <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#666]">
                <img src={stack} alt="" />
              </div>

              <p className="mt-5 text-[16px] font-bold tracking-[3px] text-[#555]">
                HINT
              </p>

              <p className="mt-1 text-[14px] text-[#666]">
                Candid & posed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowVibe;