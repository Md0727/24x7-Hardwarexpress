import React, { useState } from "react";
import "./compoents/Css/Style.css"
import { LayoutContainerMain } from "../../../component/LayoutContainer/LayoutContainerMain";
import HeaderDark from "../../../component/Header/HeaderDark";
import { toast } from "react-toastify";
import { APIRequest, ApiUrl } from "../../../utils/api";
import Jumbotron from "../../../component/Jumbotron/Jumbotron";
import { ButtonCustome } from "../../../component/Button/ButtonCustome";

export const ContactUs = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const ContactUsFun = (e) => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.query_Add,
            method: "post",
            body: {
                "name": name,
                "email": email,
                "description": message
            }
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setIsLoading(false)
                    toast.success(res?.message)
                    setName('')
                    setEmail('')
                    setMessage('')
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
        <div >
            <>
                <LayoutContainerMain headerDark={"headerDark"}>
                    <Jumbotron
                        title="Contact Us"
                        logTitle="The App Store is completely free to use. Apps can be free or paid."
                    />
                    <section className="bg-blue-50 dark:bg-slate-800" id="contact">
                        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                            <div className="mb-4">
                                <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                                    <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
                                        Contact
                                    </p>
                                    <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
                                        Get in Touch
                                    </h2>
                                    <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">In hac habitasse platea
                                        dictumst
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-stretch justify-center">
                                <div className="grid md:grid-cols-2">
                                    <div className="h-full pr-6">
                                        <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                            Class aptent taciti sociosqu ad
                                            litora torquent per conubia nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut scelerisque
                                            sagittis ante, ac tincidunt sem venenatis ut.
                                        </p>
                                        <ul className="mb-6 md:mb-0">
                                            <li className="flex">
                                                <div className="flex h-10 w-10 items-center justify-center rounded bg-themBgColor text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                                                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                                        </path>
                                                    </svg>
                                                </div>
                                                <div className="ml-4 mb-4">
                                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
                                                    <p className="text-gray-600 dark:text-slate-400">New York, EEUU</p>
                                                </div>
                                            </li>
                                            <li className="flex">
                                                <div className="flex h-10 w-10 items-center justify-center rounded bg-themBgColor text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                                        </path>
                                                        <path d="M15 7a2 2 0 0 1 2 2" />
                                                        <path d="M15 3a6 6 0 0 1 6 6" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4 mb-4">
                                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                                                    </h3>
                                                    <p className="text-gray-600 dark:text-slate-400">Mobile: +1 (123) 456-7890</p>
                                                    <p className="text-gray-600 dark:text-slate-400">Mail: tailnext@gmail.com</p>
                                                </div>
                                            </li>
                                            <li className="flex">
                                                <div className="flex h-10 w-10 items-center justify-center rounded bg-themBgColor text-gray-50">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                                                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                                                        <path d="M12 7v5l3 3" />
                                                    </svg>
                                                </div>
                                                <div className="ml-4 mb-4">
                                                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Working
                                                        hours</h3>
                                                    <p className="text-gray-600 dark:text-slate-400">Monday - Friday: 08:00 - 17:00</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                                        <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
                                        <form id="contactForm">
                                            <div className="mb-6">
                                                <div className="mx-0 mb-1 sm:mb-4">
                                                    <div className="mx-0 mb-3 sm:mb-4">
                                                        <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider" />
                                                        <input type="text" id="name" autoComplete="given-name" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                                            value={name} onChange={(e) => setName(e.target.value)}
                                                            name="name"
                                                        />
                                                    </div>
                                                    <div className="mx-0 mb-3 sm:mb-4">
                                                        <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider" />
                                                        <input type="email" autoComplete="email" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                                            value={email} id="email" onChange={(e) => setEmail(e.target.value)} name="email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="mx-0 mb-3 sm:mb-4">
                                                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider" />
                                                    <textarea
                                                        id="textarea"
                                                        type="text"
                                                        value={message} onChange={(e) => setMessage(e.target.value)} name="message"
                                                        defaultValue={""}
                                                        cols={'60'}
                                                        rows={'20'}
                                                        placeholder="Write your message..." className="mb-2 resize-none h-28 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <ButtonCustome
                                                    className="text-md w-full home_btn border border-themBgColor max-sm:text-sm mr-12 max-sm:mb-3 font-bold hover:bg-white hover:text-themBgColor transition-all duration-500 text-white bg-themBgColor rounded-md px-10 m-auto p-2"
                                                    buttonTitle="Send Message"
                                                    type="text"
                                                    onClick={ContactUsFun}
                                                />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                </LayoutContainerMain>
            </>
        </div>
    )
}