import React, { useState } from 'react'
import { APIRequest, ApiUrl } from '../../../utils/api';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const navigation = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [mobileNo, setMobileNo] = useState('');
    const [password, setPassword] = useState('');
    const [fullname, setFullname] = useState('');

    function resetFun() {
        setMobileNo('')
        setPassword('')
        setFullname('')
    }
    const registrationAuth = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.signup,
            method: "post",
            body: {
                "contact": mobileNo,
                "name": fullname,
                "password": password
            }
        }
        APIRequest(
            config,
            res => {
                console.log('res', res)
                if (!res?.error) {
                    setIsLoading(false)
                    resetFun()
                    toast.success(res?.message)
                    navigation("/account-verification")
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
        if (fullname === '') {
            toast.error('Full Name field is required')
        } else if (mobileNo === '') {
            toast.error('mobileNo field is required')
        } else if (password === '') {
            toast.error('Password field is required')
        } else {
            registrationAuth()
        }

    }
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-14">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign Up</h2>
                        <form onSubmit={submitHandler} method="POST" className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Full Name"
                                            onChange={(e) => setFullname(e.target.value)}
                                            value={fullname}
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Email address"
                                            onChange={(e) => setMobileNo(e.target.value)}
                                            value={mobileNo}
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        style={{ backgroundColor: '#a40001' }}
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
                                            ) : ('Register')
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
                        src="/assets/images/banner/sign_up.png"
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}
