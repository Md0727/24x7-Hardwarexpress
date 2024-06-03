import React, { useEffect, useState } from 'react'
import { LayoutContainerMain } from '../../../../../component/LayoutContainer/LayoutContainerMain'
import LayoutContainer from '../../../../../component/LayoutContainer/LayoutContainer'
import { useLocation, useNavigate } from 'react-router-dom'
import { BackToButton } from '../../../../../component/BackToButton/BackToButton'
import { ButtonCustome } from '../../../../../component/Button/ButtonCustome'
import { FaDownload } from 'react-icons/fa6'
import { APIRequest, ApiUrl } from '../../../../../utils/api'
import { Screen_Loader } from '../../../../../component/Screen_Loader/Screen_Loader'
import Add_Product_Review from '../../../../../component/Modals/Add_Product_Review/Add_Product_Review'

export const My_Order_Details = () => {
    const navigation = useNavigate()
    const location = useLocation();
    const my_orders = location?.state;
    const [reloadPage, setReloadPage] = useState(1)
    const [IsLoading, setIsLoading] = useState(false)

    const Go_To_Payment_Receipt = () => {
        setIsLoading(true)
        let config = {
            url: `${ApiUrl?.generate_pdf}/${my_orders?.transactionId}`,
            method: "get",
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    console.log(res?.data);
                    setIsLoading(false)
                    window.open(res?.data, "_blank");
                    // window.location.href = res?.data;
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

    return (
        <LayoutContainerMain headerDark={true}>
            <LayoutContainer className="bg-blue">
                <div className='px-3 sm:px-0'>
                    {
                        IsLoading && (
                            <Screen_Loader />
                        )
                    }
                    {/* spacing div only */}
                    <div className='mt-36'></div>
                    <div className='max-w-4xl max-sm:max-w-full m-auto md:px-3'>
                        <div className='flex justify-between mb-3 items-center'>
                            <BackToButton
                                pageUrl={'orders'}
                                pageTitle={"My Orders List"}
                            />
                            <div>
                                <ButtonCustome
                                    className="text-sm w-full border border-themBgColor mt-2 font-bold hover:bg-white hover:text-themBgColor transition-all duration-500 text-white bg-themBgColor rounded-full px-10 m-auto p-2"
                                    buttonTitle={<p className='flex items-center justify-center gap-2'>Download Receipt <FaDownload /></p>}
                                    type="text"
                                    onClick={Go_To_Payment_Receipt}
                                />
                            </div>
                        </div>
                        {
                            my_orders?.productDetails?.map((order, index) => (
                                <div className='sm:flex mb-5 gap-4 sm:items-start sm:justify-between p-10 rounded-2xl shadow-md bg-sky200'>
                                    <div className='sm:max-w-24 w-full'>
                                        <div className='flex mb-3 sm:mb-0 items-center justify-start gap-2'>
                                            <div className='w-full max-w-28'>
                                                <img src={order?.details?.images[0]} className='w-full h-full rounded-md' alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='sm:w-full text-left'>
                                        <p className='w-full text-left mb-0 sm:text-md font-pop font-poppins font-bold not-italic text-black'>{order?.details?.name ? order?.details?.name : '---'}</p>
                                        <p className='w-full text-left sm:text-md font-pop font-poppins font-n font-normal not-italic text-black'>Description : {order?.details?.description ? order?.details?.description : '---'}</p>
                                        <p className='w-full text-left mt-2 sm:text-md font-pop font-poppins font-bold not-italic text-black'>Total Price : $ {order?.product?.total ? order?.product?.total : '---'}</p>
                                    </div>
                                    <div className='sm:max-w-40 w-full text-right'>
                                        <Add_Product_Review
                                            className="text-sm font-bold border-themBgColor hover:bg-white hover:text-themBgColor transition-all duration-500 text-white bg-themBgColor rounded-full px-10 m-auto p-2"
                                            title="Add Review"
                                            description={'Create Review'}
                                            type="text"
                                            product_Details={order}
                                            setReloadPage={setReloadPage}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    {/* <YourComponent /> */}
                    <div className='mt-12'></div>
                </div>
            </LayoutContainer>
        </LayoutContainerMain>
    )
}
