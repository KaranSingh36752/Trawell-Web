import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router";
import MainBackground from "./MainBackground";
import CreateAccount from "./CreateAccount";
import axios from "axios";
import { BASE_URL } from "../utilis/contants";
import { addUser } from "../utilis/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const location = useLocation();

  // Fetch user data only if not available
  const fetchUser = async () => {
    if (user) return; // Prevents unnecessary API calls if user is already loaded
    try {
      const res = await axios.get(`${BASE_URL}/user/1`, {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
    } catch (err) {
      if (err.response?.status === 401) navigate("/");
      console.error(err);
    }
  };

  // Call fetchUser when the component mounts
  useEffect(() => {
    fetchUser();
  }, []); // Runs only once when Body is mounted

  // Hide MainBackground & Footer only on /feed or /profile
  const hideBackgroundAndFooter = location.pathname === "/feed" || location.pathname === "/profile";

  return (
    <>
      <Header />
      {!hideBackgroundAndFooter && <MainBackground />}
      {!hideBackgroundAndFooter && <CreateAccount />}
      <Outlet />
      {!hideBackgroundAndFooter && <Footer />}
    </>
  );
};

export default Body;



