import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  assets,
  facilityIcons,
  roomCommonData,
  roomsDummyData,
} from "../assets/assets";
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
      <div className="py-24 md:py-30 px-4 md:px-16 lg:px-24 xl:px-32">
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
        <form className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] items-end bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-md mx-auto mt-10 max-w-6xl">
          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3 text-gray-500">
            <div className="flex flex-col gap-2 min-w-0">
              <label htmlFor="checkInDate" className="font-medium">
                Check-In
              </label>
              <input
                type="date"
                id="checkInDate"
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-300"
                required
              />
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <label htmlFor="checkOutDate" className="font-medium">
                Check-Out
              </label>
              <input
                type="date"
                id="checkOutDate"
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-300"
                required
              />
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <label htmlFor="guests" className="font-medium">
                Guests
              </label>
              <input
                type="number"
                id="guests"
                placeholder="0"
                className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-300"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-95 transition-all text-white rounded-md py-3 px-6 text-base font-semibold"
          >
            Check Availability
          </button>
        </form>
        {/* Common Specifications */}
        <div className="mt-10 space-y-4">
          {roomCommonData.map((spec, index) => (
            <div key={index} className="flex items-start gap-2">
              <img
                src={spec.icon}
                alt={`${spec.title}-icon`}
                className="w-6.5"
              />
              <div>
                <p className="text-base">{spec.title}</p>
                <p className="text-gray-500">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl border-y border-gray-300 mt-15 py-10 text-gray-500">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
            cumque ducimus, voluptate odit exercitationem molestiae, est quam
            vel ipsa temporibus repellendus aliquam rerum voluptatibus esse a
            quisquam explicabo nobis asperiores.
          </p>
        </div>
        {/* Hosted By */}
        <div className="flex flex-col items-start gap-4 mt-15">
          <div className="flex gap-4 items-center">
            <img
              src={assets.userIcon}
              alt="Host"
              className="h-14 w-14 md:h-16 md:w-16 rounded-full invert object-cover"
            />
            <div>
              <p className="text-lg md:text-xl">Hosted by {room.hotel.name}</p>
              <div className="flex items-center mt-1">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
            </div>
          </div>
          <button className="px-6 p-2.5 mt-4 rounded text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer">Contact Now</button>
        </div>
      </div>
    )
  );
};

export default RoomDetails;
