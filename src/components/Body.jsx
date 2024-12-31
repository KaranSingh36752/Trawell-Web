import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'
import MainBackground from './MainBackground'

const Body = () => {
  return (
    <>
    <Header/>
    <MainBackground/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Body