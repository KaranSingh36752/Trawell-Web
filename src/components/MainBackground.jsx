import React from 'react';
import { motion } from 'framer-motion';

const MainBackground = () => {
  const images = [
    'src/assets/images/0.jpeg',
    'src/assets/images/1.jpg',
    'src/assets/images/2.jpeg',
    'src/assets/images/3.jpg',
    'src/assets/images/4.jpg',
    'src/assets/images/5.jpg',
  ];

  // Duplicate the images for seamless looping
  const repeatedImages = [...images, ...images];

  return (
    <div className="relative -my-32 m-0 w-screen h-screen overflow-hidden opacity-85 rotate-[-3deg]">
      <motion.ul
        className="absolute flex flex-col gap-4 h-[200%]"
        initial={{ translateY: "0%" }}
        animate={{ translateY: "-80%" }} // Move halfway as the list is doubled
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {repeatedImages.map((src, index) => (
          <li key={index} className="w-full flex-shrink-0">
            <div className="w-[20rem] h-[25rem] rounded-xl overflow-hidden">
              <img
                src={src}
                alt={`Image ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default MainBackground;
