import React, { useState } from "react";
import "./compoents/Css/Style.css"
import { LayoutContainerMain } from "../../../component/LayoutContainer/LayoutContainerMain";
import HeaderDark from "../../../component/Header/HeaderDark";
import { toast } from "react-toastify";
import { APIRequest, ApiUrl } from "../../../utils/api";
import Jumbotron from "../../../component/Jumbotron/Jumbotron";

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
                    <div className="contect-us-form" id="form">

                        <div id="waterform" method="post">
                            <div className="formgroup" id="name-form">
                                <label for="name">Full Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} id="name" name="name" placeholder="Enter Your Full Name" />
                            </div>

                            <div className="formgroup" id="email-form">
                                <label for="email">Email Address</label>
                                <input type="email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter Your Email Address" />
                            </div>

                            <div className="formgroup" id="message-form">
                                <label for="message">Your message</label>
                                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} name="message" placeholder="Type Your Message here"></textarea>
                            </div>

                            <button
                                type="text"
                                style={{ backgroundColor: '#252460' }}
                                onClick={ContactUsFun}
                                className="inline-flex w-full mt-3 mb-5 items-center justify-center rounded-md bg-blue px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue"
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
                                    ) : ('Submit')
                                }

                            </button>
                        </div>
                    </div>

                    {/* ============ BuyAndSell section part =========== */}
                </LayoutContainerMain>
            </>
        </div>
    )
}