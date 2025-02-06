import React from "react";
import { CardContainer, CardBody, CardItem } from "./ui/ThreeDCard";

const Card = ({ feed }) => {
  const { firstName, lastName, image } = feed;
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
          <CardItem translateZ={60} className="text-gray-600  text-sm">
            Hover over this card to unleash the power of CSS perspective.
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
