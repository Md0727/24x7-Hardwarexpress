import React from 'react'
import { ButtonCustome } from '../Button/ButtonCustome'
import { useNavigate } from 'react-router-dom'
import { ImageTag } from '../ImageTag/ImageTag'
import { image } from '../../constent/image'

export const InquirySucess = ({setComponentId}) => {
    const navigation = useNavigate()
    const backToHome = () => {
        // setComponentId(1)
        navigation("/")
    }
    return (
        <div className='max-sm:px-3'>
            <div className='mt-36'></div>
            <div className='JunkHauler max-w-sm mx-auto max-sm:px-3'>
                <div>
                    <ImageTag
                        src={image?.animatedIcon}
                        alt={'Dooking Done'}
                        className="w-full h-auto"
                    />
                    <p className='text-md font-poppins text-cyan font-400 text-center not-italic my-5'>
                        Your inquiry has been received. The vendor will send you an email containing the quote along with comprehensive details.
                    </p>
                </div>
                <ButtonCustome
                    className={`border border-blue w-full min-md:text-lg font-bold hover:bg-blue hover:text-white transition-all duration-500 text-blue rounded-full px-14 m-auto p-2 `}
                    buttonTitle="Back to Home"
                    type="button"
                    onClick={backToHome}
                />
            </div>
            <div className='mt-12'></div>
        </div>
    )
}
