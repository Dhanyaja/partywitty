import React from 'react'
import Sidebar from '../components/Sidebar'
import TopHeader from '../components/TopHeader'
import SelectedProfileCard from '../components/SelectedProfileCard'
import DrinkCard from '../components/DrinkCard'
import DrinkGrid from '../components/DrinkGrid'
import GestureGrid from '../components/GestureGrid'
import AboutMe from '../components/AboutMe'
import MoveNowButton from '../components/MoveNowButton'

const BuyDrinks = () => {
  return (
    <div className="min-h-screen flex bg-[#F7F5EF]">
      <Sidebar />

      <main className="ml-[105px] flex-1 px-[40px] py-[24px]">
        {/* Header */}
        <TopHeader />

        <div className="mt-[22px] flex gap-[18px]">

          {/* LEFT SIDE */}
          <SelectedProfileCard />

          {/* RIGHT SIDE */}
          <div className="flex-1 bg-white rounded-[24px] p-[20px]">
            <h2 className="text-[20px] font-semibold text-[#1D1D1D]">
              One Step Before Your First Move
            </h2>

            <p className="text-[12px] text-[#6B6B6B] mt-1">
              Verify your profile to send invites and offer drinks.
            </p>

            <div className="mt-[18px]">
              <DrinkGrid />
            </div>
            

            <div className="mt-[16px]">
                <GestureGrid />
            </div>

            <div className="mt-[16px]">
              <AboutMe />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-[26px]">
          <MoveNowButton />
        </div>
      </main>
    </div>
  )
}

export default BuyDrinks