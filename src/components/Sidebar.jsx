// import React from "react";
// import logo from "../assets/logos/logo.svg";
// import plan from "../assets/icons/plan.svg";
// import gavel from "../assets/icons/gavel.svg";
// import rotate from "../assets/icons/rotate.svg";
// import search from "../assets/icons/search.svg";
// import messages from "../assets/icons/messages.svg";
// import bell from "../assets/icons/bell.svg";
// import bookmark from "../assets/icons/bookmark.svg";
// import hamburger from "../assets/icons/hamburger.svg";
// import profile from "../assets/icons/profile.svg";
// import wallet from "../assets/icons/wallet.svg";

// const Sidebar = () => {
//     return (
//         <aside className="w-[105px] h-screen bg-[#f1f1f1] flex flex-col justify-between pt-[30px] fixed left-0 top-0">

//             {/* TOP SECTION */}
//             <div className="flex flex-col items-center">

//                 {/* Logo */}
//                 <img
//                     src={logo}
//                     alt="PartyWitty Logo"
//                     className="w-[64px] h-[37px] mb-[30px]"
//                 />

//                 {/* Icons */}
//                 <div className="flex flex-col items-center gap-[26px]">
//                     <img src={plan} alt="Plan Icon" className="w-[20px] h-[26px]" />
//                     <img src={gavel} alt="Gavel Icon" className="w-[20px] h-[26px]" />
//                     <img src={rotate} alt="Rotate Icon" className="w-[20px] h-[26px]" />
//                     <img src={search} alt="Search Icon" className="w-[20px] h-[26px]" />
//                     <img src={messages} alt="Messages Icon" className="w-[20px] h-[26px]" />
//                     <img src={bell} alt="Bell Icon" className="w-[20px] h-[26px]" />
//                     <img src={bookmark} alt="Bookmark Icon" className="w-[20px] h-[26px]" />
//                     <img src={wallet} alt="Wallet Icon" className="w-[20px] h-[26px]" />
//                 </div>
//             </div>

//             {/* BOTTOM SECTION */}
//             <div className="w-full flex flex-col items-center gap-[12px] p-[10px] bg-gradient-to-br from-[#7464E4]/15 to-[#B5A78B]/15">
//                 <img
//                     src={hamburger}
//                     alt="Hamburger Icon"
//                     className="w-[20px] h-[26px]"
//                 />

//                 <img
//                     src={profile}
//                     alt="Profile Icon"
//                     className="w-[44px] h-[45px]"
//                 />
//             </div>
//         </aside>
//     );
// };

// export default Sidebar;


import React from "react";

import logo from "../assets/logos/logo.svg";
import longlogo from "../assets/logos/longlogo.svg";

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
import externallink from "../assets/icons/externallink.svg";

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

const Sidebar = ({ variant = "compact" }) => {
  const isFeed = variant === "feed";

  return (
    <aside
      className={`
        h-screen fixed left-0 top-0 flex flex-col justify-between border-r border-[#ECE7F7]
        ${isFeed
          ? "w-[300px] bg-[#F8F5FF]"
          : "w-[105px] bg-[#f1f1f1]"
        }
      `}
    >
      {/* TOP SECTION */}
      <div
        className={`flex flex-col ${isFeed ? "px-7 pt-8" : "items-center pt-[30px]"
          }`}
      >
        {/* Logo Section */}
        {isFeed ? (
          <div className="flex items-center justify-between">
            <img
              src={longlogo}
              alt="PartyWitty Logo"
              className="h-[38px]"
            />

            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#EEE8FF]">
              <img
                src={panelleft}
                alt="panel left"
                className="w-5 h-5"
              />
            </button>
          </div>
        ) : (
          <img
            src={logo}
            alt="PartyWitty Logo"
            className="w-[64px] h-[37px] mb-[30px]"
          />
        )}

        {/* MENU */}
        <div
          className={`
            flex flex-col
            ${isFeed ? "mt-7 gap-8" : "items-center gap-[26px]"}
          `}
        >
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`
                flex items-center transition hover:opacity-80
                ${isFeed
                  ? "gap-4 text-left"
                  : "justify-center"
                }
              `}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="w-[20px] h-[26px]"
              />

              {isFeed && (
                <span className="text-[20px] font-medium text-[#171717]">
                  {item.label}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      {/*  BOTTOM SECTION */}
      {isFeed ?

        (
          <div className="mt-auto bg-gradient-to-br from-[#7464E4]/10 to-[#B5A78B]/10 px-4 py-4">

            {/* More Card */}
            <div className="overflow-hidden rounded-[16px]  shadow-xl">

              {/* Header */}
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-2">
                <img
                  src={hamburger}
                  alt="hamburger"
                  className="h-[18px] w-[18px]"
                />

                <span className="text-[16px] font-medium text-black">
                  More
                </span>
              </div>

              {/* Offer */}
              <div className="flex items-center gap-3 px-5 py-1 bg-gradient-to-r from-[#0F172A] via-[#062A3A] to-[#0F172A]">
                <div className="text-[30px] leading-none">
                  👑
                </div>

                <div>
                  <p className="text-[10px] font-medium text-white">
                    Corporate Employee Offer
                  </p>

                  <p className="mt-1 text-[14px] font-semibold text-[#F6C453]">
                    1 Month For ₹1
                  </p>
                </div>
              </div>

              {/* User */}
              <div className="flex items-center justify-between border-t border-white/10 px-5 py-2">
                <div className="flex items-center gap-3">
                  <img
                    src={profile}
                    alt="profile"
                    className="h-[46px] w-[46px] rounded-full object-cover"
                  />

                  <div>
                    <p className="text-[18px] font-medium leading-none text-black">
                      Zeeshan Ahmad
                    </p>

                    <p className="mt-1 text-[13px] text-[#656569]">
                      Indus Global Pvt Ltd Admin
                    </p>
                  </div>
                </div>

                <img
                  src={externallink}
                  alt="external link"
                  className="h-[18px] w-[18px]"
                />
              </div>
            </div>
          </div>
        )
        : (
          <div className="w-full flex flex-col items-center gap-[12px] p-[10px] bg-gradient-to-br from-[#7464E4]/15 to-[#B5A78B]/15">
            <img
              src={hamburger}
              alt="Hamburger Icon"
              className="w-[20px] h-[26px]"
            />

            < img
              src={profile}
              alt="Profile Icon"
              className="w-[44px] h-[45px]"
            />
          </div >
        )}

    </aside >
  );
};

export default Sidebar;