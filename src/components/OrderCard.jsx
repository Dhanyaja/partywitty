


import React from 'react'
import EventInfoCard from './EventInfoCard'
import TicketSection from './TicketSection'
import BillDetails from './BillDetails'

const OrderCard = () => {
  return (

      <section
        className="
      w-full
      mt-[24px]
      bg-white/60
      rounded-[24px]
      px-[32px]
      py-[28px]
      "
      >
        <EventInfoCard />
        <TicketSection />
        <BillDetails />
      </section>
  )
}

export default OrderCard