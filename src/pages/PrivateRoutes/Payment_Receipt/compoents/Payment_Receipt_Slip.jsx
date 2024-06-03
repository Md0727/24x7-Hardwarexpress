import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { BackToButton } from '../../../../component/BackToButton/BackToButton';
import "./Css/Style.css"
import { image } from '../../../../constent/image';
import { ButtonCustome } from '../../../../component/Button/ButtonCustome';
import { FaDownload } from 'react-icons/fa6';
import dayjs from 'dayjs';
import { Screen_Loader } from '../../../../component/Screen_Loader/Screen_Loader';
import { APIRequest, ApiUrl } from '../../../../utils/api';

export const Payment_Receipt_Slip = () => {
    const location = useLocation();
    let result = location?.state;
    const [IsLoading, setIsLoading] = useState(false)

    console.log('result', result?.transactionId)

    const Go_To_Payment_Receipt = () => {
        setIsLoading(true)
        let config = {
            url: `${ApiUrl?.generate_pdf}/${result?.transactionId}`,
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
        <div className='px-3 sm:px-0'>
            {/* spacing div only */}
            <div className='mt-36'></div>
            {
                IsLoading && (
                    <Screen_Loader />
                )
            }
            <div className='max-w-4xl max-sm:max-w-full m-auto md:px-3'>
                <BackToButton
                    pageUrl={'/my-quotes'}
                    pageTitle={"My Quotes"}
                />
                <div className='payment_recept_main'>
                    <div className='logo_payment'>
                        <img src="/assets/images/Logo/Payment_logo.png" alt="Payment_logo" />
                    </div>
                    <div className='px-5'>
                        <div className='lsit_of_payment'>
                            <ul>
                                <li>
                                    <div>Bill Date</div>
                                    <div>Order Id</div>
                                    <div>Bill Address</div>
                                </li>
                                <li>
                                    <div> {dayjs(result?.createdAt).format('DD/MM/YYYY')} </div>
                                    <div> {result?.movingServiceId} </div>
                                    <div> {result?.userDetails?.fullAddress} </div>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <div>Customer Name</div>
                                    <div>Customer No.</div>
                                </li>
                                <li>
                                    <div> {result?.userDetails?.name} </div>
                                    <div> {result?.userDetails?.contact} </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h1 className='mt-3'>Vendor Details</h1>
                            <div className='lsit_of_payment last-box'>
                                <ul>
                                    <li>
                                        <div>Vendor Address</div>
                                        <div>Vendor Name.</div>
                                    </li>
                                    <li>
                                        <div> <div> {result?.vendorInfo?.address?.locality} {result?.vendorInfo?.address?.street1} {result?.vendorInfo?.address?.street2} {result?.vendorInfo?.address?.postalCode} {result?.vendorInfo?.address?.landMark} </div> </div>
                                        <div> {result?.vendorInfo?.name} </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h1 className='mt-3'>Description</h1>
                            <div className='lsit_of_payment'>
                                <ul>
                                    <li>
                                        <div>{result?.serviceType}</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h1 className='mt-3'>Quoted Amount</h1>
                            <div className='lsit_of_payment last-box'>
                                <ul>
                                    <li>
                                        <div>SubTotal Amount</div>
                                        <div>Discount</div>
                                    </li>
                                    <li>
                                        <div> $ {result?.totalAmount} </div>
                                        <div> $ {result?.discount} </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='lsit_of_payment last-box'>
                                <ul>
                                    <li>
                                        <div>Total Amount</div>
                                        <div>25% Payment Received</div>
                                    </li>
                                    <li>
                                        <div> $ {result?.payableAmount} </div>
                                        <div> $ {result?.advancePayment} </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className='lsit_of_payment last-box border-0'>
                                <ul className='dfd'>
                                    <li>
                                        <div>Payable Amount</div>
                                    </li>
                                    <li>
                                        <div> $ {result?.payableAmount - result?.advancePayment} </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <ButtonCustome
                        className="text-md mt-5 max-sm:mb-3 border mr-12 font-bold hover:bg-white hover:text-blue transition-all duration-500 text-white bg-blue rounded-full px-10 m-auto p-2"
                        buttonTitle={<p className='flex items-center justify-center gap-2'>Download Receipt <FaDownload /></p>}
                        type="text"
                        onClick={Go_To_Payment_Receipt}
                    />
                </div>
            </div>
            {/* <YourComponent /> */}
            <div className='mt-12'></div>
        </div>
    )
}
