import React, { useEffect, useState } from 'react'
import { APIRequest, ApiUrl } from '../../../../../../utils/api';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../../../../app/slice/ProductSlice';
import { Screen_Loader } from '../../../../../../component/Screen_Loader/Screen_Loader';

const AddToCart = ({ Product }) => {
   const dispatch = useDispatch()
   const CartProductList = useSelector(state => state.product.cart)
   const [qty, setQty] = useState(1)
   const [IsLoading, setIsLoading] = useState(false);
   const [ProductDetails, setProductDetails] = useState(null);
   const isToken = JSON.parse(localStorage.getItem("data"));

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
               console.log(res?.data[0]?.products);
               dispatch(addToCart(res?.data[0]?.products))
               setIsLoading(false)
            }
         },
         err => {
            setIsLoading(false)
         }
      )
   }


   const AddCartFun = (quantity) => {
      setIsLoading(true)
      let config = {
         url: ApiUrl?.addToCart,
         method: "post",
         body: {
            productId: Product?._id,
            quantity: quantity
         }
      }
      APIRequest(
         config,
         res => {
            if (!res?.error) {
               console.log(res?.updated?.products);
               // if (res?.updated) {
               //    dispatch(addToCart(res?.updated?.products))
               // } else {
               //    dispatch(addToCart(res?.created?.products))
               // }
               GetCartFun()
               setIsLoading(false)
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

   useEffect(() => {
      if (Product?._id) {
         const item = CartProductList?.filter((item) => item?.productId === Product._id || item?.productId?._id === Product._id)
         setProductDetails(item ? item[0] : [])
         console.log(item, 'setProductDetails')
      }
   }, [CartProductList])


   const handleIncreaseQuantity = () => {
      if (isToken) {
         AddCartFun(1)
      } else {
         alert("Please Login after that you access");
         window.location.href = "/login";
      }
   };
   const handleDecreaseQuantity = () => {
      if (ProductDetails?.quantity > 0) {
         AddCartFun(-1)
      }
   };


   return (
      <>
         <div className="space-s-4 3xl:pr-48 flex items-center gap-2 border-b border-gray-300 py-8  md:pr-32 lg:pr-12 2xl:pr-32">
            {/* <div className="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
               <button
                  className="text-heading cursor-pointer hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
                  onClick={handleIncreaseQuantity}
               >
                  +
               </button>
               <span className="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
                  {ProductDetails?.quantity ? ProductDetails?.quantity : 0}
               </span>
               <button
                  onClick={handleDecreaseQuantity}
                  className="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
               >
                  -
               </button>
            </div> */}
            <button
               type="text"
               className="h-11 w-auto flex justify-start items-center gap-2 rounded-md bg-themBgColor px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-themBgColor focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
               onClick={handleIncreaseQuantity}
            >
               {
                  IsLoading ? (
                     <div className='w-auto'>
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                           <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                           <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                     </div>
                  ) : ''
               }
               Add To Cart
            </button>
         </div>

      </>
   )
}

export default AddToCart