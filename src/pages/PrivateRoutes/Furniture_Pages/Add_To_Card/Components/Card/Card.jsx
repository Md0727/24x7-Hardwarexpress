import React, { useEffect, useState } from 'react'
import { ButtonCustome } from '../../../../../../component/Button/ButtonCustome'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AddItem from './AddItem'
import { APIRequest, ApiUrl } from '../../../../../../utils/api'

export const Card = () => {
    const CartProductList = useSelector(state => state.product.cart)
    const [IsLoading, setIsLoading] = useState(false);
    const [getCartData, setGetCartData] = useState([])
    const navigation = useNavigate()
    const Continue_Shopping = () => {
        navigation('/product/checkout', { state: { cartdId: getCartData?._id } })
    }

    const GetCartFun = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.getCart,
            method: "get",
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    console.log(res?.data[0], '============= cart');
                    setGetCartData(res?.data[0])
                    setIsLoading(false)
                }
            },
            err => {
                setIsLoading(false)
            }
        )
    }
    useEffect(() => {
        if (getCartData) {
            GetCartFun()
        }
    }, [setGetCartData])

    // console.log(getCartData?._id, "getCartData ==")


    return (
        <div>
            <div>
                <div className="mx-auto max-w-4xl px-2 lg:px-0">
                    <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Shopping Cart
                        </h1>
                        <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-5 cart_1">
                            <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
                                <h2 id="cart-heading" className="sr-only">
                                    Items in your shopping cart
                                </h2>
                                <ul role="list" className="divide-y divide-gray-200">
                                    {
                                        CartProductList?.length > 0 ? (
                                            CartProductList?.map((item, index) => (
                                                <div className key={`cartproductlist${index}`}>
                                                    <li className="flex p-3 sm:py-6 shadow-lg">
                                                        <div className="flex-shrink-0 ">
                                                            <img src={item?.productId?.images[0]} alt="Nike Air Force 1 07 LV8" className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center" />
                                                        </div>
                                                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                                                <div>
                                                                    <div className="flex justify-between">
                                                                        <h3 className="text-sm">
                                                                            <a href="#" className="font-semibold text-black">
                                                                                {item?.productId?.name}
                                                                            </a>
                                                                        </h3>
                                                                    </div>
                                                                    <div className="mt-1 sm:flex text-sm">
                                                                        <p className="text-sm text-gray-500">
                                                                            {item?.productId?.color ? item?.productId?.color : 'N/A'}
                                                                        </p>
                                                                        <p className="sm:ml-4 sm:border-l border-gray-200 sm:pl-4 text-sm text-gray-500">
                                                                            {item?.productId?.brand}
                                                                        </p>
                                                                    </div>
                                                                    <div className="mt-1 sm:flex sm:items-end">
                                                                        <p className="text-xs font-medium text-gray-500 line-through">
                                                                            <span className='sm:ml-2'>$</span> <span>{item?.productId?.totalPrice}</span>
                                                                        </p>
                                                                        <p className="text-sm font-medium text-gray-900 mr-2"><span className='sm:ml-2'>$</span> {item?.productId?.price} </p>
                                                                        {/* <p className="text-sm font-medium text-green-500">{item?.productId?.discount} {item?.productId?.isPercent ? '%' : '$'}Off</p> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <AddItem Product={item} GetCartFun1={GetCartFun} />
                                                    </li>
                                                </div>
                                            ))
                                        ) : 'Unavailable Cart: Please Try Again Later'
                                    }

                                </ul>
                            </section>
                            <section aria-labelledby="summary-heading" className="mt-16 p-3 shadow-lg rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0">
                                <h2 id="summary-heading" className=" border-b border-gray-200 py-3 text-lg font-medium text-gray-900 sm:py-4">
                                    Price Details
                                </h2>
                                <div>
                                    <dl className=" space-y-1 px-2 py-4">
                                        <div className="flex items-center justify-between">
                                            <dt className="text-sm text-gray-800">Price ({getCartData?.products?.length} item)</dt>
                                            <dd className="text-sm font-medium text-gray-900">$ {getCartData?.total ? getCartData?.total : '---'}</dd>
                                        </div>
                                        <div className="flex items-center justify-between pt-4">
                                            <dt className="flex items-center text-sm text-gray-800">
                                                <span>Discount</span>
                                            </dt>
                                            <dd className="text-sm font-medium text-green-700">- $ 0</dd>
                                        </div>
                                        <div className="flex items-center justify-between py-4">
                                            <dt className="flex text-sm text-gray-800">
                                                <span>Delivery Charges</span>
                                            </dt>
                                            <dd className="text-sm font-medium text-green-700">Free</dd>
                                        </div>
                                        <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                            <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                            <dd className="text-base font-medium text-gray-900">$ {getCartData?.total ? getCartData?.total : '---'}</dd>
                                        </div>
                                    </dl>
                                    {/* <div className="px-2 pb-4 font-medium text-green-700">
                                        You will save ₹ 3,431 on this order
                                    </div> */}
                                    <div>
                                        <ButtonCustome
                                            className="text-md border border-themBgColor font-bold hover:bg-white hover:text-themBgColor transition-all duration-500 text-white bg-themBgColor rounded-full px-10 m-auto p-2"
                                            buttonTitle="Continue shopping →"
                                            type="text"
                                            onClick={Continue_Shopping}
                                        />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}




{/* <div>
<div>
    <div className="mx-auto max-w-4xl px-2 lg:px-0">
        <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Shopping Cart
            </h1>
            <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                <section aria-labelledby="cart-heading" className="rounded-lg bg-white lg:col-span-8">
                    <h2 id="cart-heading" className="sr-only">
                        Items in your shopping cart
                    </h2>
                    <ul role="list" className="divide-y divide-gray-200">
                        <div className>
                            <li className="flex py-6 sm:py-6 ">
                                <div className="flex-shrink-0">
                                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png" alt="Nike Air Force 1 07 LV8" className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center" />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                        <div>
                                            <div className="flex justify-between">
                                                <h3 className="text-sm">
                                                    <a href="#" className="font-semibold text-black">
                                                        Nike Air Force 1 07 LV8
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="mt-1 flex text-sm">
                                                <p className="text-sm text-gray-500">Orange</p>
                                                <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                                    8 UK
                                                </p>
                                            </div>
                                            <div className="mt-1 flex items-end">
                                                <p className="text-xs font-medium text-gray-500 line-through">
                                                    ₹48,900
                                                </p>
                                                <p className="text-sm font-medium text-gray-900">&nbsp;&nbsp;₹47,199</p>
                                                <p className="text-sm font-medium text-green-500">5% Off</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <div className="mb-2 flex">
                                <div className="min-w-24 flex">
                                    <button type="button" className="h-7 w-7">
                                        -
                                    </button>
                                    <input type="text" className="mx-1 h-7 w-9 rounded-md border text-center" defaultValue={1} />
                                    <button type="button" className="flex h-7 w-7 items-center justify-center">
                                        +
                                    </button>
                                </div>
                                <div className="ml-6 flex text-sm">
                                    <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                                            <path d="M3 6h18" />
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                        </svg>
                                        <span className="text-xs font-medium text-red-500">Remove</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className>
                            <li className="flex py-6 sm:py-6 ">
                                <div className="flex-shrink-0">
                                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png" alt="Nike Blazer Low 77 SE" className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center" />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                        <div>
                                            <div className="flex justify-between">
                                                <h3 className="text-sm">
                                                    <a href="#" className="font-semibold text-black">
                                                        Nike Blazer Low 77 SE
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="mt-1 flex text-sm">
                                                <p className="text-sm text-gray-500">White</p>
                                                <p className="ml-4 border-l border-gray-200 pl-4 text-sm text-gray-500">
                                                    8 UK
                                                </p>
                                            </div>
                                            <div className="mt-1 flex items-end">
                                                <p className="text-xs font-medium text-gray-500 line-through">
                                                    ₹2,499
                                                </p>
                                                <p className="text-sm font-medium text-gray-900">&nbsp;&nbsp;₹1,549</p>
                                                <p className="text-sm font-medium text-green-500">38% off</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <div className="mb-2 flex">
                                <div className="min-w-24 flex">
                                    <button type="button" className="h-7 w-7">
                                        -
                                    </button>
                                    <input type="text" className="mx-1 h-7 w-9 rounded-md border text-center" defaultValue={1} />
                                    <button type="button" className="flex h-7 w-7 items-center justify-center">
                                        +
                                    </button>
                                </div>
                                <div className="ml-6 flex text-sm">
                                    <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                                            <path d="M3 6h18" />
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                        </svg>
                                        <span className="text-xs font-medium text-red-500">Remove</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className>
                            <li className="flex py-6 sm:py-6 ">
                                <div className="flex-shrink-0">
                                    <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png" alt="Nike Air Max 90" className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center" />
                                </div>
                                <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                        <div>
                                            <div className="flex justify-between">
                                                <h3 className="text-sm">
                                                    <a href="#" className="font-semibold text-black">
                                                        Nike Air Max 90
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="mt-1 flex text-sm">
                                                <p className="text-sm text-gray-500">Black</p>
                                            </div>
                                            <div className="mt-1 flex items-end">
                                                <p className="text-xs font-medium text-gray-500 line-through">
                                                    ₹999
                                                </p>
                                                <p className="text-sm font-medium text-gray-900">&nbsp;&nbsp;₹2219 </p>
                                                <p className="text-sm font-medium text-green-500">78% off</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <div className="mb-2 flex">
                                <div className="min-w-24 flex">
                                    <button type="button" className="h-7 w-7">
                                        -
                                    </button>
                                    <input type="text" className="mx-1 h-7 w-9 rounded-md border text-center" defaultValue={1} />
                                    <button type="button" className="flex h-7 w-7 items-center justify-center">
                                        +
                                    </button>
                                </div>
                                <div className="ml-6 flex text-sm">
                                    <button type="button" className="flex items-center space-x-1 px-2 py-1 pl-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                                            <path d="M3 6h18" />
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                        </svg>
                                        <span className="text-xs font-medium text-red-500">Remove</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ul>
                </section>
                <section aria-labelledby="summary-heading" className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0">
                    <h2 id="summary-heading" className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4">
                        Price Details
                    </h2>
                    <div>
                        <dl className=" space-y-1 px-2 py-4">
                            <div className="flex items-center justify-between">
                                <dt className="text-sm text-gray-800">Price (3 item)</dt>
                                <dd className="text-sm font-medium text-gray-900">₹ 52,398</dd>
                            </div>
                            <div className="flex items-center justify-between pt-4">
                                <dt className="flex items-center text-sm text-gray-800">
                                    <span>Discount</span>
                                </dt>
                                <dd className="text-sm font-medium text-green-700">- ₹ 3,431</dd>
                            </div>
                            <div className="flex items-center justify-between py-4">
                                <dt className="flex text-sm text-gray-800">
                                    <span>Delivery Charges</span>
                                </dt>
                                <dd className="text-sm font-medium text-green-700">Free</dd>
                            </div>
                            <div className="flex items-center justify-between border-y border-dashed py-4 ">
                                <dt className="text-base font-medium text-gray-900">Total Amount</dt>
                                <dd className="text-base font-medium text-gray-900">₹ 48,967</dd>
                            </div>
                        </dl>
                        <div className="px-2 pb-4 font-medium text-green-700">
                            You will save ₹ 3,431 on this order
                        </div>
                        <div>
                            <ButtonCustome
                                className="text-md border border-blue font-bold hover:bg-white hover:text-blue transition-all duration-500 text-white bg-blue rounded-full px-10 m-auto p-2"
                                buttonTitle="Continue shopping →"
                                type="text"
                                onClick={Continue_Shopping}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>
</div> */}