import React from 'react'
import { assets, cities } from '../assets/assets'

const Hero = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center px-6 py-10 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.png")] bg-no-repeat bg-cover bg-center'>
            <div className='w-full max-w-4xl mt-15'>
                <p className='bg-[#49B9FF]/50 font-playfair px-4 py-1.5 rounded-full inline-block'>The Ultimate Hotel Experience</p>
                <h1 className='font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-3xl mt-6'>Discover Your Perfect Gateway Destination</h1>
                <p className='max-w-2xl mt-4 text-sm sm:text-base md:text-lg font-playfair text-white/90'>Unparalleled luxury and comfort await at the world's exclusive hotels and resorts. Start your journey with us today!</p>
            </div>

            <form className='bg-white text-gray-700 rounded-md px-4 py-6 mt-10 w-full max-w-7xl mx-auto shadow-2xl shadow-slate-900/10'>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 items-stretch'>
                    <div className='flex flex-col h-full'>
                        <label htmlFor="destinationInput" className='text-sm font-medium text-slate-600 mb-2 flex items-center gap-2'>
                            <img src={assets.calenderIcon} alt="" className="h-4" />
                            Destination
                        </label>
                        <input list='destinations' id="destinationInput" name="destination" type="search" autoComplete="off" className="w-full h-14 rounded-md border border-gray-200 px-4 text-sm outline-none shadow-sm transition focus:border-sky-500" placeholder="Type destination" required />
                        <datalist id='destinations'>
                            {cities.map((city, index) => (
                                <option key={index} value={city}>{city}</option>
                            ))}
                        </datalist>
                    </div>

                    <div className='flex flex-col h-full'>
                        <label htmlFor="checkIn" className='text-sm font-medium text-slate-600 mb-2 flex items-center gap-2'>
                            <img src={assets.calenderIcon} alt="" className="h-4" />
                            Check in
                        </label>
                        <input id="checkIn" type="date" className="w-full h-14 rounded-md border border-gray-200 px-4 text-sm outline-none shadow-sm transition focus:border-sky-500" />
                    </div>

                    <div className='flex flex-col h-full'>
                        <label htmlFor="checkOut" className='text-sm font-medium text-slate-600 mb-2 flex items-center gap-2'>
                            <img src={assets.calenderIcon} alt="" className="h-4" />
                            Check out
                        </label>
                        <input id="checkOut" type="date" className="w-full h-14 rounded-md border border-gray-200 px-4 text-sm outline-none shadow-sm transition focus:border-sky-500" />
                    </div>

                    <div className='flex flex-col h-full'>
                        <label htmlFor="guests" className='text-sm font-medium text-slate-600 mb-2'>Guests</label>
                        <input min={1} max={4} id="guests" type="number" className="w-full h-14 rounded-md border border-gray-200 px-4 text-sm outline-none shadow-sm transition focus:border-sky-500" placeholder="Guests" />
                    </div>

                    <div className='flex flex-col justify-end h-full'>
                        <button className='w-full h-14 flex items-center justify-center gap-2 rounded-md bg-black px-6 text-sm font-semibold text-white transition hover:bg-slate-900'>
                            <img src={assets.searchIcon} alt="" className="h-6 w-6" />
                            <span>Search</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Hero