import React from 'react'
import Hero from '../components/Hero'
import HotelCard from '../components/HotelCard'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimoial from '../components/Testimoial'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <>
        <Hero />
        <FeaturedDestination />
        <ExclusiveOffers />
        <Testimoial />
        <Newsletter />
    </>
  )
}

export default Home