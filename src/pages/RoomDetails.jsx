import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import StarRating from "../components/StarRating";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  useEffect(() => {
    const room = roomsDummyData.find((room) => room._id == id);
    room && setRoom(room);
    room && setMainImage(room.images[0]);
  }, []);
  return (
    room && (
      <div className="py-28 md:py-30 px-4 md:px-16 lg:px-24 xl:px-32">
        {/* Hotel Name & Discount */}
        <div className="flex flex-col md:flex-row item-start md:items-center gap-2">
          <h1 className="text-3xl md:text-4xl font-playfair">
            {room.hotel.name}
            <span className="font-playfair text-sm">({room.roomType})</span>
          </h1>
          <p className="text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full">
            20% OFF
          </p>
        </div>
        {/* Star Rating */}
        <div className="flex items-center gap-1 mt-2">
          <StarRating />
          <p className="ml-2">200+ reviews</p>
        </div>
        {/* Room Address */}
        <div className="flex items-center gap-1 text-gray-500 mt-2">
          <img src={assets.locationIcon} alt="location-icon" />
          <span>{room.hotel.address}</span>
        </div>
        {/* Room Images */}
        <div className="flex flex-col lg:flex-row mt-6 gap-6">
          <div className="lg:w-1/2 w-full">
            <img
              src={mainImage}
              alt="Room Image"
              className="w-full rounded-xl shadow-xl object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-1/2 w-full">
            {room?.images.length > 1 &&
              room.images.map((image, index) => (
                <img
                  src={image}
                  onClick={() => setMainImage(image)}
                  key={index}
                  alt="Room Image"
                  className={`w-full rounded-xl shadow-xl object-cover cursor-pointer ${mainImage === image && "outline-3 outline-orange-500"}`}
                />
              ))}
          </div>
        </div>
        {/* Room Highlight */}
        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-playfair">
              Experience Luxury Like Never Before
            </h1>
            <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100"
                >
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{item}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Room Price */}
          <p className="text-2xl font-medium">
            ${room.pricePerNight.toFixed(2)}/night
          </p>
        </div>
        {/* CheckIn CheckOut Form */}
        <form className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto] items-end bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-10">
          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 text-gray-500">
            <div className="flex flex-col gap-2 min-w-0">
              <label htmlFor="checkInDate" className="font-medium">Check-In</label>
              <input
                type="date"
                id="checkInDate"
                className="w-full rounded-md border border-gray-300 px-3 py-3 outline-none focus:ring-2 focus:ring-sky-300"
                required
              />
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <label htmlFor="checkOutDate" className="font-medium">Check-Out</label>
              <input
                type="date"
                id="checkOutDate"
                className="w-full rounded-md border border-gray-300 px-3 py-3 outline-none focus:ring-2 focus:ring-sky-300"
                required
              />
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <label htmlFor="guests" className="font-medium">Guests</label>
              <input
                type="number"
                id="guests"
                placeholder="0"
                className="w-full rounded-md border border-gray-300 px-3 py-3 outline-none focus:ring-2 focus:ring-sky-300"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-95 transition-all text-white rounded-md py-3 md:py-3 px-6 text-base font-semibold"
          >
            Check Availability
          </button>
        </form>
      </div>
    )
  );
};

export default RoomDetails;
