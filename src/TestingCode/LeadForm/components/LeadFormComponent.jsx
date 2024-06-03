import React, { useState } from 'react'
import { SelectDropdown } from '../../../component/selectDropdown/SelectDropdown'
import { junkHaulerArrOption } from '../../../constent/data/data';
import { InputCustome } from '../../../component/InputCustome/InputCustome';
import { ButtonCustome } from '../../../component/Button/ButtonCustome';
import { RxCross2 } from "react-icons/rx";
import { ImageTag } from '../../../component/ImageTag/ImageTag';
import { image } from '../../../constent/image';
import { toast } from 'react-toastify';

export const LeadFormComponent = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const handleOnChange = (event, newValue) => {
        setSelectedValue(newValue);
    };

    const [items, setItems] = useState([
        {
            description: '',
            width: '',
            height: '',
            quantity: 0,
            images: []
        }
    ])

    const addItems = () => {
        setItems(
            [
                ...items,
                {
                    description: '',
                    width: '',
                    height: '',
                    quantity: 0,
                    images: []
                }
            ]
        )
    }

    const removeItems = (index) => {
        const userConfirmed = window.confirm('Do you want to remove the record? Press "OK to confirm or "Cancel" to abort.');
        if (userConfirmed) {
            let updateData = [...items]
            updateData?.length > 1 ? updateData.splice(index, 1) : null
            setItems(updateData)
        }
    }

    const handleInputChange = (index, field, value) => {
        let updateData = [...items];
        updateData[index][field] = value;
        setItems(updateData)
    }

    const handleFileChange = (e, index) => {
        let filePath = e.target.files[0]
        let updateData = [...items];
        updateData[index].images = [...updateData[index].images, URL.createObjectURL(filePath)]
        setItems(updateData)
    }

    const handleDecreaseQuantity = (index) => {
        let updatedData = [...items]
        updatedData[index].quantity = Math.max(0, updatedData[index].quantity - 1);
        setItems(updatedData)
    }

    const handleIncreaseQuantity = (index) => {
        let updatedData = [...items]
        updatedData[index].quantity += 1;
        setItems(updatedData)
    }

    let description = items?.some((item) => item?.description === '');
    let width = items?.some((item) => item?.width === '');
    let height = items?.some((item) => item?.height === '');
    let quantity = items?.some((item) => item?.quantity === 0);
    let images = items?.some((item) => item?.images?.length === 0);

    const uploadDataFun = () => {
        if (description) {
            toast.error('Description Field is Required.')
        } else if (width) {
            toast.error('Width Field is Required.')
        } else if (height) {
            toast.error('Height Field is Required.')
        } else if (quantity) {
            toast.error('Quantity should be greater than 1. Please correct the quantities.')
        } else if (images) {
            toast.error('Please choose any one image for each item.')
        } else {
            toast.success("Record save sucessfully.")
            console.log('items', items)
        }
    }




    return (
        <div>
            {/* spacing div only */}
            <div className='mt-36'></div>
            <div className='JunkHauler max-w-sm mx-auto max-sm:px-3'>
                <h3 className='text-md w-full block font-poppins text-blue font-bold not-italic mb-4 mt-4'>Testing Form...</h3>
                <SelectDropdown
                    className="bg-white p-0 outline-none rounded-lg w-full px-3 py-2 placeholder:text-black text-black"
                    optionArr={junkHaulerArrOption}
                    handleOnChange={handleOnChange}
                />
                {
                    items?.map((item, index) => (
                        <div key={index}>
                            <div>
                                <label htmlFor="lable" className='text-md w-full block font-poppins text-blue font-bold not-italic mb-4 mt-4'>Add Junk Items</label>
                                <InputCustome
                                    placeholder={'Add Item Description'}
                                    searchValue={items?.description}
                                    icon={false}
                                    name="addDescription"
                                    onChange={(e) => handleInputChange(index, "description", e.target.value)}
                                    className="outline-none rounded-lg border border-black w-full px-3 py-2 placeholder:text-black text-black"
                                />
                            </div>
                            <div className='option_box'>
                                <label htmlFor="lable" className='text-md w-full block font-poppins text text-gray-400 font-100 not-italic mb-4 mt-4'>Optional</label>
                                <div className='inner-box flex items-center justify-between gap-3'>
                                    <div>
                                        <InputCustome
                                            placeholder={'W in Inch'}
                                            searchValue={items?.width}
                                            icon={false}
                                            name="boxWidth"
                                            onChange={(e) => handleInputChange(index, "width", e.target.value)}
                                            className="outline-none rounded-lg border border-black w-full px-3 py-2 placeholder:text-black text-black"
                                        />
                                    </div>
                                    <div>
                                        <InputCustome
                                            placeholder={'H in Inch'}
                                            searchValue={items?.height}
                                            icon={false}
                                            name="boxHeight"
                                            onChange={(e) => handleInputChange(index, "height", e.target.value)}
                                            className="outline-none rounded-lg border border-black w-full px-3 py-2 placeholder:text-black text-black"
                                        />
                                    </div>
                                    <div>
                                        <RxCross2 />
                                    </div>
                                    <div>
                                        <div className='flex border border-black px-3 py-2 items-center justify-between rounded-lg'>
                                            <div onClick={() => handleDecreaseQuantity(index)}>
                                                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                    <path d="M10 20C4.486 20 0 15.515 0 10C0 4.486 4.486 0 10 0C15.514 0 20 4.486 20 10C20 15.515 15.514 20 10 20ZM10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18C14.411 18 18 14.411 18 10C18 5.589 14.411 2 10 2Z" fill="#252460" />
                                                    <path d="M5 9H15V11H5V9Z" fill="#252460" />
                                                </svg>
                                            </div>

                                            <span className='border-0 outline-none w w-14 text-center'>{item?.quantity}</span>

                                            <div onClick={() => handleIncreaseQuantity(index)}>
                                                <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none">
                                                    <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17317C0.00433284 8.00043 -0.193701 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8079C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7363 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0ZM10 18C8.41775 18 6.87104 17.5308 5.55544 16.6518C4.23985 15.7727 3.21447 14.5233 2.60897 13.0615C2.00347 11.5997 1.84504 9.99113 2.15372 8.43928C2.4624 6.88743 3.22433 5.46197 4.34315 4.34315C5.46197 3.22433 6.88743 2.4624 8.43928 2.15372C9.99113 1.84504 11.5997 2.00346 13.0615 2.60896C14.5233 3.21447 15.7727 4.23984 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C18 12.1217 17.1572 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18ZM14 9H11V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5C9.73479 5 9.48043 5.10536 9.2929 5.29289C9.10536 5.48043 9 5.73478 9 6V9H6C5.73479 9 5.48043 9.10536 5.2929 9.29289C5.10536 9.48043 5 9.73478 5 10C5 10.2652 5.10536 10.5196 5.2929 10.7071C5.48043 10.8946 5.73479 11 6 11H9V14C9 14.2652 9.10536 14.5196 9.2929 14.7071C9.48043 14.8946 9.73479 15 10 15C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14V11H14C14.2652 11 14.5196 10.8946 14.7071 10.7071C14.8946 10.5196 15 10.2652 15 10C15 9.73478 14.8946 9.48043 14.7071 9.29289C14.5196 9.10536 14.2652 9 14 9Z" fill="#252460" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className='text-md font-poppins text-cyan font-100 not-italic mt-5 mb-2'>Upload Photos</h2>
                                <div className='flex items-start justify-start gap-3'>
                                    {/* <div className='w-16'>
                                        <ImageTag src={image?.dubbing_img} />
                                    </div> */}

                                    {
                                        item?.images?.length > 0 ? item.images?.map((filePath, index) => (
                                            <div className='w-16 rounded-lg p-1 shadow' key={index}>
                                                <ImageTag className="rounded-lg" src={filePath ? filePath : image?.dubbing_img} />
                                            </div>
                                        )) : (
                                            <div className='w-16'>
                                                <ImageTag src={image?.dubbing_img} />
                                            </div>
                                        )
                                    }

                                    <div className='w-20 text-center '>
                                        <div className='relative'>
                                            <input
                                                type="file"
                                                accept="image/*"
                                                onChange={(e) => handleFileChange(e, index, "images")}
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
                                </div>
                            </div>

                            <div className='flex items-center justify-start gap-3'>
                                {
                                    index === 0 ? null : (
                                        <h2 onClick={() => removeItems(index)} className='text-md font-poppins text-cyan font-100 not-italic mt-5 mb-8 cursor-pointer'>- Remove Item</h2>
                                    )
                                }
                            </div>
                        </div>
                    ))
                }

                <div className='flex items-center justify-start gap-3'>
                    <h2 onClick={addItems} className='text-md font-poppins text-cyan font-100 not-italic mt-5 mb-8 cursor-pointer'>+ Add More</h2>
                </div>

                <ButtonCustome
                    className={`${isLoading ? 'activeColor' : 'bg-white'} border border-blue w-full min-md:text-lg font-bold hover:bg-blue hover:text-white transition-all duration-500 text-blue rounded-full px-14 m-auto p-2 `}
                    buttonTitle="Upload & Ask for Quote"
                    type="text"
                    isLoading={isLoading}
                    onClick={uploadDataFun}
                />
            </div>
            <div className='mt-12'></div>
        </div>
    )
}
