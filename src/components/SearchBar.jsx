import React from 'react'
import search from '../assets/icons/search.svg'
import mic from '../assets/icons/mic.svg'

const SearchBar = () => {
  return (
    <div className='
      w-[290px]
      h-[46px]
      rounded-full
      bg-gray-300/50
      backdrop-blur-[12px]
      py-[11px]
      px-[20px]
      flex
      items-center
      justify-between
    '>

      {/* Left side */}
      <div className='flex items-center gap-[10px]'>
        <img
          src={search}
          alt="Search"
          className='w-[18px] h-[18px]'
        />

        <input
          type="text"
          placeholder="Search..."
          className='
            bg-transparent
            outline-none
            text-[13px]
            text-[#1D1D1D]
            placeholder:text-[#1D1D1D]/70
            w-[220px]
          '
        />
      </div>

      {/* Mic */}
      <img
        src={mic}
        alt="Mic"
        className='w-[18px] h-[18px] cursor-pointer'
      />
    </div>
  )
}

export default SearchBar