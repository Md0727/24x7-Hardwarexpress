import React, { useEffect, useState } from 'react'
import { ButtonCustome } from '../../../../component/Button/ButtonCustome'
import { BackToButton } from '../../../../component/BackToButton/BackToButton'
import { APIRequest, ApiUrl } from '../../../../utils/api'
import dayjs from 'dayjs'
import { My_Order_Modal } from '../../../../component/Modals/My_Order_Modal/My_Order_Modal'
import { useNavigate } from 'react-router-dom'
import { Screen_Loader } from '../../../../component/Screen_Loader/Screen_Loader'

export const OrderList = () => {
    const naviagate = useNavigate()
    const [IsLoading, setIsLoading] = useState(false)
    const [all_User_Data, setAll_User_Data] = useState([])

    const get_All_For_User_Data = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.get_All_For_User,
            method: "get",
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    console.log(res?.data);
                    setAll_User_Data(res?.data)
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
        get_All_For_User_Data()
    }, [])

    const My_Order_detailsFun = (order_details) => {
        naviagate('/my-order-details', { state: order_details, transactionId: order_details?.transactionId })
    }
    console.log('all_User_Data', all_User_Data)

    return (
        <div className='px-3 sm:px-0'>
            {/* spacing div only */}
            <div className='mt-36'></div>
            <div className='max-w-4xl max-sm:max-w-full m-auto md:px-3'>
                <BackToButton
                    pageUrl={''}
                    pageTitle={"My Orders"}
                />

                {
                    IsLoading && (
                        <Screen_Loader />
                    )
                }

                {
                    !IsLoading && (
                        all_User_Data?.map((order, index) => (
                            <div key={index} className='sm:flex mb-5 sm:items-center sm:justify-between p-10 rounded-2xl shadow-md bg-sky200'>
                                <div className='sm:w-4/12'>
                                    <div className='flex mb-3 sm:mb-0 items-center justify-start gap-2'>
                                        {lineIcon}
                                        <div>
                                            <p className='sm:text-sm font-poppins not-italic text-black mb-2'>Order is in {order?.status ? order?.status : '---'} State</p>
                                            <p className='sm:text-sm font-poppins font-bold not-italic text-black mb-0'>Total Products :- {order?.productDetails?.length ? order?.productDetails?.length : '---'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='sm:w-3/12 text-center'>
                                    <p className='sm:text-md mb-3 sm:mb-0 font-pop font-poppins font-bold not-italic text-black'>{dayjs(order?.createdAt).format('DD/MM/YYYY H:MM A')}</p>
                                </div>
                                <div className='sm:w-3/12 text-center'>
                                    <p className='w-full text-center mb-2 sm:text-md font-pop font-poppins font-bold not-italic text-black'>$ {order?.total ? order?.total : '---'}</p>
                                    <ButtonCustome
                                        className="text-md font-bold hover:bg-white hover:text-themBgColor transition-all duration-500 text-white bg-themBgColor rounded-full px-10 m-auto p-2"
                                        buttonTitle="View More"
                                        type="text"
                                        onClick={() => My_Order_detailsFun(order)}
                                    />
                                </div>
                            </div>
                        ))
                    )
                }



            </div>
            {/* <YourComponent /> */}
            <div className='mt-12'></div>
        </div>
    )
}


let lineIcon = <svg xmlns="http://www.w3.org/2000/svg" width="10" height="40" viewBox="0 0 10 40" fill="none">
    <circle cx="5" cy="5" r="5" fill="#FF0000" />
    {/* <circle cx="5" cy="35" r="5" fill="#24FF00" />
    <line x1="5" y1="10.5" x2="5" y2="30.5" stroke="black" stroke-width="2" stroke-dasharray="2 2" /> */}
</svg>