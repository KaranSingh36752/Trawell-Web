import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/ThreeDCard";

const Card = ({ user }) => {
  const { firstName, lastName, image, about, age, gender } = user;
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  return (
    <div className="flex justify-center items-center max-h-full rounded-xl  bg-[#4586ff] ">
      <CardContainer>
        <CardBody className="bg-gray-50  border border-gray-300 px-6 pb-96  rounded-lg shadow-lg">
          <CardItem translateZ={100} className="w-full mt-5">
            <img
              src={image}
              alt="Floating Card"
              className="h-70 w-full object-cover rounded-lg shadow-lg"
            />
          </CardItem>
          <CardItem
            translateZ={50}
            className="text-xl font-bold text-gray-800 mt-8 "
          >
            {firstName + " " + lastName}
          </CardItem>
          <div className="flex">
            <CardItem translateZ={60} className="text-gray-700  text-md mr-2">
              {age}
            </CardItem>
            <CardItem translateZ={60} className="text-gray-700  text-md">
              {capitalize(gender)}
            </CardItem>
          </div>

          <CardItem translateZ={60} className="text-gray-600  text-sm">
            {about}
          </CardItem>
          <div className="flex justify-between items-center mt-8 relative z-10">
            <CardItem
              as="button"
              translateZ={20}
              className="cursor-pointer pointer-events-auto px-4 py-2 bg-black text-white text-sm font-bold rounded-lg"
            >
              Try Now →
            </CardItem>
            <CardItem
              as="button"
              translateZ={20}
              className="cursor-pointer pointer-events-auto px-4 py-2 bg-black text-white text-sm font-bold rounded-lg"
            >
              Sign Up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default Card;
