import React, { useEffect, useState } from 'react'
import HeaderModule from './Header.module.css'
import { ImageTag } from '../ImageTag/ImageTag'
import { image } from '../../constent/image'
import { InputCustome } from '../InputCustome/InputCustome'
import { Sidebar } from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { APIRequest, ApiUrl } from '../../utils/api'
import { toast } from 'react-toastify'
import { Search_Product_Filter } from '../Search_Product_Filter/Search_Product_Filter'

const Header = () => {
  const [leftValue, setLeftValue] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleButton = () => {
    setLeftValue(!leftValue)
  }



  return (
    <div className={HeaderModule?.main_header}>
      <div className='md:h-24 max-sm:h-16 px-4 w-full flex justify-between items-center'>
        <div className='sm:w-1/2 max-sm:w-full text-white'>
          <div className='logo flex justify-start items-center'>
            <div onClick={toggleButton} className='cursor-pointer'>
              <ImageTag
                src={image?.menuIcon}
                className="md:w-[50px] max-sm:w-[30px] h-auto"
                alt="menu icon"
              />
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="54" height="35" viewBox="0 0 54 35" fill="none">
                <rect y="30" width="54" height="5" rx="2.5" fill="white" />
                <rect x="14" y="15" width="27" height="5" rx="2.5" fill="white" />
                <rect width="54" height="5" rx="2.5" fill="white" />
              </svg> */}
            </div>
            <div className='logoImage ml-5 sm:ml-24'>
              <Link to='/'>
                <ImageTag
                  src={image?.headerLogo}
                />
              </Link>
            </div>
          </div>
          {/* ========== sidebar code =========== */}
          {/* <Sidebar
            leftValue={leftValue}
            setLeftValue={setLeftValue}
          /> */}
        </div>
        <div className='sm:w-1/2 text-right text-white max-sm:hidden'>
          <div class="relative inline-block text-left">
            <div onClick={() => setShowDropdown(!showDropdown)}>
              <button type="button" class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                Business Login
                <svg class="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            {
              showDropdown && (
                <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                  <div class="py-1" role="none">
                    <Link target='_blank' to="https://panel.cmemove.com/register" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Login or join as a furniture vendor</Link>
                    <Link target='_blank' to="https://panel.cmemove.com/register" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Login or join as a appliance vendor</Link>
                    <Link target='_blank' to="https://panel.cmemove.com/register" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Login or join as a service provider</Link>
                    {/* <form method="POST" action="#" role="none">
                  <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                </form> */}
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;