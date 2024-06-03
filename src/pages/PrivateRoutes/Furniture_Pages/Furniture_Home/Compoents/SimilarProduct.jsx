import React, { useEffect, useState } from 'react'
import { TECollapse } from "tw-elements-react";
import "../css/Style.css"
import { image } from '../../../../../constent/image'
import { Link } from 'react-router-dom'
import { FaPlusSquare } from 'react-icons/fa'
import dayjs from 'dayjs';


export const SimilarProduct = ({ ProductDetails, setId }) => {
    const similar_product = ProductDetails
    const [activeElement, setActiveElement] = useState("");

    const handlerChangeID = (productID) => {
        setId(productID)
    } 

    const handleClick = (value) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };

    const generateRating = (ratingNumber) => {
        let ratingArr = []
        for (let index = 0; index < ratingNumber; index++) {
            ratingArr.push(index)
        }
        return ratingArr;
    }

    // console.log('similar_product ====', similar_product)

    return (
        <div>
            {/* =========== Popular view =========== */}
            <div className='recent-view-main mt-5'>
                <div className='recent-veiw'>
                    <h1 className='Recently_viewed font-poppins'>Similar Product</h1>
                    {/* <h1 className='see_all font-poppins'>See all</h1> */}
                </div>
                <div className='popular_product mb-4'>
                    {
                        similar_product?.similarProducts?.map((product, index) => (
                            <Link className='card_product' to={`/products/products-details?productId=${product?._id}`} onClick={()=>handlerChangeID(product?._id)} key={index}>
                                <div className='product_image'>
                                    <img src={product?.images[0] ? product?.images[0] : image?.blog_01} alt="Product_01" />
                                    <div className='plus_icon'>
                                        <FaPlusSquare />
                                    </div>
                                </div>
                                <div className='content_popular_product'>
                                    <div className='rating_icon mt-2'>
                                        {generateRating(similar_product?.avgRating)?.map((_, i) => (
                                            <>
                                                <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 27 25" fill="none">
                                                    <path d="M11.7394 0.966971C12.1594 -0.322324 13.9835 -0.322324 14.402 0.966971L16.5285 7.51003C16.62 7.79069 16.7979 8.03524 17.0367 8.20872C17.2756 8.3822 17.5631 8.47574 17.8583 8.47595H24.7388C26.0953 8.47595 26.658 10.2118 25.5619 11.0097L19.996 15.0526C19.7569 15.2264 19.5789 15.4715 19.4877 15.7526C19.3964 16.0337 19.3964 16.3366 19.4878 16.6177L21.6128 23.1607C22.0328 24.4514 20.5559 25.5238 19.4598 24.7258L13.8939 20.6829C13.6546 20.509 13.3665 20.4154 13.0707 20.4154C12.775 20.4154 12.4868 20.509 12.2476 20.6829L6.68166 24.7258C5.58555 25.5238 4.10868 24.45 4.52864 23.1607L6.65367 16.6177C6.74505 16.3366 6.7451 16.0337 6.65382 15.7526C6.56253 15.4715 6.3846 15.2264 6.14551 15.0526L0.579566 11.0097C-0.517944 10.2118 0.0476094 8.47595 1.4027 8.47595H8.28173C8.57718 8.47603 8.86507 8.38263 9.1042 8.20913C9.34333 8.03563 9.52144 7.79092 9.61302 7.51003L11.7394 0.966971Z" fill="#FFB800" />
                                                </svg>
                                            </>
                                        ))}
                                        <p className='rating_num font-poppins'>{similar_product?.avgRating}.5</p>
                                    </div>
                                    <div className='product_title my-2'>
                                        <h2 className='font-poppins'>{product?.name ? product?.name : '---'}</h2>
                                    </div>
                                    <div className='price_amount'>
                                        <p className='font-poppins'>$ {product?.price ? product?.price : '---'}</p>
                                        <p className='font-poppins'>$ {product?.totalPrice ? product?.totalPrice : '---'}</p>
                                    </div>
                                    <div>
                                        <p className='font-poppins text-sm mt-1 text-green800'>{product?.isPercent === true ? product?.discount + '% Off' : product?.discount + ' $ Off'}</p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className='flex max-sm:flex-wrap justify-start gap-10 items-start'>
                <div className='max-sm:w-full w-1/2 product_details_content'>
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
                                    Brand Name
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
                                    <p className='text-sm'>{similar_product?.brand}</p>
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
                                Seat Capacity
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
                                {similar_product?.seatCapacity}
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
                                {similar_product?.category} Type
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
                                <p className='text-sm'>{similar_product?.furnitureType}</p>
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
                                Description
                                <span
                                    className={`${activeElement === "element4"
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
                                <p className='text-sm'>{similar_product?.description ? similar_product?.description : 'no data'}</p>
                            </div>
                        </TECollapse>
                    </div>
                </div>
                <div className='max-sm:w-full w-1/2'>
                    <div>
                        {/* 01 */}
                        <div id="accordionExample">
                            <div className="rounded-t-lg border-b border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                                <h2 className="mb-0" id="headingOne">
                                    <button
                                        className={`${activeElement === "element_r_1" &&
                                            `text-black [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                            } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                        type="button"
                                        onClick={() => handleClick("element_r_1")}
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Care Instruction
                                        <span
                                            className={`${activeElement === "element_r_1"
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
                                    show={activeElement === "element_r_1"}
                                    className="!mt-0 !rounded-b-none !shadow-none"
                                >
                                    <div className="px-5 py-4">
                                        <p className='text-sm'>{similar_product?.careInstruction}</p>
                                    </div>
                                </TECollapse>
                            </div>
                        </div>
                        {/* 02 */}
                        <div className="border-b border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                            <h2 className="mb-0" id="headingTwo">
                                <button
                                    className={`${activeElement === "element_r_2"
                                        ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                        : `transition-none rounded-b-[15px]`
                                        } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                    type="button"
                                    onClick={() => handleClick("element_r_2")}
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    Surface Recommended
                                    <span
                                        className={`${activeElement === "element_r_2"
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
                                show={activeElement === "element_r_2"}
                                className="!mt-0 !rounded-b-none !shadow-none"
                            >
                                <div className="px-5 py-4">
                                    <p className='text-sm'>{similar_product?.surfaceRecommended}</p>
                                </div>
                            </TECollapse>
                        </div>
                        {/* 03 */}
                        <div className="rounded-b-lg border-b border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                            <h2 className="accordion-header mb-0" id="headingThree">
                                <button
                                    className={`${activeElement === "element_r_3"
                                        ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                        : `transition-none rounded-b-[15px]`
                                        } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                    type="button"
                                    onClick={() => handleClick("element_r_3")}
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    Specification
                                    <span
                                        className={`${activeElement === "element_r_3"
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
                                show={activeElement === "element_r_3"}
                                className="!mt-0 !shadow-none"
                            >
                                <div className="px-5 py-4">
                                    <p className='text-sm'>{similar_product?.specification}</p>
                                </div>
                            </TECollapse>
                        </div>
                        {/* 04 */}
                        <div className="rounded-b-lg border-b border-t-0 border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
                            <h2 className="accordion-header mb-0" id="headingThree">
                                <button
                                    className={`${activeElement === "element_r_4"
                                        ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                        : `transition-none rounded-b-[15px]`
                                        } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                    type="button"
                                    onClick={() => handleClick("element_r_4")}
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                >
                                    Product Images
                                    <span
                                        className={`${activeElement === "element_r_3"
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
                                show={activeElement === "element_r_4"}
                                className="!mt-0 !shadow-none"
                            >
                                <div className="px-5 gap-3 flex-wrap py-4 flex">
                                    {similar_product?.images?.map((image, i) => (
                                        <div className='w-1/5 max-w-36 h-36'>
                                            <img src={image} className='w-full h-full' alt="logo image" />
                                        </div>
                                    ))}
                                </div>
                            </TECollapse>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex max-sm:flex-wrap justify-start gap-10 items-start'>
                <div className='max-sm:w-full mt-10 w-1/2'>
                    <h2 className="text-heading text-blue mb-3.5 text-2xl font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
                        Top Reviews
                    </h2>
                    {
                        similar_product?.ratings?.map((topReview, i) => (
                            <article key={i} className='mb-10'>
                                <div className="flex items-center mb-4">
                                    <img className="w-10 h-10 me-4 rounded-full" src={topReview?.images[0]} alt />
                                    <div className="font-medium dark:text-white">
                                        <p>{topReview?.name} <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on {dayjs(topReview?.createdAt).format('DD/MM/YYYY H:M A')}</time></p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-1 space-x-1 rtl:space-x-reverse">
                                    {generateRating(topReview?.rating)?.map((_, i) => (
                                        <>
                                            <svg key={i} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 27 25" fill="none">
                                                <path d="M11.7394 0.966971C12.1594 -0.322324 13.9835 -0.322324 14.402 0.966971L16.5285 7.51003C16.62 7.79069 16.7979 8.03524 17.0367 8.20872C17.2756 8.3822 17.5631 8.47574 17.8583 8.47595H24.7388C26.0953 8.47595 26.658 10.2118 25.5619 11.0097L19.996 15.0526C19.7569 15.2264 19.5789 15.4715 19.4877 15.7526C19.3964 16.0337 19.3964 16.3366 19.4878 16.6177L21.6128 23.1607C22.0328 24.4514 20.5559 25.5238 19.4598 24.7258L13.8939 20.6829C13.6546 20.509 13.3665 20.4154 13.0707 20.4154C12.775 20.4154 12.4868 20.509 12.2476 20.6829L6.68166 24.7258C5.58555 25.5238 4.10868 24.45 4.52864 23.1607L6.65367 16.6177C6.74505 16.3366 6.7451 16.0337 6.65382 15.7526C6.56253 15.4715 6.3846 15.2264 6.14551 15.0526L0.579566 11.0097C-0.517944 10.2118 0.0476094 8.47595 1.4027 8.47595H8.28173C8.57718 8.47603 8.86507 8.38263 9.1042 8.20913C9.34333 8.03563 9.52144 7.79092 9.61302 7.51003L11.7394 0.966971Z" fill="#FFB800" />
                                            </svg>
                                        </>
                                    ))}
                                    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">{topReview?.rating}.5</p>
                                    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">out of</p>
                                    <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">5</p>
                                    {/* <span className='text-sm ml-5 inline-block'>{topReview?.rating}.5</span> */}
                                </div>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">{topReview?.description ? topReview?.description : '---'}</p>
                                {/* <a href="#" className="block mb-5 text-sm font-medium text-blue hover:underline dark:text-blue-500">Read more</a> */}
                            </article>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

