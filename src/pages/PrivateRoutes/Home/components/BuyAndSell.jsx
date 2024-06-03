import React from 'react'
import LayoutContainer from '../../../../component/LayoutContainer/LayoutContainer'
import { ButtonCustome } from '../../../../component/Button/ButtonCustome'
import { ImageTag } from '../../../../component/ImageTag/ImageTag'
import { Link } from 'react-router-dom'

export const BuyAndSell = () => {
    const getToken = JSON.parse(localStorage.getItem('data'))
    return (
        <div className='about-box bg-blueTransparent '>
            <LayoutContainer>
                <div className='customRom about_parent max-sm:px-3 flex items-start justify-between max-sm:flex-wrap gap-3 py-8'>
                    <div className='lg:w-1/2 md:w-1/2 sm:w-full'>
                        <div className='flex items-end justify-between max-sm:flex-wrap'>
                            <div className='firstImage'>
                                <Link to={'/products?type=Furniture'}>
                                    <ImageTag
                                        src={'assets/images/buyAndSell/buyAndSell_03.png'}
                                        className="w-full h-auto"
                                    />
                                </Link>
                            </div>
                            <div className='TwoImage mb-12'>
                                <Link to={'/products?type=Furniture'}>
                                    <ImageTag
                                        src={"assets/images/buyAndSell/buyAndSell_02.png"}
                                        className="w-full h-auto"
                                    />
                                </Link>
                            </div>

                            <div className='ThreeImage'>
                                <Link to={'/products?type=Furniture'}>
                                    <ImageTag
                                        src={"assets/images/buyAndSell/buyAndSell_01.png"}
                                        className="w-full h-auto"
                                    />
                                </Link>
                            </div>
                            <div className='FourthImage'>
                                <Link to={'/products?type=Furniture'}>
                                    <ImageTag
                                        src={"assets/images/buyAndSell/buyAndSell_00.png"}
                                        className="w-full h-auto"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-1/2 md:w-1/2 sm:w-full'>
                        <h1 className='text-right mb-5 font-poppins text-3xl textShadow-md not-italic font-bold text-blue'>
                            Want to buy Or Sell Furniture<br></br>
                            Move, Store & Ship <br></br>
                            anything, anywhere <br></br>
                        </h1>
                        <p className='text-lg text-blue not-italic mb-4 font-poppins'>
                            Furniture 4 Rooms have it all in one store or online.
                            You can find us and other great furniture store here. Where
                            most shoppers look first for the latest designs.
                        </p>
                        <div className='flex justify-start home_btn1'>
                            <Link to={'https://panel.cmemove.com/login'} target='_blank'>
                                <ButtonCustome
                                    className="sm:text-md home_btn max-sm:text-sm mr-12 font-bold hover:bg-white hover:text-blue transition-all duration-500 text-white bg-blue rounded-full px-10 m-auto p-2"
                                    buttonTitle="Login as Seller"
                                    type="text"
                                />
                            </Link>
                            {
                                !getToken && (
                                    <Link to={'/login'}>
                                        <ButtonCustome
                                            className="sm:text-md home_btn max-sm:text-sm font-bold hover:bg-white hover:text-blue transition-all duration-500 text-white bg-blue rounded-full px-10 m-auto p-2"
                                            buttonTitle="Login as Buyer"
                                            type="text"
                                        />
                                    </Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </LayoutContainer>
        </div>
    )
}
