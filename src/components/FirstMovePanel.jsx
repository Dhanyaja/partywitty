import React from "react";

import correct from "../assets/icons/correct.svg"
import eye from "../assets/icons/eye.svg"
import alen from "../assets/icons/alen.svg"
import drink2 from "../assets/images/drink2.png"

const steps = [
    {
        id: 2,
        title: "Spot Your Person",
        description:
            "Pick someone you'd genuinely enjoy going out with.",
        image: drink2,
    },
    {
        id: 2,
        title: "Send a Drink",
        description:
            "Offer their first drink your way of saying let's go out.",
        image: drink2
    },
    {
        id: 2,
        title: "They Accept → You're Set",
        description:
            "Once accepted, it's a confirmed plan. No endless chatting.",
        image: drink2
    },
];

const benefits = [
    "Get noticed faster",
    "Higher chances your invite gets accepted",
    "Unlock drink invites & premium interactions",
    "Build trust with every profile visit",
];

const FirstMovePanel = () => {
    return (
        <div className="w-[355px] rounded-[28px] bg-[#FCF7FA] px-7 py-8">
            {/* Profile */}
            <div className="flex flex-col items-center">
                {/* <div className="h-[72px] w-[72px] overflow-hidden rounded-full border-[3px] border-[#695BFF]"> */}
                    <img
                        src={alen}
                        alt="profile"
                        className="h-[200px] w-[200px] object-cover"
                    />
                {/* </div> */}

                <h2 className="mt-5 text-[28px] font-bold text-[#181818]">
                    Make Your First Move
                </h2>

                <p className="mt-2 text-center text-[14px] text-[#6F6F6F] leading-6">
                    Verify your profile to start sending invites
                    and offering drinks.
                </p>
            </div>

            {/* How It Works */}
            <div className="mt-8">
                <h3 className="mb-5 text-[18px] font-semibold">
                    How It Works
                </h3>

                <div className="space-y-5">
                    {steps.map((step) => (
                        <div key={step.id} className="flex gap-4">
                            <div className="flex items-start gap-2 shrink-0">
                                <img
                                    src={step.image}
                                    alt=""
                                    className="h-[68px] w-[68px] rounded-[18px] object-cover"
                                />

                                <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#FF4B8B] text-[10px] font-bold text-white">
                                    {step.id}
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center gap-2">
                                    <img src={eye} alt="eye" />

                                    <h4 className="font-semibold text-[#2B2B2B]">
                                        {step.title}
                                    </h4>
                                </div>

                                <p className="mt-1 text-[12px] leading-5 text-[#7B7B7B]">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
                {benefits.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                        <img src={correct} alt="circle" />

                        <p className="text-[14px] text-[#5A5A5A]">
                            {item}
                        </p>
                    </div>
                ))}
            </div>

            {/* Button */}
            <button className="mt-8 h-[58px] w-full rounded-full bg-gradient-to-r from-[#CB32D9] to-[#FF4978] text-[18px] font-semibold text-white shadow-md transition hover:scale-[1.02]">
                Get Verified
            </button>

            <p className="mt-4 text-center text-[12px] text-[#767676]">
                Takes less than 60 seconds
            </p>

            <button className="mt-2 w-full text-center text-[14px] text-[#6A6A6A] underline">
                Maybe later
            </button>
        </div>
    );
};

export default FirstMovePanel;