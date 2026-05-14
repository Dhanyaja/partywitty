import React from 'react'

const BillDetails = () => {
    return (
        <div className="mt-[28px]">

            {/* Divider */}
            <div className="w-full h-[1px] bg-[#E6E6E6]" />

            {/* Content */}
            <div className="pt-[22px]">

                {/* Title */}
                <h3 className="text-[22px] font-semibold text-[#1D1D1D]">
                    Bill Details
                </h3>

                {/* Row 1 */}
                <div className="flex justify-between items-center mt-[18px]">
                    <span className="text-[18px] text-[#1D1D1D]">
                        Tickets Amount
                    </span>

                    <span className="text-[18px] font-semibold text-[#1D1D1D]">
                        ₹59
                    </span>
                </div>

                {/* Row 2 */}
                <div className="flex justify-between items-center mt-[14px]">
                    <span className="text-[16px] text-[#7464E4] underline cursor-pointer">
                        Platform & Other Charges
                    </span>

                    <span className="text-[16px] font-medium text-[#7464E4]">
                        ₹5.90
                    </span>
                </div>

                {/* Row 3 */}
                <div className="flex justify-between items-center mt-[18px]">
                    <span className="text-[22px] font-medium text-[#1D1D1D]">
                        Grand Total
                    </span>

                    <span className="text-[26px] font-semibold text-[#1D1D1D]">
                        ₹64.90
                    </span>
                </div>
            </div>
        </div>
    )
}

export default BillDetails