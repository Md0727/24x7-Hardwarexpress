import React, { useState } from 'react'
import HeaderModule from './Header.module.css'
import { ImageTag } from '../ImageTag/ImageTag'
import { image } from '../../constent/image'
import { InputCustome } from '../InputCustome/InputCustome'
import { Sidebar } from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import { Search_Product_Filter } from '../Search_Product_Filter/Search_Product_Filter'

const HeaderDark = () => {
  const [searchValue, setSearchValue] = useState('');
  const [leftValue, setLeftValue] = useState(false)

  const searcHandler = (e) => {
    setSearchValue(e.target.value)
  }

  const toggleButton = () => {
    setLeftValue(!leftValue)
  }

  return (
    <div className={HeaderModule?.main_headerDark}>
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
            <div className='logoImage ml-5 sm:ml-10'>
              <Link to='/'>
                <ImageTag
                  src={image?.headerLogo}
                />
              </Link>
            </div>
          </div>
          {/* ========== sidebar code =========== */}
          <Sidebar
            leftValue={leftValue}
            setLeftValue={setLeftValue}
          />
        </div>
        <div className='sm:w-1/2 text-white'>
            {/* <Search_Product_Filter /> */}
        </div>
      </div>
    </div>
  )
}

export default HeaderDark