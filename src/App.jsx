import React, { useEffect, useState } from 'react'
import { MainRoutes } from './Routes/MainRoutes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./assets/Css/Responsive.css"
import './../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import './../node_modules/owl.carousel/dist/assets/owl.theme.default.css';

function App() {
  
  return (
    <>
      <ToastContainer />
      <MainRoutes />
    </>
  )
}

export default App
