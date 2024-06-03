import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { APIRequest, ApiUrl } from '../../../utils/api';
import { toast } from 'react-toastify';

export const AccountVerification = () => {
    const naviagate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [mobileNo, setMobileNo] = useState('');
    const [otp, setOtp] = useState('7980');

    function resetFun() {
        setMobileNo('')
        setOtp('')
    }
    const accountVerificationAuth = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.accountVerification,
            method: "post",
            body: {
                "contact": mobileNo,
                "OTP": '7980'
            }
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setIsLoading(false)
                    resetFun()
                    toast.success(res?.message)
                    naviagate('/login')
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
    const submitHandler = (e) => {
        e.preventDefault()
        if (mobileNo === '') {
            alert('mobileNo field is required')
        } else if (otp === '') {
            alert('Otp field is required')
        } else {
            accountVerificationAuth();
        }

    }
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Account Verification</h2>
                        <form onSubmit={submitHandler} method="POST" className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        mobileNo
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="mobileNo"
                                            onChange={(e) => setMobileNo(e.target.value)}
                                            value={mobileNo}
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            OTP
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="number"
                                            placeholder="OTP"
                                            onChange={(e) => setOtp(e.target.value)}
                                            value={otp}
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        style={{backgroundColor: '#a40001'}}
                                        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                                    >
                                        {
                                            isLoading ? (
                                                <>
                                                    <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Processing...
                                                </>
                                            ) : ('Verify')
                                        }
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="h-screen w-full">
                    <img
                        className="mx-auto h-full w-full rounded-md object-cover"
                        src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}
