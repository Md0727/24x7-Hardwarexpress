import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import LayoutContainer from "../../component/LayoutContainer/LayoutContainer";

export default function Accordion() {
    const [activeElement, setActiveElement] = useState("");

    const handleClick = (value) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };
    return (
        <LayoutContainer>
            <div className='mt-20 w-full block'></div>
            <div className="max-w-[800px] m-auto">
                <h1 className="text-3xl text-center w-full text-black font-poppins font-bold mb-3 not-italic">Frequently Asked Questions</h1>
                <p className="text-lg text-center w-full text-black font-poppins font-bold mb-3">In case you have more questions, feel free to reach out to us.</p>
                {/* 01 */}
                <div id="accordionExample">
                    <div className="rounded-t-lg border-b border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                        <h2 className="mb-0" id="headingOne">
                            <button
                                className={`${activeElement === "element1" &&
                                    `text-black [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                    } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                type="button"
                                onClick={() => handleClick("element1")}
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                What is Cmemove?
                                <span
                                    className={`${activeElement === "element1"
                                        ? `rotate-[-180deg] -mr-1`
                                        : `rotate-0 fill-[#212529]  dark:fill-white`
                                        } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                        />
                                    </svg>
                                </span>
                            </button>
                        </h2>
                        <TECollapse
                            show={activeElement === "element1"}
                            className="!mt-0 !rounded-b-none !shadow-none"
                        >
                            <div className="px-5 py-4">
                                CME Move is a tech-enabled logistics company offering a variety of intracity and interstate delivery services. Just download and register yourself on the app, choose the service that best fits yours logistic needs and make your booking! With Helper, you will get a verified driver and vehicle right at your doorstep.
                            </div>
                        </TECollapse>
                    </div>
                </div>
                {/* 02 */}
                <div className="border-b border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="mb-0" id="headingTwo">
                        <button
                            className={`${activeElement === "element2"
                                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element2")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            How do i use Cmemove app?
                            <span
                                className={`${activeElement === "element2"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529] dark:fill-white`
                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === "element2"}
                        className="!mt-0 !rounded-b-none !shadow-none"
                    >
                        <div className="px-5 py-4">
                            <p>Follow these simple steps to start leveraging hassle-free logistics from CME Move:</p>
                            <ol class="list-decimal pl-11">
                                <li>Download the CME Move app</li>
                                <li>Choose the service you want to use </li>
                                <li>Select your pick up and delivery locations </li>
                                <li>Add any extra stops, if applicable </li>
                                <li>Moving operators will match you with appropriate truck required to do the job</li>
                                <li>Select the type of goods you’re sending </li>
                                <li>Choose your payment method </li>
                                <li>Click on “Book Now” and your vehicle is on its way!</li>
                            </ol>
                        </div>
                    </TECollapse>
                </div>
                {/* 03 */}
                <div className="rounded-b-lg border-b border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="accordion-header mb-0" id="headingThree">
                        <button
                            className={`${activeElement === "element3"
                                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element3")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            How do I book a full-size truck or van for interstate moving services. Online from the Cmemove App?
                            <span
                                className={`${activeElement === "element3"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529] dark:fill-white`
                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === "element3"}
                        className="!mt-0 !shadow-none"
                    >
                        <div className="px-5 py-4">
                            <p>Get reliable and affordable logistics services from the CME Move app by following these steps</p>
                            <ol class="list-decimal pl-11">
                                <li>Sign in to the CME Move app</li>
                                <li>Choose the service you want - House moving, office moving, moving to/from storage. Frieght. loading/unloading. Lot more.</li>
                                <li>Set your pick up and drop off location</li>
                                <li>Our moving operators will match your job to the required truck size that suit your needs.</li>
                                <li>Enter a few additional details, apply coupons to get exciting discounts, and confirm your booking.</li>
                                <li>Sit back and relax - our verified driver partners will do the rest.</li>
                            </ol>
                        </div>
                    </TECollapse>
                </div>

                {/* 04 */}
                <div className="rounded-b-lg border-b border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="accordion-header mb-0" id="headingThree">
                        <button
                            className={`${activeElement === "element4"
                                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element4")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Does Cmemove provide interstate or interstate service?
                            <span
                                className={`${activeElement === "element3"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529] dark:fill-white`
                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === "element4"}
                        className="!mt-0 !shadow-none"
                    >
                        <div className="px-5 py-4">
                            Cmemove provides intracity & interstate services. For instant goods and furniture delivery services within the city. You can rent moving containers & trucks. we also have interstate, outstation services within a 300km radius of the city centre. You can also send furniture and goods across the globe with cmemove interstate courier services at economical rates. Cmemove also provide storage interstate and interstate house movers and shipping services.
                        </div>
                    </TECollapse>
                </div>

                {/* 05 */}
                <div className="rounded-b-lg border-b border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="accordion-header mb-0" id="headingThree">
                        <button
                            className={`${activeElement === "element5"
                                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element5")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Does Cmemove provide labour (loading/unloading) service?
                            <span
                                className={`${activeElement === "element3"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529] dark:fill-white`
                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === "element5"}
                        className="!mt-0 !shadow-none"
                    >
                        <div className="px-5 py-4">
                            "Yes, CME Move has a service called the ""Driver-Helper"" category, where the driver-partner will help in loading and unloading the goods. We also have another category called “Driver-Helper + 1 Labour” category. Here, in addition to the driver-partner, a labour will accompany the driver-partner and will help with loading and unloading.
                        </div>
                    </TECollapse>
                </div>

                {/* 06 */}
                <div className="rounded-b-lg border-0 border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                    <h2 className="accordion-header mb-0" id="headingThree">
                        <button
                            className={`${activeElement === "element6"
                                ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element6")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            What are the charges for a Cmemove truck delivery service?
                            <span
                                className={`${activeElement === "element6"
                                    ? `rotate-[-180deg] -mr-1`
                                    : `rotate-0 fill-[#212529] dark:fill-white`
                                    } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </span>
                        </button>
                    </h2>
                    <TECollapse
                        show={activeElement === "element6"}
                        className="!mt-0 !shadow-none"
                    >
                        <div className="px-5 py-4">
                            The charges for hiring a CME Move Operator is based on the number of miles or kilometers travelled and the truck load size some operator price will differs from locality to locality. You can also check the estimate tab on the CME Move website to get an idea of your final trip amount. Alternatively, the final trip amount can be determined when making the booking on the app.
                            because you will make the final decision on the price.
                        </div>
                    </TECollapse>
                </div>

            </div>
            <div className='mt-24 w-full block'></div>
        </LayoutContainer>
    );
}