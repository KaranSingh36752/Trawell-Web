import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import MainBackground from "./MainBackground";
import CreateAccount from "./CreateAccount";

const Body = () => (
  <>
    <Header />
    <MainBackground />
    <CreateAccount />
    <Outlet />
    <Footer />
  </>
);

export default Body;

