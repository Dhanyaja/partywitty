import React from "react";
import logo from "../assets/logos/logo.svg";
import plan from "../assets/icons/plan.svg";
import gavel from "../assets/icons/gavel.svg";
import rotate from "../assets/icons/rotate.svg";
import search from "../assets/icons/search.svg";
import messages from "../assets/icons/messages.svg";
import bell from "../assets/icons/bell.svg";
import bookmark from "../assets/icons/bookmark.svg";
import hamburger from "../assets/icons/hamburger.svg";
import profile from "../assets/icons/profile.svg";
import wallet from "../assets/icons/wallet.svg";
import panelleft from "../assets/icons/panelleft.svg";
import longlogo from "../assets/logos/longlogo.svg"
import externallink from "../assets/icons/externallink.svg"


const menuItems = [
  {
    icon: plan,
    label: "My Plan",
  },
  {
    icon: gavel,
    label: "My Bids",
  },
  {
    icon: rotate,
    label: "My Booking",
  },
  {
    icon: search,
    label: "Search",
  },
  {
    icon: messages,
    label: "Chat Room",
  },
  {
    icon: bell,
    label: "Notifications",
  },
  {
    icon: bookmark,
    label: "Save & Like",
  },
  {
    icon: wallet,
    label: "Rewards",
  },
];

const FeedSidebar = () => {
  return (
    <aside className="flex h-screen w-[250px] flex-col bg-[#F8F5FF] border-r border-[#ECE7F7]">
      {/* Top */}
      <div className="px-7 pt-8">
        {/* Logo Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={longlogo}
              alt="partywitty"
            />
          </div>

          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEE8FF]">
            {/* <PanelLeft
              size={18}
              className="text-[#6B5CFF]"
            /> */}
            <img src={panelleft} alt="left panel" />
          </button>
        </div>

        {/* Menu */}
        <nav className="mt-12 flex flex-col gap-8">
          {menuItems.map((item, index) => {

            return (
              <button
                key={index}
                className="flex items-center gap-4 text-left transition hover:opacity-80"
              >
                <img
                  size={23}
                  strokeWidth={1.8}
                  className="text-[#1A1A1A]"
                />

                <span className="text-[20px] font-medium text-[#171717]">
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom More Card */}
      <div className="mt-auto px-5 pb-5">
        <div className="rounded-[14px] bg-[#111827] overflow-hidden shadow-md">
          {/* Header */}
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            {/* <PanelLeft
              size={18}
              className="text-white"
            /> */}
            <img src={hamburger} alt="hamburger" />

            <span className="text-sm font-medium text-white">
              More
            </span>
          </div>

          {/* Offer */}
          <div className="flex items-start justify-between px-4 py-4">
            <div className="flex gap-3">
              <div className="text-xl">👑</div>

              <div>
                <p className="text-[12px] text-white font-medium">
                  Corporate Employee Offer
                </p>

                <p className="text-[11px] text-[#FACC15]">
                  1 Month For ₹1
                </p>
              </div>
            </div>
          </div>

          {/* User */}
          <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
            <div className="flex items-center gap-3">
              <img
                src={profile}
                alt="user"
                className="h-10 w-10 rounded-full object-cover"
              />

              <div>
                <p className="text-[13px] text-white font-medium">
                  Zeeshan Ahmad
                </p>

                <p className="text-[11px] text-gray-400">
                  Indus Global Pvt Ltd Admin
                </p>
              </div>
            </div>

            {/* <ExternalLink
              size={16}
              className="text-white"
            /> */}
            <img src={externallink} alt="" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FeedSidebar;