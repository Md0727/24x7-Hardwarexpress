import React from 'react'
import LayoutContainer from '../../../../component/LayoutContainer/LayoutContainer'
import { ButtonCustome } from '../../../../component/Button/ButtonCustome'
import { ImageTag } from '../../../../component/ImageTag/ImageTag'
import { image } from '../../../../constent/image'
import { Link } from 'react-router-dom'

export const WantToBuy = () => {
    const getToken = JSON.parse(localStorage.getItem('data'))
    return (
        <div className='about-box bg-blueTransparent my-10'>
            <LayoutContainer>
                <div className='customRom about_parent max-sm:px-3 flex items-start justify-center max-sm:flex-wrap gap-3 py-8'>
                    <div className='lg:w-1/2 md:w-1/2 sm:w-1/2'>
                        <h1 className='mb-5  font-poppins text-3xl textShadow-md not-italic font-bold text-blue'>
                            Want to buy Or Sell Appliance <br></br>MOVE, STORE & SHIP anything, anywhere
                        </h1>
                        <p className='text-lg text-blue not-italic mb-4 font-poppins'>
                            J&J Appliances. User find the best appliances in The User Box
                            We're known worldwide for our latest discoveries.
                        </p>
                        <div className='home_btn1'>
                            <Link to={'https://panel.cmemove.com/login'} target='_blank'>
                                <ButtonCustome
                                    className="text-md home_btn max-sm:text-sm mr-12 max-sm:mb-3 font-bold hover:bg-white hover:text-blue transition-all duration-500 text-white bg-blue rounded-full px-10 m-auto p-2"
                                    buttonTitle="Login as Seller"
                                    type="text"
                                />
                            </Link>
                            {
                                !getToken && (
                                    <Link to={'/login'}>
                                        <ButtonCustome
                                            className="text-md  home_btn max-sm:text-sm font-bold hover:bg-white hover:text-blue transition-all duration-500 text-white bg-blue rounded-full px-10 m-auto p-2"
                                            buttonTitle="Login as Buyer"
                                            type="text"
                                        />
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                    <div className='lg:w-1/2 md:w-1/2 sm:w-1/2'>
                        <div className='wantTowant'>
                            <Link to={'/products?type=Appliances'}>
                                <ImageTag
                                    src={image?.wantTobuy}
                                    alt="Want To Buy"
                                    className="w-auto h-auto text-right"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </LayoutContainer>
        </div>
    )
}
