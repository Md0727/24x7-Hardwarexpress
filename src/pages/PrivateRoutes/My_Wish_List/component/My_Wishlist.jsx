import React, { useEffect, useState } from 'react'
import { APIRequest, ApiUrl } from '../../../../utils/api'
import { toast } from 'react-toastify'
import { Screen_Loader } from '../../../../component/Screen_Loader/Screen_Loader'
import { Link } from 'react-router-dom'
import { ButtonCustome } from '../../../../component/Button/ButtonCustome'

export const My_Wishlist = () => {
    const [IsLoading, setIsLoading] = useState(false)
    const [saveWishlist, setSaveWishList] = useState([])

    const get_WishList_Data = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.get_wishlist,
            method: "get",
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setSaveWishList(res?.data)
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

    const remove_WishList_Fun = (productId) => {
        const userConfirmed = window.confirm('Do you want to remove the record? Press "OK to confirm or "Cancel" to abort.');
        if (userConfirmed) {
            setIsLoading(true)
            let config = {
                url: ApiUrl?.remove_wishlist,
                method: "post",
                body: {
                    "productId": productId
                }
            }
            APIRequest(
                config,
                res => {
                    if (!res?.error) {
                        setSaveWishList(false)
                        setIsLoading(false)
                        get_WishList_Data();
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
    }

    const delete_WishList_Fun = () => {
        const userConfirmed = window.confirm('Do you want to remove the record? Press "OK to confirm or "Cancel" to abort.');
        if (userConfirmed) {
            setIsLoading(true)
            let config = {
                url: ApiUrl?.delete_wishlist,
                method: "delete",
            }
            APIRequest(
                config,
                res => {
                    if (!res?.error) {
                        setSaveWishList(false)
                        setIsLoading(false)
                        get_WishList_Data();
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
    }

    useEffect(() => {
        get_WishList_Data()
    }, [])

    return (
        <div>
            {/* spacing div only */}
            <div className='mt-28'></div>
            {
                IsLoading && (
                    <Screen_Loader />
                )
            }
            <div class="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
                <h2 class="text-3xl font-bold">My Wish List</h2>
                <p class="mt-3 text-sm font-medium text-gray-700">
                    We thought it would be great to create a place where all can find the moving service they want at any given time.
                </p>
                <ul class="flex flex-col divide-y divide-gray-200">
                    <ButtonCustome
                        className="text-md border border-themBgColor home_btn font-bold hover:bg-white hover:text-themBgColor transition-all duration-500 text-white bg-themBgColor rounded-full px-10 mb-2 ml-auto p-2"
                        buttonTitle="Clear"
                        type="text"
                        onClick={delete_WishList_Fun}
                    />
                    {
                        saveWishlist?.wishlist?.length > 0 ? (
                            saveWishlist?.wishlist?.map((list, i) => (
                                <li class="flex flex-col py-6 sm:flex-row sm:justify-between">
                                    <div class="flex w-full space-x-2 sm:space-x-4">
                                        <img
                                            class="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                                            src={list?.productId?.images[0]}
                                            alt="Nike Air Force 1 07 LV8"
                                        />
                                        <div class="flex w-full flex-col justify-between pb-4">
                                            <div class="flex w-full justify-between space-x-2 pb-0">
                                                <div class="space-y-1">
                                                    <Link to={`/products/products-details?productId=${list?.productId?._id}&category_type=${list?.productId?.category}`} class="text-lg font-semibold leading-snug sm:pr-8">
                                                        {list?.productId?.name}
                                                    </Link>
                                                    <p class="text-sm mt-0" style={{ margin: '0px' }}>
                                                        {list?.productId?.brand}
                                                    </p>
                                                </div>
                                                <div class="text-right">
                                                    <p class="text-lg font-semibold">
                                                        $ {list?.productId?.price}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex divide-x text-sm">
                                                <button
                                                    type="button"
                                                    class="flex items-center space-x-2 px-2 py-1 pl-0"
                                                    onClick={() => remove_WishList_Fun(list?.productId?._id)}
                                                >
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        class="lucide lucide-trash"
                                                    >
                                                        <path d="M3 6h18"></path>
                                                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                                                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                                                    </svg>
                                                    <span>Remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))
                        ) : (
                            'Data Not Found'
                        )

                    }
                </ul>
            </div>
        </div>
    )
}
