import React from 'react'
import longlogo from "../assets/logos/longlogo.svg"
import backarrow from "../assets/icons/backarrow.svg"
import { useNavigate } from 'react-router-dom'

const OrderHeader = () => {

  const navigate = useNavigate();

  return (
    <div className='h-[36px] flex justify-between'>
      <div className=' flex items-center'>
        <div className='bg-white p-[10px] rounded-full '>
          <img src={backarrow} alt="Back Arrow" className='cursor-pointer' onClick={() => navigate("/buy-drinks")} />
        </div>
        <h2 className='font-semibold text-[20px] pl-2'>Back</h2>
      </div>
      <img src={longlogo} alt="Long Logo" />
    </div>
  )
}

export default OrderHeader
