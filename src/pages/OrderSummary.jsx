import React from 'react'
import OrderHeader from '../components/OrderHeader'
import OrderCard from '../components/OrderCard'
import BottomCTA from '../components/BottomCTA'
import TermsCheckbox from '../components/TermsCheckbox'

const OrderSummary = () => {


  return (
    <div className="min-h-screen bg-[#F7F5EF] flex justify-center">
      <div className="w-full max-w-[817px]  pt-[24px] pb-[40px] top-[32px] flex flex-col gap-[25px]">
        {/* Header */}
        <OrderHeader />
        {/* Order Card */}
        <OrderCard />
        <div className="px-[32px]">
          <TermsCheckbox />
        </div>
        {/* Bottom CTA */}
        <BottomCTA />
      </div>
    </div>
  )
}

export default OrderSummary