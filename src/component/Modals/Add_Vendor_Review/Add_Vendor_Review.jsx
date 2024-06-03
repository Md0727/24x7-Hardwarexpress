import * as React from 'react';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { toast } from 'react-toastify';
import { APIRequest, APIRequestWithFile, ApiUrl } from '../../../utils/api';
import { image } from '../../../constent/image';
import { IoMdRemoveCircle } from "react-icons/io";
import { useEffect } from 'react';
import { Screen_Loader } from '../../Screen_Loader/Screen_Loader';

export default function Add_Vendor_Review({ title, className, description, product_Details, get_All_For_User_Data }) {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [statusChanger, setStatusChanger] = useState('')
    const [rating, setRating] = useState(1)
    const [items, setItems] = useState(
        {
            vendorId: '',
            rating: rating,
            type : product_Details?.serviceType,
            description: '',
        },
    );

    const reset = () => {
        setItems({
            vendorId: '',
            rating: '',
            type : '',
            description: '',
        })
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSuccess = () => {
        add_Product_Review_Func()
    };

    const add_Product_Review_Func = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.rating_Vendor_Add,
            method: "post",
            body: items
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setIsLoading(false)
                    toast.success(res?.message)
                    reset()
                    handleClose()
                    get_All_For_User_Data()
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

    const textAreaChangeHandler = (e) => {
        const updatedItems = { ...items };
        updatedItems.description = e?.target?.value;
        setItems(updatedItems);
    }

    useEffect(() => {
        if (rating) {
            const updatedItems = { ...items };
            updatedItems.rating = rating;
            setItems(updatedItems);
        }
    }, [rating])

    useEffect(() => {
        if (product_Details?.vendorId){
            const updatedItems = { ...items };
            updatedItems.vendorId = product_Details?.vendorId;
            setItems(updatedItems);
        }
    }, [product_Details?.vendorId])

    // console.log('items', product_Details?.vendorId)

    return (
        <React.Fragment>
            <button className={className} variant="outlined" onClick={handleClickOpen}>
                {title}
            </button>
            <Dialog
                open={open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {description}
                    {
                        isLoading && (
                            <div className="flex bg-blue mb-4 rounded-md justify-center items-center space-x-1 text-sm text-gray-700">
                                <svg fill="#fff" className="w-10 text-white h-10 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                    <path clipRule="evenodd" d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z" fill="currentColor" fillRule="evenodd" />
                                </svg>
                                <div className='text-white text-2xl'>Loading ...</div>
                            </div>
                        )
                    }
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" className='w-96'>
                        <div>
                            <div className='border-b border-blue pb-2 flex justify-start gap-2 items-start'>
                                <div>
                                    <p className='text-black font-poppins text-sm'>Vendor Name :- {product_Details?.vendorInfo?.name ? product_Details?.vendorInfo?.name : '---'}</p>
                                    <p className='text-black font-poppins text-sm'>Vendor Address :- {product_Details?.vendorInfo?.address?.street1} {product_Details?.vendorInfo?.address?.street2} {product_Details?.vendorInfo?.address?.locality} {product_Details?.vendorInfo?.address?.postalCode} {product_Details?.vendorInfo?.address?.landMark}  </p>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-black mt-2 mb-1 font-poppins text-lg'>Rating</h2>
                                <div>
                                    <ul className='flex items-center justify-start gap-2'>
                                        {
                                            [1, 2, 3, 4, 5]?.map((ratingOfnum, i) => (
                                                <li onClick={() => setRating(ratingOfnum === rating ? '' : ratingOfnum)} className={`text-center rounded cursor-pointer w-5 h-5  font-poppins text-sm ${rating === ratingOfnum ? 'bg-yellow text-white' : 'bg-white text-black border'}`}>{ratingOfnum}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h2 className='text-black mt-2 mb-1 font-poppins text-lg'>Add a written review</h2>
                                <textarea
                                    className='w-full border rounded-md p-2 outline-none resize-none'
                                    name="productReview"
                                    value={items?.description}
                                    onChange={textAreaChangeHandler}
                                    id="" cols="20"
                                    rows="2"
                                    placeholder='Write Review ..! What did You Like & Dislike..?'
                                ></textarea>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button className='flex items-center justify-center gap-1 text-xs bg-cyan w-20 text-white p-1 rounded-sm' onClick={handleClose}>Cancle</button>
                    <button className='flex items-center justify-center gap-1 text-xs bg-green-500 w-20 text-white p-1 rounded-sm' onClick={handleSuccess} autoFocus>
                        OK
                    </button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}