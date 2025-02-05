import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, KeyRound } from "lucide-react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/contants";

const CreateAccountComponent = ({ onClose }) => {
  const [emailId, setEmailId] = useState("simran@gmail.com");
  const [password, setPassword] = useState("Simran@1234");
  const [error , setError] = useState("");
  const modalRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/login`, {
        emailId,
        password,
      },{withCredentials: true});
      console.log(res.data);
      dispatch(addUser(res.data));
      return navigate("/feed");
    } catch (err) {
      setError(err?.response?.data)
    }
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center p-4 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl w-full max-w-md p-6"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-xl font-bold flex justify-center">
            Create Account
          </h2>
        </div>
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
            <span>Continue with Google</span>
          </button>
          <button className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg">
            <span>Log in with Facebook</span>
          </button>
          <div className="flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2">
              <Mail className="w-5 h-5 text-gray-500" />
              <input
                type="tel"
                placeholder="Email"
                className="flex-1 outline-none"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
              />
            </div>
            {/* <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2">
              <Smartphone className="w-5 h-5 text-gray-500" />
              <input type="tel" placeholder="Phone number" className="flex-1 outline-none" />
            </div> */}
            <div className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2">
              <KeyRound className="w-5 h-5 text-gray-500" />
              <input
                type="tel"
                placeholder="Password"
                className="flex-1 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-red-500 font-bold text-sm ml-2">
              <span>{error}</span>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleLogin}>
            Continue
          </button>
          <p className="text-center text-sm text-gray-600">
            By tapping Log in or Continue, you agree to our Terms. Learn how we
            process your data in our Privacy Policy, and Cookie Policy.
          </p>
          <div className="text-center">
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Trouble Logging In?
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="flex items-center space-x-2 text-gray-700">
              <span>App Store</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-700">
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CreateAccountComponent;
