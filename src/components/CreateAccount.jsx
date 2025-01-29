import React, { useState } from "react";
import { motion } from "framer-motion";

const CreateAccountComponent = ({onclose})

const CreateAccount = () => {
    const [isOpen , setIsOpen] = useState(false);

  return (
    <div className="relative -my-[40rem] min-h-screen flex flex-col items-center justify-center space-y-6">
      <h1 className="text-6xl font-bold text-center">
        FIND FRIENDS THAT CAN TRAVEL ANYWHERE
      </h1>
      <motion.button
        className="text-2xl font-bold px-6 py-3 bg-blue-500 text-white rounded-2xl shadow-lg"
        initial={{ scale: 1, y: 0 }}
        whileHover={{ scale: 1.1, y: -5 }} // Pops up smoothly
        whileTap={{ scale: 0.95 }} // Slightly shrinks when clicked
        transition={{ type: "spring", stiffness: 200, damping: 10 }} // Smooth bounce effect
        onClick={() => setIsOpen(true)}
      >
        Create Account
      </motion.button>

      {isOpen && <CreateAccountComponent onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default CreateAccount;
