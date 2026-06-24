import React from "react";
import HotelCard from "./HotelCard";
import { roomsDummyData } from "../assets/assets";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center  px-6 md:px-16 lg:px-24 xl:px-32 mt-20">
      <Title
        title="Featured Destinations"
        subTitle="Discover our handpicked selection of exceptional properties around the world, offering unparalled luxury and unforgettable experiences."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard room={room} index={index} key={room._id} />
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/rooms");
          scrollTo(0, 0);
        }}
        className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer"
      >
        View All Destinations
      </button>
    </section>
  );
};

export default FeaturedDestination;
