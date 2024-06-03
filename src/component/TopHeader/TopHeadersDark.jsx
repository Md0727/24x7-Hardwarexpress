import React, { useEffect, useState } from 'react'
import "./TopHeader.css"
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Sidebar } from '../Sidebar/Sidebar'
import { MdMenu } from 'react-icons/md'
import { APIRequest, ApiUrl } from '../../utils/api'
import { addToCart } from '../../app/slice/ProductSlice'

const TopHeadersDark = () => {
    const dispatch = useDispatch()
    const navigation = useNavigate();
    const CartProductList = useSelector(state => state.product.cart)
    const [leftValue, setLeftValue] = useState(false)
    const [IsLoading, setIsLoading] = useState(false);
    const AddToCart = () => {
        navigation('/product/cart')
    }

    const toggleButton = () => {
        setLeftValue(!leftValue)
    }

    const GetCartFun = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.getCart,
            method: "get",
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    dispatch(addToCart(res?.data[0]?.products))
                    setIsLoading(false)
                }
            },
            err => {
                setIsLoading(false)
            }
        )
    }
    useEffect(() => {
        GetCartFun()
    }, [])

    return (
        <div className='darkClass'>
            <header>
                <div className='top-header-part'>
                    <div className="woodmart-logo-wrap switch-logo-enable">
                        <a href="/" className="woodmart-logo woodmart-main-logo" rel="home">
                            <img src="/assets/images/Logo/mainLogo.png" alt="Vedicline" />
                        </a>
                    </div>
                    <div className='top-header-search-bx'>
                        <form>
                            <input type="search" className="search-bar font-poppins" placeholder="Search for products" />
                            <button type="submit" className="searchsubmit"><FaSearch /></button>
                        </form>
                    </div>
                    <div className='menu-parts-top'>
                        <ul>
                            <li>
                                <NavLink to="/abouts" className='text-md font-poppins hover:text-themBgColor'>About Us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/blogs" className='text-md font-poppins hover:text-themBgColor'>Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" className='text-md hover:text-themBgColor font-poppins'>Login / Register</NavLink>
                            </li>
                        </ul>
                    </div>
                    <span className='inline-block'>
                        <div className='sm:w-1/2 text-white'>
                            <div className='text-right'>
                                <div className='cart_div w-full ml-3 relative cursor-pointer'>
                                    <div className='add-to-cart' onClick={AddToCart}>
                                        <FaShoppingCart className='text-black font-poppins text-md' />
                                    </div>
                                    <div className='number_qty absolute -top-1 left-5 w-4 text-xs h-4 flex justify-center items-center bg-black text-white p-1 rounded-full font-poppins'>{CartProductList?.length ? CartProductList?.length : '0'}</div>
                                </div>
                            </div>
                        </div>
                    </span>
                    <div className='mobile-toggle-btn'>
                        <div onClick={toggleButton} className='cursor-pointer ml-3 text-4xl'>
                            <MdMenu />
                        </div>
                        <Sidebar
                            leftValue={leftValue}
                            setLeftValue={setLeftValue}
                        />
                    </div>
                </div>
                <div className='top-header-search-bx-mobile'>
                    <form>
                        <input type="search" className="search-bar font-poppins" placeholder="Search for products" />
                        <button type="submit" className="searchsubmit"><FaSearch /></button>
                    </form>
                </div>
            </header>
        </div>
    )
}

export default TopHeadersDark