import React, { useEffect, useState } from 'react'
import { FaRegEdit } from "react-icons/fa";
import { ImageTag } from '../../../../component/ImageTag/ImageTag'
import { image } from '../../../../constent/image'
import { InputCustome } from '../../../../component/InputCustome/InputCustome'
import { ButtonCustome } from '../../../../component/Button/ButtonCustome'
import CountryCodeDropdown from '../../../../component/selectDropdown/CountryCodeDropdown';
import { toast } from 'react-toastify';
import { APIRequest, APIRequestWithFile, ApiUrl } from '../../../../utils/api';
import { BackToButton } from '../../../../component/BackToButton/BackToButton';

export const ProfileComponent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [countryCode, setCountryCode] = useState('');
    const [items, setItems] = useState({
        image: '',
        name: '',
        email: '',
        address: '',
        mobileNo: '',
        countryCode: '',
    });
    // console.log('countryCode', items?.countryCode)

    const handleInputChange = (field, value) => {
        let updatedItems = { ...items }
        updatedItems[field] = value;
        setItems(updatedItems)
    }

    const useDetailsFunc = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.getUserDetails,
            method: "get",
        }
        APIRequest(
            config,
            res => {
                setItems({
                    image: res?.user?.image,
                    name: res?.user?.name,
                    email: res?.user?.email,
                    address: res?.user?.fullAddress,
                    mobileNo: res?.user?.contact,
                    countryCode: res?.user?.countryCode,
                })
                setIsLoading(false)
            },
            err => {
                setIsLoading(false)
                if (err?.error) {
                    toast.error(err?.message)
                }
            }
        )
    }


    const saveProfile = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.updateProfile,
            method: "post",
            body: {
                "image": items?.image,
                "name": items?.name,
                "email": items?.email,
                "contact": items?.mobileNo,
                "countryCode": countryCode ? countryCode : items?.countryCode,
                "fullAddress": items?.address,
                "countryFlag": ''
            }
        }
        APIRequest(
            config,
            res => {
                setItems({
                    image: res?.user?.image,
                    name: res?.user?.name,
                    email: res?.user?.email,
                    address: res?.user?.fullAddress,
                    mobileNo: res?.user?.contact,
                    countryCode: res?.user?.countryCode,
                })
                if (!res?.error) {
                    setIsLoading(false)
                    toast.success(res?.message)
                    useDetailsFunc()
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


    let handleFileChange = (e) => {
        const selectedFiles = e.target.files[0];
        setIsLoading(true)
        let config = {
            url: ApiUrl?.uploadiImage,
            method: 'post',
            body: {
                image: selectedFiles
            }
        }
        APIRequestWithFile(
            config,
            res => {
                let updatedData = { ...items }
                updatedData.image = res?.image;
                setItems(updatedData)
                setIsLoading(false)
            },
            err => {
                setIsLoading(false)
                console.log(err, '=============== err')
            }
        )
    }

    useEffect(() => {
        useDetailsFunc()
    }, [])


    return (
        <div className='max-sm:px-3'>
            {/* spacing div only */}
            <div className='mt-36'></div>
            <div className='max-w-xl m-auto'>
                <BackToButton
                    pageUrl={'/'}
                    pageTitle="User Profile"
                />
                <div className='max-sm:flex-wrap flex items-center justify-between gap-3'>
                    <div className='max-w-sm w-full'>
                        <div className='rounded'>
                            <ImageTag
                                src={items?.image ? items?.image : image?.profileImage}
                                className="rounded-full max-sm:w-24 max-sm:h-24 w-52 h-52"
                            />
                            <div className='relative'>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleFileChange(e)}
                                    className='w-10 h-8 border ab absolute left-20 opacity-0 s z-10 cursor-pointer -top-11' />
                                <div
                                    className='text-xl relative w-10 max-sm:left-20 -top-10 left-24 cursor-pointer text-color500 font-bold font-poppins'>
                                    <FaRegEdit />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-2xl w-full'>
                        <h1 className='mb-5 text-left text-black text-2xl font-bold not-italic font-poppins'>Created account</h1>
                        <div>
                            <label htmlFor="lable" className='text-back100 block mb-2 w-full text-sm font-poppins'>Name</label>
                            <InputCustome
                                placeholder={items?.name ? items?.name : 'Enter Name'}
                                searchValue={items?.name}
                                icon={false}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                className="outline-none w-full rounded-lg mb-2 bg-transparentDark px-3 py-2 placeholder:text-back500 text-back500"
                            />
                        </div>
                        <div>
                            <label htmlFor="lable" className='text-back100 block mb-2 w-full text-sm font-poppins'>Mobile</label>
                            <InputCustome
                                placeholder={items?.mobileNo ? items?.mobileNo : 'Enter phone number'}
                                searchValue={items?.mobileNo}
                                icon={false}
                                onChange={(e) => handleInputChange("mobileNo", e.target.value)}
                                className="outline-none max-sm:w-full rounded-lg block mb-2 w-full bg-transparentDark px-3 py-2 placeholder:text-back500 text-back500"
                            />

                        </div>
                        <div>
                            <label htmlFor="lable" className='text-back100 text-sm font-poppins'>Email</label>
                            <InputCustome
                                placeholder={items?.email ? items?.email : 'Enter email'}
                                searchValue={items?.email}
                                icon={false}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                className="outline-none rounded-lg block mb-2 w-full bg-transparentDark px-3 py-2 placeholder:text-back500 text-back500"
                            />
                        </div>
                        <div>
                            <label htmlFor="lable" className='text-back100 text-sm font-poppins'>Address</label>
                            <InputCustome
                                placeholder={items?.address ? items?.address : 'Address'}
                                searchValue={items?.address}
                                icon={false}
                                onChange={(e) => handleInputChange("address", e.target.value)}
                                className="outline-none rounded-lg w-full bg-transparentDark px-3 py-2 placeholder:text-back500 text-back500"
                            />
                        </div>

                        <div className='buttos flex items-center justify-start gap-10 mt-5'>
                            <ButtonCustome
                                className={`${isLoading ? 'activeColor' : 'bg-white'} border border-themBgColor max-w-52 text-center w-full text-lg font-bold hover:bg-themBgColor hover:text-white transition-all duration-500 text-themBgColor rounded-full py-1 px-2`}
                                buttonTitle="Save"
                                type="text"
                                isLoading={isLoading}
                                onClick={() => saveProfile()}
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* <YourComponent /> */}
            <div className='mt-12'></div>
        </div>
    )
}
