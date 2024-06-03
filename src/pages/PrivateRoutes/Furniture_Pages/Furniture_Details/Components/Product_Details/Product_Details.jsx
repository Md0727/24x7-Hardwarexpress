import React, { useEffect, useState } from 'react'
import { TECollapse } from "tw-elements-react";
import { image } from '../../../../../../constent/image';
import { Link, json, useLocation, useNavigate } from 'react-router-dom';
import { FaPlusSquare } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { APIRequest, ApiUrl } from '../../../../../../utils/api';
import { RecentView } from '../../../Furniture_Home/Compoents/RecentView';
import { SimilarProduct } from '../../../Furniture_Home/Compoents/SimilarProduct';
import AddToCart from '../Cart/AddToCart';
import Products_details_Skeleton from '../../../../../../component/Skeleton/Products_details_Skeleton/Products_details_Skeleton';
import { Screen_Loader } from '../../../../../../component/Screen_Loader/Screen_Loader';
import { BackToButton } from '../../../../../../component/BackToButton/BackToButton';
import { useDispatch, useSelector } from 'react-redux';
import { FaHeart, FaShare } from "react-icons/fa"


export const Product_Details = () => {
    const dispatch = useDispatch()
    const [product_details_Sketon, setProduct_details_Sketon] = useState(true)
    const [IsLoading, setIsLoading] = useState(false);
    const [ProductDetails, setProductDetails] = useState(null)
    const [imageChange, setImageChanbe] = useState(null)
    const [copied, setCopied] = useState(false);
    const [copied01, setCopied01] = useState(false);
    const [pro_id, setId] = useState('')
    const [saveWishlist, setSaveWishList] = useState('')
    const perams = new URLSearchParams(window.location.search)
    const prdoductId = perams?.get("productId")

    const searchBarId = useSelector((state) => {
        return state?.saveSearchID
    })

    const ProductDetailsFun = () => {
        setProduct_details_Sketon(true)
        setIsLoading(true)
        let config = {
            url: ApiUrl?.productById,
            method: "post",
            body: {
                productId: prdoductId
            }
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    console.log(res?.data);
                    setProductDetails(res?.data)
                    setSaveWishList(res?.isWishlist)
                    setProduct_details_Sketon(false)
                    setIsLoading(false)
                }
            },
            err => {
                setIsLoading(false)
                setProduct_details_Sketon(false)
                if (err?.error) {
                    toast.error(err?.message)
                }
            }
        )
    }

    // save wishlsit code ===================
    const save_WishList_Fun = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.wistlist_Product_add,
            method: "post",
            body: {
                productId: prdoductId
            }
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setSaveWishList(true)
                    setIsLoading(false)
                }
            },
            err => {
                if (err?.error) {
                    setIsLoading(false)
                    // toast.error(err?.message)
                    setSaveWishList(true)
                }
            }
        )
    }

    const remove_WishList_Fun = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.remove_wishlist,
            method: "post",
            body: {
                productId: prdoductId
            }
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setSaveWishList(false)
                    setIsLoading(false)
                }
            },
            err => {
                if (err?.error) {
                    setIsLoading(false)
                    toast.error(err?.message)
                }
            }
        )
    }
    // save wishlsit code ==================

    useEffect(() => {
        ProductDetailsFun()
    }, [prdoductId, searchBarId])

    const copyURLToClipboard = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                setCopied(true);
                setCopied01(true);
                // Reset copied state after a certain time (optional)
                setTimeout(() => {
                    setCopied(false);
                }, 3000); // 3000 milliseconds = 3 seconds
            })
            .catch(error => {
                console.error('Error copying URL to clipboard:', error);
            });
    };

    const undoCopy = () => {
        setCopied01(false);
    };

    return (
        <div>
            <div>
                {/* {copied ? (
                    <div>
                        URL Copied! <button onClick={undoCopy}>Undo</button>
                    </div>
                ) : (
                    <button onClick={copyURLToClipboard}>
                        Copy URL
                    </button>
                )} */}
            </div>
            {
                (copied) && (<div class="bg-green-100 fixed bottom-0 w-full z-20 border-l-4 mb-0 border-green-500 text-orange-700 p-4" role="alert">
                    <p class="font-bold">{copied ? 'URL Copied!' : 'Copy URL'}</p>
                    <p>Well done! The URL is now ready to use.</p>
                </div>)
            }

            <div className="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16 product_details_">
                <BackToButton
                    pageUrl={''}
                    pageTitle={"Back"}
                />
                {
                    product_details_Sketon && (
                        <Products_details_Skeleton />
                    )
                }
                {
                    !product_details_Sketon && (
                        <div className="flex product_details justify-center gap-10 items-start">
                            <div className="w-1/2 product_details1">
                                <div className="w-full transition duration-150 ease-in hover:opacity-90 product_icon_parent relative">
                                    <div className='product_icon_child'>
                                        <span className={`${saveWishlist ? 'icons saveWishlist' : 'icons'}`} onClick={saveWishlist ? remove_WishList_Fun : save_WishList_Fun}>
                                            {
                                                IsLoading ? (
                                                    <div className='rounded-md bg-transparent'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className='bg-white' height={16} width={16} viewBox="0 0 200 200"><circle fill="#252460" stroke="#252460" strokeWidth={15} r={15} cx={40} cy={100}><animate attributeName="opacity" calcMode="spline" dur={2} values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4" /></circle><circle fill="#252460" stroke="#252460" strokeWidth={15} r={15} cx={100} cy={100}><animate attributeName="opacity" calcMode="spline" dur={2} values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2" /></circle><circle fill="#252460" stroke="#252460" strokeWidth={15} r={15} cx={160} cy={100}><animate attributeName="opacity" calcMode="spline" dur={2} values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin={0} /></circle></svg>
                                                    </div>
                                                ) : (
                                                    <FaHeart />
                                                )
                                            }
                                        </span>
                                        <span className={`icons ${copied01 ? 'copiedSucess' : ''}`} onClick={copied01 ? undoCopy : copyURLToClipboard}> <FaShare /></span>
                                    </div>
                                    <div>
                                        <img
                                            src={imageChange ? imageChange : ProductDetails?.images[0]}
                                            alt="Image"
                                            className="w-full object-cover"
                                        />
                                    </div>
                                </div>
                                <div className='product_img_parent'>
                                    {
                                        ProductDetails?.images?.map((img, _) => (
                                            <img className='cursor-pointer' src={img ? img : 'no image'} alt="image title" onClick={() => setImageChanbe(img)} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="w-1/2 product_details2">
                                <div className="mb-7 border-b border-gray-300 pb-7">
                                    <h2 className="text-heading mb-0 text-lg md:text-xl lg:text-2xl 2xl:text-3xl">
                                        {ProductDetails?.name} #{ProductDetails?.brand}
                                    </h2>
                                    <div className="mt-2 flex items-center ">
                                        <div className="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
                                            ₹ {ProductDetails?.price ? ProductDetails?.price : '---'}
                                        </div>
                                        <div className="font-segoe text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
                                            ₹ {ProductDetails?.totalPrice ? ProductDetails?.totalPrice : '---'}
                                        </div>
                                        <div className='pl-2'>
                                            <p className='font-poppins text-sm text-green800'>{ProductDetails?.isPercent === true ? ProductDetails?.discount + '% Off' : ProductDetails?.discount + ' $ Off'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-0">
                                    <ul className="space-y-5 pb-1 text-sm">
                                        <li>
                                            <span className="text-heading inline-block pr-2 font-semibold">quantity:</span>
                                            {ProductDetails?.quantity}
                                        </li>
                                        <li>
                                            <span className="text-heading inline-block pr-2 font-semibold">Category:</span>
                                            <a className="hover:text-heading transition hover:underline" href="#">
                                                {ProductDetails?.category}
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="border-b border-gray-300 pb-3  ">
                                    <div className="mb-4">
                                        <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                                            Description
                                        </h3>
                                        <p className="text-body text-sm leading-6  lg:text-base lg:leading-8">
                                            {ProductDetails?.description}
                                        </p>
                                    </div>
                                    <div className="mb-4 ">
                                        <h3 className="text-heading mb-2.5 text-base font-semibold capitalize md:text-lg">
                                            Warranty
                                        </h3>

                                        <ul class="space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
                                            <li>
                                                Warranty Summary
                                                <ol class="ps-5 mt-2 space-y-1 list-decimal list-inside">
                                                    <li>{ProductDetails?.warranty}</li>
                                                </ol>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                                <AddToCart Product={ProductDetails} />
                            </div>
                        </div>
                    )
                }
                {/* <RecentView /> */}
                <SimilarProduct ProductDetails={ProductDetails} setId={setId} />
            </div>

        </div>
    )
}
