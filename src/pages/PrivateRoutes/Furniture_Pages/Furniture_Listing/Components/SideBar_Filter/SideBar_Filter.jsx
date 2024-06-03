import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TECollapse } from "tw-elements-react";
import { setFilter } from '../../../../../../app/slice/ProductSlice';
import { IoMdCloseCircleOutline } from "react-icons/io";

export const SideBar_Filter = ({ setSideFilter, sideFilter }) => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.product.filter)
    const [activeElement, setActiveElement] = useState("");

    console.log('filter', filter)

    const handleClick = (value) => {
        if (value === activeElement) {
            setActiveElement("");
        } else {
            setActiveElement(value);
        }
    };

    const SetPriceRange = (value) => {
        const ValueInt = parseInt(value)
        if (filter?.priceRange?.minPrice == ValueInt) {
            dispatch(
                setFilter(
                    {
                        priceRange: {
                            "minPrice": 0,
                            "maxPrice": 100000
                        }
                    }
                )
            )
        } else {

            dispatch(
                setFilter(
                    {
                        priceRange: {
                            "minPrice": ValueInt,
                            "maxPrice": ValueInt === 600 ? 100000 : ValueInt + 100
                        }
                    }
                )
            )
        }

    }

    return (
        <div>
            <div className="max-w-[800px] m-auto border-0">
                {/* 01 */}
                <div id="accordionExample">
                    <div>
                        <button className='closeBtn' onClick={()=>setSideFilter(!sideFilter)}>
                            <IoMdCloseCircleOutline />
                        </button>
                    </div>
                    <div className="rounded-t-lg  border-b bg-white dark:bg-neutral-800">
                        <h2 className="mb-0" id="headingOne">
                            <button
                                className={`${activeElement === "element1" &&
                                    `text-black [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                    } group relative flex w-full items-center rounded-t-[15px] bg-white px-3 py-2 text-left text-base text-blue transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                                type="button"
                                onClick={() => handleClick("element1")}
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Customer Rating
                                <span
                                    className={`${activeElement === "element1"
                                        ? `rotate-[-180deg] -mr-1`
                                        : `rotate-0 fill-[#212529]  dark:fill-white`
                                        } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300 sidebar_icon`}
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
                            <div>
                                <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                    <input type="checkbox" checked={filter?.ratingRange == 4} value={4} onClick={(e) => dispatch(setFilter({ ratingRange: filter?.ratingRange !== e.target.value ? e.target.value : '' }))} class='w-4 h-4' name="price" id="rating_04" />
                                    <label htmlFor='rating_04'>4 & Above</label>
                                </div>
                                <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                    <input type="checkbox" checked={filter?.ratingRange == 3} value={3} onClick={(e) => dispatch(setFilter({ ratingRange: filter?.ratingRange !== e.target.value ? e.target.value : '' }))} class='w-4 h-4' name="price" id="rating_03" onclick="handleCheckboxClick(this)" />
                                    <label htmlFor='rating_03'>3 & Above</label>
                                </div>
                                <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                    <input type="checkbox" checked={filter?.ratingRange == 2} value={2} onClick={(e) => dispatch(setFilter({ ratingRange: filter?.ratingRange !== e.target.value ? e.target.value : '' }))} class='w-4 h-4' name="price" id="rating_02" onclick="handleCheckboxClick(this)" />
                                    <label htmlFor='rating_02'>2 & Above</label>
                                </div>
                                <div class='p-2 flex items-center justify-start gap-2'>
                                    <input type="checkbox" checked={filter?.ratingRange == 1} value={1} onClick={(e) => dispatch(setFilter({ ratingRange: filter?.ratingRange !== e.target.value ? e.target.value : '' }))} class='w-4 h-4' name="price" id="rating_01" onclick="handleCheckboxClick(this)" />
                                    <label htmlFor='rating_01'>1 & Above</label>
                                </div>
                            </div>
                        </TECollapse>
                    </div>
                </div>
                {/* 02 */}
                <div className="border-b bg-white dark:bg-neutral-800">
                    <h2 className="mb-0" id="headingTwo">
                        <button
                            className={`${activeElement === "element2"
                                ? `text-blue [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-3 py-2 text-left text-base text-blue transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element2")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Price Range
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
                        <div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" checked={filter?.priceRange?.minPrice == 1} value={1} onClick={(e) => SetPriceRange(e.target.value)} class='w-4 h-4' name="price" id="price_range_01" />
                                <label htmlFor='price_range_01'>100.00 $ and Below</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" checked={filter?.priceRange?.minPrice == 100} value={100} onClick={(e) => SetPriceRange(e.target.value)} class='w-4 h-4' name="price" id="price_range_01" />
                                <label htmlFor='price_range_01'>100.00 $ - 200.00 $</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" checked={filter?.priceRange?.minPrice == 200} value={200} onClick={(e) => SetPriceRange(e.target.value)} class='w-4 h-4' name="price" id="price_range_01" />
                                <label htmlFor='price_range_01'>200.00 $ - 300.00 $</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" checked={filter?.priceRange?.minPrice == 300} value={300} onClick={(e) => SetPriceRange(e.target.value)} class='w-4 h-4' name="price" id="price_range_02" />
                                <label htmlFor='price_range_02'>300.00 $ - 400.00 $</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" checked={filter?.priceRange?.minPrice == 400} value={400} onClick={(e) => SetPriceRange(e.target.value)} class='w-4 h-4' name="price" id="price_range_03" />
                                <label htmlFor='price_range_03'>400.00 $ - 500.00 $</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" checked={filter?.priceRange?.minPrice == 500} value={500} onClick={(e) => SetPriceRange(e.target.value)} class='w-4 h-4' name="price" id="price_range_04" />
                                <label htmlFor='price_range_04'>500.00 $ - 600.00 $</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2'>
                                <input type="checkbox" checked={filter?.priceRange?.minPrice == 600} value={600} onClick={(e) => SetPriceRange(e.target.value)} class='w-4 h-4' name="price" id="price_range_05" />
                                <label htmlFor='price_range_05'>600.00 $ - Above</label>
                            </div>
                        </div>
                    </TECollapse>
                </div>
                {/* 03 */}
                <div className=" border-b bg-white dark:bg-neutral-800">
                    <h2 className="accordion-header mb-0" id="headingThree">
                        <button
                            className={`${activeElement === "element3"
                                ? `text-blue [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-3 py-2 text-left text-base text-blue transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element3")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Colour
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
                        <div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="color_01" checked={filter?.color === 'Red'} value='Red' onClick={(e) => dispatch(setFilter({ color: filter?.color !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='color_01'>Red</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="color_02" checked={filter?.color === 'Green'} value='Green' onClick={(e) => dispatch(setFilter({ color: filter?.color !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='color_02'>Green</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="color_03" checked={filter?.color === 'Blue'} value='Blue' onClick={(e) => dispatch(setFilter({ color: filter?.color !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='color_03'>Blue</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="color_04" checked={filter?.color === 'Teal'} value='Teal' onClick={(e) => dispatch(setFilter({ color: filter?.color !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='color_04'>Teal</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="color_05" checked={filter?.color === 'Black'} value='Black' onClick={(e) => dispatch(setFilter({ color: filter?.color !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='color_05'>Black</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="color_06" checked={filter?.color === 'Orange'} value='Orange' onClick={(e) => dispatch(setFilter({ color: filter?.color !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='color_06'>Orange</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="color_07" checked={filter?.color === 'White'} value='White' onClick={(e) => dispatch(setFilter({ color: filter?.color !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='color_07'>White</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="color_08" checked={filter?.color === 'Cream'} value='Cream' onClick={(e) => dispatch(setFilter({ color: filter?.color !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='color_08'>Cream</label>
                            </div>
                        </div>
                    </TECollapse>
                </div>
                {/* 04 */}
                <div className=" border-b bg-white dark:bg-neutral-800">
                    <h2 className="accordion-header mb-0" id="headingThree">
                        <button
                            className={`${activeElement === "element4"
                                ? `text-blue [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-3 py-2 text-left text-base text-blue transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element4")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Care Instructions
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
                        <div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="care_01" checked={filter?.careInstruction === 'Washable fabric'} value='Washable fabric' onClick={(e) => dispatch(setFilter({ careInstruction: filter?.careInstruction !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='care_01'>Washable fabric</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="care_02" checked={filter?.careInstruction === 'No care required'} value='No care required' onClick={(e) => dispatch(setFilter({ careInstruction: filter?.careInstruction !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='care_02'>No care required</label>
                            </div>
                        </div>
                    </TECollapse>
                </div>
                {/* 05 */}
                <div className=" bg-white dark:bg-neutral-800">
                    <h2 className="accordion-header mb-0" id="headingThree">
                        <button
                            className={`${activeElement === "element5"
                                ? `text-blue [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
                                : `transition-none rounded-b-[15px]`
                                } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-3 py-2 text-left text-base text-blue transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
                            type="button"
                            onClick={() => handleClick("element5")}
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Brands
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
                        <div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="brand_01" checked={filter?.brand === 'Ikea'} value='Ikea' onClick={(e) => dispatch(setFilter({ brand: filter?.brand !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='brand_01'>Ikea</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="brand_02" checked={filter?.brand === 'Berkshire Hathaway'} value='Berkshire Hathaway' onClick={(e) => dispatch(setFilter({ brand: filter?.brand !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='brand_02'>Berkshire Hathaway</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="brand_03" checked={filter?.brand === 'Ashley HomeStore'} value='Ashley HomeStore' onClick={(e) => dispatch(setFilter({ brand: filter?.brand !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='brand_03'>Ashley HomeStore</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="brand_04" checked={filter?.brand === 'Williams Sonoma'} value='Williams Sonoma' onClick={(e) => dispatch(setFilter({ brand: filter?.brand !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='brand_04'>Williams Sonoma</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="brand_05" checked={filter?.brand === 'Big Lots'} value='Big Lots' onClick={(e) => dispatch(setFilter({ brand: filter?.brand !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='brand_05'>Big Lots</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="brand_09" checked={filter?.brand === 'Mattress Firm'} value='Mattress Firm' onClick={(e) => dispatch(setFilter({ brand: filter?.brand !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='brand_09'>Mattress Firm</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="brand_06" checked={filter?.brand === 'Rooms to go'} value='Rooms to go' onClick={(e) => dispatch(setFilter({ brand: filter?.brand !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='brand_06'>Rooms to go</label>
                            </div>
                            <div class='p-2 flex items-center justify-start gap-2 border-b'>
                                <input type="checkbox" class='w-4 h-4' name="price" id="brand_07" checked={filter?.brand === 'Restoration Hardware'} value='Restoration Hardware' onClick={(e) => dispatch(setFilter({ brand: filter?.brand !== e.target.value ? e.target.value : '' }))} />
                                <label htmlFor='brand_07'>Restoration Hardware</label>
                            </div>
                        </div>
                    </TECollapse>
                </div>
            </div>
        </div>
    )
}
