import React, { useEffect, useState } from 'react'
import { addToCart } from '../../../../../../app/slice/ProductSlice'
import { APIRequest, ApiUrl } from '../../../../../../utils/api'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { Screen_Loader } from '../../../../../../component/Screen_Loader/Screen_Loader'

const AddItem = ({ Product, GetCartFun1 }) => {
   const dispatch = useDispatch()
   const CartProductList = useSelector(state => state.product.cart)
   const [IsLoading, setIsLoading] = useState(false);
   const [ProductDetails, setProductDetails] = useState(null)

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
      console.log(Product, '67890-98789098789');
      setIsLoading(true)
      let config = {
         url: ApiUrl?.addToCart,
         method: "post",
         body: {
            productId: Product?.productId?._id,
            quantity: quantity
         }
      }
      APIRequest(
         config,
         res => {
            if (!res?.error) {
               GetCartFun()
               GetCartFun1()
               setIsLoading(false)
               // toast.success(res?.message)
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

   const RemoveProductFun = () => {
      setIsLoading(true)
      let config = {
         url: ApiUrl?.removeProductCart,
         method: "post",
         body: {
            productId: Product?.productId?._id,
         }
      }
      APIRequest(
         config,
         res => {
            if (!res?.error) {
               GetCartFun()
               GetCartFun1()
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
         const item = CartProductList?.filter((item) => item?.productId?._id === Product?.productId._id)
         setProductDetails(item[0])
      }
   }, [CartProductList])

   const handleIncreaseQuantity = () => {
      AddCartFun(1)
   };

   const handleDecreaseQuantity = () => {
      if (Product?.quantity > 0) {
         AddCartFun(-1)
      }
   };

   return (
      <div className="mb-2 sm:flex">
         <div className="min-w-24 flex">
            {
               IsLoading && (
                  <Screen_Loader />
               )
            }
            <button type="button" className="h-7 w-7" onClick={() => handleDecreaseQuantity()}>
               -
            </button>
            <input type="text" className="mx-1 h-7 w-9 rounded-md border text-center" value={Product?.quantity} />
            <button type="button" className="flex h-7 w-7 items-center justify-center" onClick={() => handleIncreaseQuantity()}>
               +
            </button>
         </div>
         <div className="ml-6 flex text-sm">
            <button type="button" className="flex items-start space-x-1 px-2 py-1 pl-0">
               <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
                  <path d="M3 6h18" />
                  <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                  <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
               </svg>
               <span className="text-xs font-medium text-red-500" onClick={() => RemoveProductFun()}>Remove</span>
            </button>
         </div>
      </div>
   )
}

export default AddItem