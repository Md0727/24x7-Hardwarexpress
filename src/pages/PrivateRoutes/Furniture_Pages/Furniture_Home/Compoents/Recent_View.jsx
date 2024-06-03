import React, { useEffect, useState } from 'react'
import "../css/Style.css"
import { image } from '../../../../../constent/image'
import { FaPlusSquare } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { ButtonCustome } from '../../../../../component/Button/ButtonCustome'
import { All } from '../Plan_by_Space/All';
import { Living_Room } from '../Plan_by_Space/Living_Room';
import { Dining_Room } from '../Plan_by_Space/Dining_Room';
import { Bed_Room } from '../Plan_by_Space/Bed_Room';
import { Kitchen } from '../Plan_by_Space/Kitchen';
import { APIRequest, ApiUrl } from '../../../../../utils/api';
import { toast } from 'react-toastify';
import { RecentView } from './RecentView';
import Hot_Deal from '../../../../../component/Skeleton/Hot_Deal/Hot_Deal';
import Popular_List_Skeleton from '../../../../../component/Skeleton/Popular_List_Skeleton/Popular_List_Skeleton';
import { BackToButton } from '../../../../../component/BackToButton/BackToButton';
import { Search_Product_Filter } from '../../../../../component/Search_Product_Filter/Search_Product_Filter';
import { Screen_Loader } from '../../../../../component/Screen_Loader/Screen_Loader';

