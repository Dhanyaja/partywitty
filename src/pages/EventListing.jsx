import React from 'react'
import Sidebar from '../components/Sidebar'
import TopHeader from '../components/TopHeader'
import SearchBar from '../components/SearchBar'
import EventGrid from '../components/EventGrid'

const EventListing = () => {
  return (
    <div className='min-h-screen flex bg-[#E4E4E4] '>
      <Sidebar />
      {/* <main className='flex-1 px-10 py-8 bg-[radial-gradient(circle_600px_at_top_left,_rgba(238,130,238,1),_transparent)]'> */}
      <main className=' flex-1 ml-[105px] px-[40px] py-[32px] top-[30px] left-[173px] flex flex-col gap-[20px]'>
        <TopHeader />
        <section className='mt-1'>
          <div className='flex items-center justify-between mb-5 w-[1200px] h-[46px]'>
            <h2 className='text-[20px] font-semibold text-[#1D1D1D]'>Tonight near you</h2>
            <SearchBar />
          </div>
          <EventGrid />
        </section>
      </main>
    </div>
  )
}

export default EventListing
