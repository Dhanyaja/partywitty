import { Heart, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heart from "../assets/icons/heart.svg"
import close from "../assets/icons/close.svg"
import fire from "../assets/icons/fire.svg"
import zoemiller1 from "../assets/images/zoemiller1.png"

const ProfileCard = ({ onGoTonight }) => {

    return (
        <div className="relative flex flex-col items-center">

            {/* Explore Feed Button */}
            <button className="mb-5 rounded-full bg-gradient-to-r from-[#6D5DFB] to-[#3F2BFF] px-8 py-[10px] text-[15px] font-semibold text-white shadow-md">
                EXPLORE FEED
            </button>

            {/* Card Wrapper */}
            <div className="relative">

                {/* BACK CARD */}
                <div className="absolute top-[12px] left-[12px] h-[520px] w-[370px] rounded-[32px] bg-[#F1EEE8]" />

                {/* MAIN CARD */}
                <div className="relative z-10 w-[370px] rounded-[32px] bg-[#F9F8F5] p-[10px] shadow-sm">

                    {/* Image Area */}
                    <div className="relative h-[500px] overflow-hidden rounded-[30px]">
                        <img
                            src={zoemiller1}
                            alt="profile"
                            className="h-full w-full object-cover"
                        />

                        {/* Top lines */}
                        <div className="absolute left-5 top-5 flex flex-col gap-[6px]">
                            <div className="h-[4px] w-[44px] rounded-full bg-white" />
                            <div className="h-[4px] w-[28px] rounded-full bg-white/60" />
                        </div>

                        {/* Match Text */}
                        <p className="absolute left-5 top-[56px] text-[12px] text-white/90">
                            6 Matches Your Vibe
                        </p>

                        {/* Bottom Gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black via-black/70 to-transparent" />

                        {/* Profile Info */}
                        <div className="absolute bottom-5 left-5 right-5 z-20">
                            <div className="flex items-end justify-between">
                                <div>
                                    <h2 className="text-[34px] font-bold leading-[1] text-white">
                                        Zoe Miller,
                                        <br />
                                        22
                                    </h2>

                                    <p className="mt-2 text-[18px] text-white/80">
                                        4 Mutual Mates
                                    </p>
                                </div>

                                {/* Mate Badge */}
                                <div className="rounded-full bg-[#F84187] px-5 py-3 text-sm font-medium text-white">
                                    + Mate
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="mt-4 flex flex-wrap gap-2">
                                {[
                                    "Bollywood Nights",
                                    "Chill Crowd",
                                    "Party Regular",
                                ].map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-white/20 bg-white/10 px-4 py-[7px] text-[12px] text-white backdrop-blur-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Buttons */}
                    <div className="mt-4 flex items-center justify-center gap-4 pb-2">
                        <button className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#ECE8E3]">
                            <img src={close} alt="" />
                        </button>


                        <button
                            onClick={onGoTonight}
                            className="flex h-[74px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C730D7] to-[#FF4776] px-10 text-[18px] font-semibold text-white whitespace-nowrap"
                        >
                            <img
                                src={fire}
                                alt="fire"
                                className="h-[18px] w-[18px]"
                            />

                            <span>Go Tonight</span>
                        </button>

                        <img src={heart} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;