import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const BackToButton = ({pageUrl, pageTitle}) => {
  return ( 
    <Link to={`/${pageUrl}`} className='flex items-center mb-3 mt-10 cursor-pointer justify-start gap-3'>
        <FaArrowLeftLong />
        <h2 className='text-md font-poppins text-cyan font-bold not-italic'>{pageTitle ? pageTitle : 'Junk Hauler'}</h2>
    </Link>
  )
}

export const BackToButton2 = ({pageUrl, pageTitle}) => {
  return ( 
    <Link to={`/${pageUrl}`} className='flex items-center mb-3 cursor-pointer justify-start gap-3'>
        <FaArrowLeftLong />
        <h2 className='text-md font-poppins text-cyan font-bold not-italic'>{pageTitle ? pageTitle : 'Junk Hauler'}</h2>
    </Link>
  )
}
