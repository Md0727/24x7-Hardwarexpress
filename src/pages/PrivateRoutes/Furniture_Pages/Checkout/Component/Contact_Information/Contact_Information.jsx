import React, { useEffect, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { ButtonCustome } from '../../../../../../component/Button/ButtonCustome'
import { APIRequest, ApiUrl } from '../../../../../../utils/api'
import { IoIosRemoveCircle } from "react-icons/io";
import { toast } from 'react-toastify';
import { Screen_Loader } from '../../../../../../component/Screen_Loader/Screen_Loader';
import { useDispatch, useSelector } from 'react-redux';
import { setCart_Id } from '../../../../../../app/slice/CartIdSlice';

export const Contact_Information = ({ cartIdForBuy }) => {
    const dispatch = useDispatch();
    const [IsLoading, setIsLoading] = useState(false);
    const [cashOnDelivery, setCashOnDelivery] = useState(false)
    const [onlinePayment, setOnlinePayment] = useState(false)
    const [get_Address, setGet_Address] = useState([])
    const [addressId, setAddressId] = useState(false)
    const [inputFormValue, setInputFormValue] = useState(
        {
            "homeNo": "",
            "fullname": "",
            "pinCode": "",
            "state": "",
            "country": "",
            "city": "",
            "district": "",
            "streetNo": ""
        }
    )

    // cash on delivery function 
    const cashOnDeliveryFun = () => {
        setCashOnDelivery(!cashOnDelivery)
        setOnlinePayment(false)
    }

    // online delivery function 
    const onlineDeliveryFun = () => {
        setOnlinePayment(!onlinePayment)
        setCashOnDelivery(false)
    }

    // order placed api calling function
    const Order_Place = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.order_place,
            method: "post",
            body: {
                "cartId": cartIdForBuy,
                "addressId": addressId,
                "cashOnDelivery": cashOnDelivery
            }

        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    toast.success(res?.message)
                    setIsLoading(false)
                    localStorage.removeItem('cartId');
                    setTimeout(() => {
                        window.location.href = "/";
                    }, 2000)
                }
            },
            err => {
                console.log('err', err)
                if (err?.error) {
                    toast.error(err?.message)
                }
                setIsLoading(false)
            }
        )
    }

    const resetFun = () => {
        setInputFormValue({
            "fullname": "",
            "pinCode": "",
            "state": "",
            "country": "",
            "city": "",
            "district": "",
            "homeNo": "",
            "streetNo": ""
        })
    }

    const inputChangeHandler = (e) => {
        setInputFormValue({ ...inputFormValue, [e.target.name]: e.target.value })
    }

    const getAddress_Fun = () => {
        let config = {
            url: ApiUrl?.get_Address,
            method: "get",
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setGet_Address(res?.data)
                }
            },
            err => {
                console.log('err', err)
            }
        )
    }

    const removeAddress_Fun = (id) => {
        setIsLoading(true)
        let config = {
            url: `${ApiUrl?.delete_Address}/${id}`,
            method: "delete",
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    console.log('res ==============', res)
                    toast.success(res?.message)
                    getAddress_Fun()
                    setIsLoading(false)
                }
            },
            err => {
                console.log('err', err)
                setIsLoading(false)
            }
        )
    }

    const add_Address_Fun = () => {
        if (inputFormValue?.homeNo === "") {
            toast.error("Please Enter address / With Street number.")
        } else if (inputFormValue?.country === "") {
            toast.error("Please Enter country name.")
        } else if (inputFormValue?.state === "") {
            toast.error("Please Enter state name.")
        } else if (inputFormValue?.city === "") {
            toast.error("Please Enter city name.")
        } else if (inputFormValue?.pinCode === "") {
            toast.error("Please Enter zipcode number.")
        } else {
            setIsLoading(true)
            let config = {
                url: ApiUrl?.add_Address,
                method: "post",
                body: inputFormValue
            }
            APIRequest(
                config,
                res => {
                    if (!res?.error) {
                        console.log('res ==============', res)
                        toast.success(res?.message)
                        getAddress_Fun()
                        setIsLoading(false)
                        resetFun()
                    }
                },
                err => {
                    if (err?.error) {
                        toast.error(err?.message)
                        setIsLoading(false)
                    }
                }
            )
        }

    }


    const proceed_to_pay = () => {
        if (get_Address && checked || addressId) {
            alert("done", checked)
            setIsLoading(true)
            let config = {
                url: ApiUrl?.transaction_create,
                method: "post",
                body: {
                    "cartId": cartIdForBuy
                }

            }
            APIRequest(
                config,
                res => {
                    if (!res?.error) {
                        toast.success(res?.message)
                        window.location.href = res?.data?.links[1].href;
                        localStorage.setItem('cartId', JSON.stringify({ cartId: cartIdForBuy, addressId: addressId }))
                        setIsLoading(false)
                    }
                },
                err => {
                    console.log('err', err)
                    if (!res?.error) {
                        toast.error(res?.message)
                        setIsLoading(false)
                    }
                }
            )
        } else {
            toast.error("Please select address / pickup store")
        }
    }

    useEffect(() => {
        getAddress_Fun()
    }, [])



    return (
        <div className=''>
            {
                IsLoading && (
                    <Screen_Loader />
                )
            }
            <div className="mx-auto my-10 max-w-4xl md:my-6">
                <div className="overflow-hidden  rounded-xl shadow">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="px-5 py-6 text-gray-900 md:px-8">
                            <div className="flow-root">
                                <div className="-my-6 divide-y divide-gray-200">
                                    <div className="py-6">
                                        <div>
                                            <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                                                <div>
                                                    <h3 id="contact-info-heading" className="text-lg font-semibold text-gray-900">
                                                        Shipping address
                                                    </h3>

                                                    <div className="mt-0">
                                                        <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                                                            <div className="sm:col-span-3">
                                                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                                                    Home No
                                                                </label>
                                                                <div className="mt-1">
                                                                    <input
                                                                        placeholder="Enter your address / With Street number"
                                                                        type="text"
                                                                        id="homeNo"
                                                                        name="homeNo"
                                                                        value={inputFormValue?.homeNo}
                                                                        onChange={inputChangeHandler}
                                                                        autoComplete="street-address"
                                                                        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                                                </div>
                                                            </div>
                                                            <div className="sm:col-span-3">
                                                                <label htmlFor="Country" className="block text-sm font-medium text-gray-700">
                                                                    Country
                                                                </label>
                                                                <div className="mt-1">
                                                                    <input
                                                                        placeholder="Enter your country"
                                                                        type="text" id="Country"
                                                                        name="country"
                                                                        value={inputFormValue?.country}
                                                                        onChange={inputChangeHandler}
                                                                        autoComplete="street-address" className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                                                </div>
                                                            </div>
                                                            <div className="sm:col-span-3">
                                                                <label htmlFor="Country" className="block text-sm font-medium text-gray-700">
                                                                    State
                                                                </label>
                                                                <div className="mt-1">
                                                                    <input
                                                                        placeholder="Enter your state"
                                                                        type="text" id="State"
                                                                        name="state"
                                                                        value={inputFormValue?.state}
                                                                        onChange={inputChangeHandler}
                                                                        autoComplete="street-address" className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                                                </div>
                                                            </div>
                                                            <div className="sm:col-span-3">
                                                                <label htmlFor="Country" className="block text-sm font-medium text-gray-700">
                                                                    District
                                                                </label>
                                                                <div className="mt-1">
                                                                    <input
                                                                        placeholder="Enter your District"
                                                                        type="text"
                                                                        id="district"
                                                                        name="district"
                                                                        value={inputFormValue?.district}
                                                                        onChange={inputChangeHandler}
                                                                        autoComplete="street-address" className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                                                                    City
                                                                </label>
                                                                <div className="mt-1">
                                                                    <input
                                                                        placeholder="Enter your city"
                                                                        type="text"
                                                                        id="city"
                                                                        name="city"
                                                                        value={inputFormValue?.city}
                                                                        onChange={inputChangeHandler}
                                                                        autoComplete="address-level2" className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
                                                                    Zip code
                                                                </label>
                                                                <div className="mt-1">
                                                                    <input
                                                                        placeholder="Enter your zip code"
                                                                        type="text"
                                                                        id="postal-code"
                                                                        name="pinCode"
                                                                        value={inputFormValue?.pinCode}
                                                                        onChange={inputChangeHandler}
                                                                        autoComplete="postal-code" className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-10 flex justify-end border-t border-gray-200 pt-6">
                                                    <ButtonCustome
                                                        className="text-md font-bold border border-themBgColor hover:bg-white hover:text-themBgColor transition-all duration-500 text-white bg-themBgColor rounded-full px-10 ml-auto p-2"
                                                        buttonTitle="Save Address"
                                                        type="text"
                                                        onClick={add_Address_Fun}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 px-5 py-6 md:px-8">
                            <div className="flow-root">
                                <ul className="-my-7 divide-y divide-gray-200">
                                    {
                                        get_Address?.length > 0 ? (
                                            get_Address?.map((address, index) => (
                                                <li key={index} className="flex items-stretch justify-between space-x-5 py-7">
                                                    <div className="flex flex-1 items-stretch">
                                                        <div className="ml-5 flex flex-col justify-between">
                                                            <div className="flex-1">
                                                                <p className="text-sm font-bold flex items-center justify-start gap-2">
                                                                    <input type="checkbox" onClick={() => setAddressId(address?._id)} checked={address?._id === addressId ? 'checked' : ''} className='w-4 h-4' />
                                                                    Delivery Address.
                                                                </p>
                                                                <p className="mt-1.5 capitalize text-sm font-medium text-gray-500">
                                                                    <div className='flex items-center gap-2'>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={25} viewBox="0 0 20 25" fill="none">
                                                                            <path d="M9.99997 0C7.34781 0 4.80428 1.05357 2.92892 2.92892C1.05357 4.80428 0 7.34781 0 9.99997C0 16.7499 8.81247 24.3749 9.18747 24.6999C9.41389 24.8936 9.70203 25 9.99997 25C10.2979 25 10.5861 24.8936 10.8125 24.6999C11.25 24.3749 19.9999 16.7499 19.9999 9.99997C19.9999 7.34781 18.9464 4.80428 17.071 2.92892C15.1957 1.05357 12.6521 0 9.99997 0ZM9.99997 22.0624C7.33748 19.5624 2.49999 14.175 2.49999 9.99997C2.49999 8.01085 3.29017 6.1032 4.69668 4.69668C6.1032 3.29017 8.01085 2.49999 9.99997 2.49999C11.9891 2.49999 13.8967 3.29017 15.3033 4.69668C16.7098 6.1032 17.4999 8.01085 17.4999 9.99997C17.4999 14.175 12.6625 19.5749 9.99997 22.0624ZM9.99997 4.99998C9.01106 4.99998 8.04437 5.29323 7.22213 5.84263C6.39988 6.39204 5.75902 7.17293 5.38058 8.08656C5.00215 9.00018 4.90313 10.0055 5.09606 10.9754C5.28898 11.9453 5.76518 12.8362 6.46445 13.5355C7.16371 14.2348 8.05462 14.711 9.02452 14.9039C9.99442 15.0968 10.9998 14.9978 11.9134 14.6194C12.827 14.2409 13.6079 13.6001 14.1573 12.7778C14.7067 11.9556 15 10.9889 15 9.99997C15 8.67389 14.4732 7.40212 13.5355 6.46445C12.5978 5.52677 11.326 4.99998 9.99997 4.99998ZM9.99997 12.5C9.50552 12.5 9.02217 12.3533 8.61105 12.0786C8.19993 11.8039 7.87949 11.4135 7.69028 10.9567C7.50106 10.4999 7.45155 9.99719 7.54801 9.51224C7.64447 9.02729 7.88258 8.58184 8.23221 8.23221C8.58184 7.88258 9.02729 7.64447 9.51224 7.54801C9.99719 7.45155 10.4999 7.50106 10.9567 7.69028C11.4135 7.87949 11.8039 8.19993 12.0786 8.61105C12.3533 9.02217 12.5 9.50552 12.5 9.99997C12.5 10.663 12.2366 11.2989 11.7677 11.7677C11.2989 12.2366 10.663 12.5 9.99997 12.5Z" fill="black" />
                                                                        </svg>
                                                                        <span className='text-xs'>
                                                                            {address?.fullAddress}
                                                                        </span>
                                                                    </div>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ml-auto flex flex-col items-end justify-between">
                                                        <button type="button"
                                                            onClick={() => removeAddress_Fun(address?._id)}
                                                            className="-m-2 border inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
                                                            <IoIosRemoveCircle />
                                                        </button>
                                                    </div>
                                                </li>
                                            ))
                                        ) : (
                                            <p className='mt-4'>Shipping Address Is Empty</p>
                                        )
                                    }
                                </ul>
                            </div>
                            <hr className="mt-6 border-gray-200" />
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center justify-between text-gray-600">
                                    <p className='flex justify-start items-center gap-1'>
                                        <input type="radio" onClick={onlineDeliveryFun} checked={onlinePayment ? onlinePayment : ''} className='w-4 h-4 cursor-pointer' id='onlinePayment' />
                                        <label htmlFor="onlinePayment" className='cursor-pointer'>Online Payment</label>
                                    </p>
                                    {/* <p className="text-sm font-medium">₹1,14,399</p> */}
                                    <p className='flex justify-start items-center gap-1'>
                                        <input type="radio" onClick={cashOnDeliveryFun} checked={cashOnDelivery ? cashOnDelivery : ''} className='w-4 h-4 cursor-pointer' id='in_stock' />
                                        <label htmlFor="in_stock" className='cursor-pointer'>Cash on delivery</label>
                                    </p>
                                </li>
                            </ul>

                            {
                                cashOnDelivery && (
                                    <ButtonCustome
                                        className="text-md mt-10 font-bold border border-themBgColor hover:bg-white hover:text-themBgColor transition-all duration-500 text-white bg-themBgColor rounded-full px-10 ml-auto p-2"
                                        buttonTitle="Order Placed"
                                        type="text"
                                        onClick={Order_Place}
                                    />
                                )
                            }
                            {
                                onlinePayment && (<ButtonCustome
                                    className="text-md mt-10 font-bold border border-themBgColor hover:bg-white hover:text-themBgColor transition-all duration-500 text-white bg-themBgColor rounded-full px-10 ml-auto p-2"
                                    buttonTitle="Proceed to Pay"
                                    type="text"
                                    // onClick={proceed_to_pay}
                                    onClick={() => alert("Online Payment mode is coming soon.")}
                                />)
                            }
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