export const Recent_View = () => {
    const [isActiveButton, setIsActiveButton] = useState('All')
    const [IsLoading, setIsLoading] = useState(false);
    const [IsLoading2, setIsLoading2] = useState(false);
    const [IsLoading3, setIsLoading3] = useState(false);
    const [RecentProduct, setRecentProduct] = useState([])
    const [ProductFiltered, setProductFiltered] = useState([])
    const [DealList, setDealList] = useState([])
    const [res_Tags, setRes_Tags] = useState([])
    const [city, setCity] = useState('')
    const [statedata, setStateInput] = useState('')

    const perams = new URLSearchParams(window.location.search)
    const service_type = perams?.get("type")
    // console.log('service_type', service_type)

    const RecentProductFun = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.productRecent,
            method: "get",
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setRecentProduct(res?.data)
                    setIsLoading(false)
                }
            },
            err => {
                setIsLoading(false)
                if (err?.error) {
                    toast.error(err?.message)
                }
            }
        )
    }

    const ProductFilteredFun = () => {
        setIsLoading3(true)
        setIsLoading(true)
        let config = {
            url: ApiUrl?.productFiltered,
            method: "post",
            body: {
                "category": "Furniture",
                "limit": 10,
                "page": 1,
                "mostPopular": true,
                "priceRange": {
                    "minPrice": 0,
                    "maxPrice": 15000
                },
                "city": city ? city : '',
                "state": statedata ? statedata : ''
            }
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setProductFiltered(res?.data)
                    setIsLoading3(false)
                    setIsLoading(false)
                }
            },
            err => {
                setIsLoading3(false)
                if (err?.error) {
                    toast.error(err?.message)
                }
            }
        )
    }

    const GetDealFun = () => {
        setIsLoading2(true)
        let config = {
            url: ApiUrl?.getAllDeal,
            method: "post",
            body: {
                type: "Furniture",
                limit: 10,
                page: 1
            }
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setDealList(res?.data)
                    setIsLoading2(false)
                }
            },
            err => {
                setIsLoading2(false)
                if (err?.error) {
                    toast.error(err?.message)
                }
            }
        )
    }

    const Get_All_Tag = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.Get_All_Tag,
            method: "get",
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setRes_Tags(res?.data)
                    setIsLoading(false)
                }
            },
            err => {
                setIsLoading(false)
                if (err?.error) {
                    toast.error(err?.message)
                }
            }
        )
    }

    useEffect(() => {
        RecentProductFun()
        ProductFilteredFun()
        GetDealFun()
        Get_All_Tag()
    }, [])


    return (
        <div className="App mt-10 funiture_main_container w-fullbg-white mobile_padding">
            {/* =========== recently view =========== */}
            {
                IsLoading && (
                    <Screen_Loader />
                )
            }
            <RecentView
                setStateInput={setStateInput}
                setCity={setCity}
                city={city}
                statedata={statedata}
                ProductFilteredFun={ProductFilteredFun}
                ProductFiltered={ProductFiltered}
            />

            {/* ========== hot deals ============ */}
            {
                IsLoading2 && (
                    <Hot_Deal />
                )
            }
            {
                !IsLoading2 && (
                    <div className='Hot_deals-main'>
                        <div className='Hot_deals_heading mt-3 pb-2'>
                            <h1 className='font-poppins hot-deals-text'>Hot deals</h1>
                        </div>
                        <div className='Hot_deals'>
                            {
                                DealList?.map((item, index) => (
                                    <div className='slide_item' key={`Deallist${index}`}>
                                        <Link to={`/products/vendor-products-listing?vendorId=${item?.vendorId}`} >
                                            <img src={item?.url ? item?.url : "assets/images/Funiture/Hot_deals_01.png"} alt="Ellipse" />
                                        </Link>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                )
            }
            {/* ========== hot deals ============ */}

            {/* =========== Popular view =========== */}
            {
                IsLoading3 && (
                    <Popular_List_Skeleton />
                )
            }
            {

                !IsLoading3 && (
                    <div className='recent-view-main mt-5'>
                        <div className='recent-veiw'>
                            <h1 className='Recently_viewed font-poppins'>Popular Items</h1>
                            <Link to={`/products/products-listing`} >
                                <h1 className='see_all font-poppins'>See all</h1>
                            </Link>
                        </div>
                        <div className='popular_product mb-4'>
                            {
                                ProductFiltered?.length > 0 ? (
                                    ProductFiltered?.map((product, index) => (
                                        <Link className='card_product' to={`/products/products-details?productId=${product?._id}`} key={index}>
                                            <div className='product_image'>
                                                <img src={product?.images[0] ? product?.images[0] : "assets/images/Funiture/Product_01.png"} alt="Product_01" />
                                                <div className='plus_icon'>
                                                    <FaPlusSquare />
                                                </div>
                                            </div>
                                            <div className='content_popular_product'>
                                                <div className='rating_icon mt-2'>
                                                    {
                                                        Array.from({ length: product?.avgRating }, (_, i) => (
                                                            <>
                                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width={9} height={9} viewBox="0 0 9 9" fill="none">
                                                                    <path d="M4.5 0.25L6.02963 2.85796L9 3.49671L6.975 5.74727L7.28115 8.75L4.5 7.53296L1.71885 8.75L2.025 5.74727L0 3.49671L2.97037 2.85796L4.5 0.25Z" fill="#262626" />
                                                                </svg>
                                                            </>
                                                        ))
                                                    }
                                                    {/* <p className='rating_num font-poppins'>49</p> */}
                                                </div>
                                                <div className='product_title my-2'>
                                                    <h2 className='font-poppins'>{product?.name}</h2>
                                                </div>
                                                <div className='price_amount'>
                                                    <p className='font-poppins'>$ {product?.price}</p>
                                                    <p className='font-poppins'>$ {product?.totalPrice}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    'Data Not Available'
                                )
                            }

                        </div>
                    </div>
                )
            }

            {/* =========== Plan by Space =========== */}
            <div className='Plan_bySpace-main mt-5 mb-10'>
                {/* <div className='recent-veiw'>
                    {
                        service_type === "Furniture" && <h1 className='Recently_viewed font-poppins'>Plan by {service_type} 4 Rooms</h1>
                    }
                    {
                        service_type === "Appliances" && <h1 className='Recently_viewed font-poppins'>Plan by {service_type} WorkSpace</h1>
                    }

                </div> */}
                <div className='main_button_div'>
                    {
                        res_Tags?.map((button, index) => (
                            <>
                                <div className='button_div' key={index} onClick={() => setIsActiveButton(button)}>
                                    <ButtonCustome
                                        className={`text-md font-bold transition-all duration-500 ${isActiveButton === button ? 'text-white bg-themBgColor border border-themBgColor' : 'text-themBgColor border border-themBgColor bg-white'} rounded-full px-5 m-auto py-1`}
                                        buttonTitle={button}
                                        type="text"
                                    />
                                </div>
                            </>
                        ))
                    }
                </div>
                <div>
                    {
                        isActiveButton && (
                            <All tags_title={isActiveButton} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

const buttonName = ["All", "Living Room", "Dining Room", "Bed Room", "Kitchen"]
