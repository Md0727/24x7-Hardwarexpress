import React, { useEffect, useState } from 'react'
import { MdError } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';
import { Screen_Loader } from '../../../component/Screen_Loader/Screen_Loader';
import { APIRequest, ApiUrl } from '../../../utils/api';

export const Payment_Failed = () => {
    const [IsLoading, setIsLoading] = useState(false)
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');

    const Payment_Failed_Fun = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.transaction_cancel,
            method: "post",
            body: {
                "token": token
            }

        }
        APIRequest(
            config,
            res => {
                console.log('res =============', res)
                if (!res?.error) {
                    setIsLoading(false)
                }
            },
            err => {
                console.log('err', err)
                if (err?.error) {
                    setIsLoading(false)
                }
            }
        )
    }

    useEffect(() => {
        Payment_Failed_Fun()
    }, [])

    return (
        <div className='flex justify-center items-center h-screen'>
            {
                IsLoading && (
                    <Screen_Loader />
                )
            }
            {
                !IsLoading && (
                    <div className='border rounded-md border-blue py-10 max-w-2xl m-auto w-full'>
                        <div className="flex border-blue flex-col items-center justify-center">
                            <div>
                                <MdError className='w-24 h-24 text-red800' />
                            </div>
                            <h1 className="text-3xl font-bold mb-4 text-red800">Payment Failed</h1>
                            <p className="text-lg mb-2">We're sorry, but your payment could not be processed.</p>
                            <p className="text-lg mb-4">Please check your payment details and try again.</p>
                            <Link className='bg-blue text-white px-3 py-1 mt-2 rounded-sm text-sm' to={'https://www.cmemove.com/'}>try again.</Link>
                            {/* You can add more content or design elements as needed */}
                        </div>
                    </div>
                )
            }
        </div>
    )
}
