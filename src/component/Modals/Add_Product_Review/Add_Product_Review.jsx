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
import { useNavigate } from 'react-router-dom';

export default function Add_Product_Review({title, className, description, product_Details}) {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [rating, setRating] = useState(1)
    const [items, setItems] = useState(
        {
            productId: product_Details?.product?.productId,
            rating: rating,
            description: '',
            images: [],
        },
    );

    const reset = () => {
        setItems({
            productId: '',
            rating: '',
            description: '',
            images: [],
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

    const handleFileChange = (e) => {
        const selectedFiles = e.target.files;
        returnFilePath(selectedFiles)
    };

    let returnFilePath = (selectedFiles) => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.uploadiImage,
            method: 'post',
            body: {
                image: selectedFiles[0]
            }
        }
        APIRequestWithFile(
            config,
            res => {
                setIsLoading(false)
                handleImageInputChange(res?.brochure)
            },
            err => {
                setIsLoading(false)
                if (err?.error) {
                    toast.error(err?.message)
                }
                console.log(err, '=============== err')
            }
        )
    }

    const handleImageInputChange = (file) => {
        const updatedItems = { ...items };
        updatedItems.images = [...updatedItems.images, file];
        setItems(updatedItems);
    };

    const remove_image_Fun = (index) => {
        const updatedItems = { ...items };
        updatedItems?.images?.length > 0 ? updatedItems?.images?.splice(index, 1) : null
        setItems(updatedItems)
    }

    const add_Product_Review_Func = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.rating_Product_Add,
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
                    navigate("/orders")
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

    console.log('items', items)

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
                                <div className='max-w-24 rounded-md'>
                                    <img src={product_Details?.details?.images[0]} className='w-full h-full object-cover shadow-md rounded-md' alt="Product Image" />
                                </div>
                                <div>
                                    <p className='text-black font-poppins text-md'>{product_Details?.details?.name}</p>
                                    <p className='m-0'>{product_Details?.details?.description?.slice(0, 30) + "..."}</p>
                                    <p className='text-sm'>$ {product_Details?.details?.price}</p>
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

                            <div>
                                <h2 className='text-md font-poppins text-cyan font-100 not-italic mt-5 mb-2'>Upload Photos</h2>
                                <div className='flex items-start justify-start gap-3'>
                                    {/* Display images */}

                                    {
                                        items?.images?.length > 0 ? items.images?.map((filePath, index) => (
                                            <div key={index}>
                                                <div className='remove_image cursor-pointer' onClick={() => remove_image_Fun(index)}>
                                                    <IoMdRemoveCircle />
                                                </div>
                                                <div className='w-16 h-12 rounded-lg p-1 shadow' key={index}>
                                                    <img className="rounded-lg h-full" src={filePath ? filePath : image?.dubbing_img} />
                                                </div>
                                            </div>
                                        )) : (
                                            <div className='w-16 h-12'>
                                                <img src={image?.dubbing_img} className="h-full" />
                                            </div>
                                        )
                                    }
                                    {
                                        items?.images?.length < 4 && (
                                            <div className='w-20 text-center '>
                                                <div className='relative'>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={(e) => handleFileChange(e)}
                                                        className='d appearance-none absolute left-0 opacity-0 z-10 w-20 h-20 border-2 opacity-1'
                                                    />
                                                    <div className='absolute top-0 w-full h-full'>
                                                        <svg className='cursor-pointer m-auto' xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                            <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18ZM14 9H11V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5C9.73479 5 9.48043 5.10536 9.2929 5.29289C9.10536 5.48043 9 5.73478 9 6V9H6C5.73479 9 5.48043 9.10536 5.2929 9.29289C5.10536 9.48043 5 9.73478 5 10C5 10.2652 5.10536 10.5196 5.2929 10.7071C5.48043 10.8946 5.73479 11 6 11H9V14C9 14.2652 9.10536 14.5196 9.2929 14.7071C9.48043 14.8946 9.73479 15 10 15C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14V11H14C14.2652 11 14.5196 10.8946 14.7071 10.7071C14.8946 10.5196 15 10.2652 15 10C15 9.73478 14.8946 9.48043 14.7071 9.29289C14.5196 9.10536 14.2652 9 14 9Z" fill="#252460" />
                                                        </svg>
                                                        <p className='text-center text-blue font-poppins text-md leading-none mt-1'>Add more photos</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <button className='flex items-center justify-center gap-1 text-xs bg-cyan w-20 text-white p-1 rounded-sm' onClick={handleClose}>Cancel</button>
                    <button className='flex items-center justify-center gap-1 text-xs bg-green-500 w-20 text-white p-1 rounded-sm' onClick={handleSuccess} autoFocus>
                        OK
                    </button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}