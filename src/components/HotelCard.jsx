import React from 'react'
import { Link } from 'react-router-dom';
import { assets } from "../assets/assets";
const HotelCard = ({ room, index }) => {
  return (
    <Link to={'/rooms/' + room._id} onClick={() => scrollTo(0, 0)} className='group relative w-full rounded-md overflow-hidden bg-white text-gray-500/90 shadow-[0px_8px_24px_rgba(15,23,42,0.08)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl'>
      <div className='relative h-56 overflow-hidden sm:h-64'>
        <img src={room.images[0]} alt="" className='w-full h-full object-cover' />
      </div>
      {index % 2 === 0 && <p className='px-3 py-1 absolute top-4 left-4 text-[11px] uppercase tracking-[0.24em] font-semibold text-gray-800 bg-white/90 rounded-full shadow-sm'>Best Seller</p>}
      <div className='p-5 sm:p-6 flex flex-col gap-4'>
        <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <p className='font-playfair text-lg sm:text-xl font-semibold text-slate-900 leading-tight'>{room.hotel.name}</p>
          <div className='flex items-center gap-2 text-sm text-slate-700'>
            <img src={assets.starIconFilled} alt="star-icon" className='h-4 w-4' />
            <span>4.5</span>
          </div>
        </div>
        <div className='flex items-start gap-2 text-sm text-gray-600'>
          <img src={assets.locationIcon} alt="location-icon" className='h-4 w-4 mt-0.5' />
          <span className='leading-relaxed'>{room.hotel.address}</span>
        </div>
        <div className='mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
          <p className='text-base sm:text-lg text-slate-900 font-semibold'>${room.pricePerNight.toFixed(2)}<span className='text-sm font-normal text-gray-500'>/night</span></p>
          <button className='w-full sm:w-auto rounded-md border border-slate-200 bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-slate-800'>Book Now</button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard