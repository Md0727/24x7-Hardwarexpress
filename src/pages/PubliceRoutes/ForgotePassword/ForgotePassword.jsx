import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { forgotePassword } from '../../../features/register/registerSlice'
import { APIRequest, ApiUrl } from '../../../utils/api'
import { toast } from 'react-toastify'

const ForgotePassword = () => {
    const dispatch = useDispatch()
    const naviagate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [passwordNew, setNewPassword] = useState('');

    function resetFun() {
        setOtp('')
        setNewPassword('')
    }



    const forgatePasswordFun = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.forgotPassword,
            method: "post",
            body: {
                "data": email,
            }
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setIsLoading(false)
                    setIsEmail(true)
                    toast.success(res?.message)
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

    const resetPasswordFun = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.resetPassword,
            method: "post",
            body: {
                "data": email,
                "OTP": otp,
                "password": passwordNew
            }
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setIsLoading(false)
                    resetFun()
                    setIsEmail(false)
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

    const sendEmailHanler = () => {
        if (email === '') {
            alert('Email field is required')
        } else {
            forgatePasswordFun()
            // alert('click')
        }
    }

    const resetPasswordHandler = () => {
        if (otp === '') {
            alert('OTP field is required')
        } else if (passwordNew === '') {
            alert('New Password field is required')
        } else {
            resetPasswordFun()
        }
    }

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-16">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">{isEmail ? <p>You can change your password.</p> : 'Verify Email Address'}</h2>
                        <form className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                            placeholder="Email"
                                            disabled={isEmail ? 'disabled' : ''}
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                        ></input>
                                    </div>
                                </div>
                                {
                                    isEmail && (
                                        <>
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                                        Enter valid OTP
                                                    </label>
                                                </div>
                                                <div className="mt-2">
                                                    <input
                                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                        type="password"
                                                        placeholder="OTP"
                                                        onChange={(e) => setOtp(e.target.value)}
                                                        value={otp}
                                                    ></input>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                                        New Password
                                                    </label>
                                                </div>
                                                <div className="mt-2">
                                                    <input
                                                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                        type="password"
                                                        placeholder="New Password"
                                                        onChange={(e) => setNewPassword(e.target.value)}
                                                        value={passwordNew}
                                                    ></input>
                                                </div>
                                            </div>
                                        </>
                                    )
                                }
                                <div>
                                    {
                                        !isEmail ? (
                                            <button
                                                type="button"
                                                onClick={sendEmailHanler}
                                                style={{backgroundColor: '#a40001'}}
                                                className="inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
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
                                                    ) : ('Send Email')
                                                } 
                                            </button>
                                        ) : (
                                            <button
                                                type="button"
                                                onClick={resetPasswordHandler}
                                                style={{backgroundColor: '#a40001'}}
                                                className="inline-flex w-full items-center justify-center rounded-md px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
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
                                                    ) : ('Contiune')
                                                }
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                <div className="h-screen w-full">
                    <img
                        className="mx-auto h-full w-full rounded-md object-cover"
                        src="/assets/images/banner/Forgot_Password.png"
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}

export default ForgotePassword