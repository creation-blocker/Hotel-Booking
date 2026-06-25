import React from "react";
import Title from "../components/Title";

const MyBookings = () => {
  return (
    <div className="py-24 md:py-30 px-4 md:px-16 lg:px-24 xl:px-32">
      <Title
        title="My Bookings"
        subTitle="Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks"
        align="left"
      />
    </div>
  );
};

export default MyBookings;
