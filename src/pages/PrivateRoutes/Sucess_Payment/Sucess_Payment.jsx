import { Box, Spinner, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper, useStatStyles, useSteps } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CartIdSlice from '../../../app/slice/CartIdSlice';
import { useSelector } from 'react-redux';
import { APIRequest, ApiUrl } from '../../../utils/api';
import { FaCheckSquare } from 'react-icons/fa';
import { image } from '../../../constent/image';
import { ImageTag } from '../../../component/ImageTag/ImageTag';
import { toast } from 'react-toastify';

export const Sucess_Payment = () => {
    const naviagate = useNavigate()
    const CartProductList = useSelector(state => state?.cartId)
    const [success_Payment_data, setSucess_Payment_Data] = useState({})
    const [indexUpdate, setIndexUpdate] = useState(1)
    const [IsLoading, setIsLoading] = useState(true)
    const [order_done, setOrder_Done] = useState(false)
    const cartId = JSON.parse(localStorage.getItem("cartId"));

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const paymentId = searchParams.get('paymentId');
    const token = searchParams.get('token');
    const payerId = searchParams.get('PayerID');

    const Payment_State = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.transaction_success,
            method: "post",
            body: {
                "cartId": cartId?.cartId,
                "paymentId": paymentId,
                "PayerID": payerId,
                "token": token
            }

        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    console.log('res Payment_State ============== dd', res)
                    setSucess_Payment_Data(res?.data)
                    setIsLoading(false)
                    setIndexUpdate(2)
                }
            },
            err => {
                console.log('err', err)
                if (err?.error) {
                    toast.error(err?.message)
                }
                setIsLoading(false)
            }
        )
    }

    const Order_Place = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.order_place,
            method: "post",
            body: {
                "cartId": cartId?.cartId,
                "addressId": cartId?.addressId ? cartId?.addressId : "",
                "transactionId": success_Payment_data?.transactionId
            }

        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    console.log('res Order_Place ==============', res)
                    setIsLoading(false)
                    setOrder_Done(true)
                    setIndexUpdate(3)
                    localStorage.removeItem('cartId');
                }
            },
            err => {
                console.log('err', err)
                if (err?.error) {
                    toast.error(err?.message)
                }
                setIsLoading(false)
            }
        )
    }

    const Continue_Shopping = () => {
        localStorage.removeItem('cartId');
        naviagate("/")
    }

    useEffect(() => {
        Payment_State()
    }, [paymentId, token, payerId])

    useEffect(() => {
        if (success_Payment_data?.transactionId) {
            Order_Place()
        }
    }, [success_Payment_data?.transactionId])

    return (
        <div className='w max-w-2xl m-auto h-screen flex flex-col justify-center items-center'>
            <div className='logoImage shadow-md mb-8'>
                <ImageTag
                    src={image?.headerLogo}
                    className="w-full"
                />
            </div>
            <Stepper index={indexUpdate} width={'100%'}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepIndicator>
                            <StepStatus
                                complete={IsLoading ? <StepIcon1 /> : <StepIcon />}
                                incomplete={<StepNumber />}
                                active={<StepNumber />}
                            />
                        </StepIndicator>

                        <Box flexShrink='0'>
                            <StepTitle>{step.title}</StepTitle>
                            <StepDescription>{step.description}</StepDescription>
                        </Box>

                        <StepSeparator />
                    </Step>
                ))}
            </Stepper>
            {
                order_done && (
                    <div className='order_sucessFull'>
                        <FaCheckSquare className='w-10 h-10' />
                        <p>Order Successfully Placed.</p>
                        <div className='bg-white cursor-pointer text-green-800 px-3 py-1 mt-2 rounded-sm text-sm' onClick={Continue_Shopping}>Continue Shopping</div>
                    </div>
                )
            }
        </div>
    )
}

const steps = [
    { title: 'Payment', description: 'Payment Status' },
    { title: 'Order', description: 'Order Place' },
    { title: 'Order Successfully.', description: 'Order Successfully Placed.' },
]


export const StepIcon1 = () => {
    return (
        <div>
            <Spinner width={4} height={4} />
        </div>
    )
}

