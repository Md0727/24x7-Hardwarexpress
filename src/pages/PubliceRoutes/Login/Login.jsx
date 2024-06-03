import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { APIRequest, ApiUrl } from '../../../utils/api';
import { toast } from 'react-toastify';

export function Login() {
    const naviagate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function resetFun() {
        setEmail('')
        setPassword('')
    }

    const loginAuth = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.login,
            method: "post",
            body: {
                "email": email,
                "password": password
            }
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setIsLoading(false)
                    resetFun()
                    toast.success(res?.message)
                    localStorage.setItem('data', JSON.stringify(res?.token))
                    naviagate('/')
                    localStorage.removeItem('validated')
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
        if (email === '') {
            alert('email field is required')
        } else if (password === '') {
            alert('Password field is required')
        } else {
            loginAuth()
        }

    }

    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-12">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in</h2>
                        <p className="mt-2 text-sm text-gray-600">
                            Don&apos;t have an account?{' '}
                            <Link
                                to={'/register'}
                                title=""
                                className="font-semibold text-black transition-all duration-200 hover:underline"
                            >
                                Create a free account
                            </Link>
                        </p>
                        <form onSubmit={submitHandler} method="POST" className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="" className="text-base font-medium text-gray-900">
                                        {' '}
                                        Email address{' '}
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="email"
                                            placeholder="Enter Email Adress."
                                            onChange={(e) => setEmail(e.target.value)}
                                            value={email}
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="" className="text-base font-medium text-gray-900">
                                            {' '}
                                            Password{' '}
                                        </label>
                                        <Link
                                            to={'/forgote-password'}
                                            title=""
                                            className="text-sm font-semibold text-black hover:underline"
                                        >
                                            {' '}
                                            Forgot password?{' '}
                                        </Link>
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
                                        style={{backgroundColor: '#a40001'}}
                                        className="inline-flex w-full items-center justify-center rounded-md bg-themBgColor px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-themBgColor"
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
                                            ) : ('Log In')
                                        }

                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="h-screen w-full login_user">
                    <img
                        className="mx-auto h-full w-full rounded-md object-cover"
                        src="/assets/images/banner/login.png"
                        alt=""
                    />
                </div>
            </div>
        </section>
    )
}
