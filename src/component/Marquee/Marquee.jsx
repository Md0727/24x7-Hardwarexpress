import React from 'react'
import LayoutContainer from '../LayoutContainer/LayoutContainer'

export const Marquee = () => {
    return (
        <LayoutContainer>
            <div className='flex items-center hhh marque_parent justify-center my-12 gap-2 max-sm:flex-col'>
                <div className='flex items-center justify-start gap-3'>
                    <p className='tracking-widest font-bold not-italic max-sm:text-lg sm:text-lg font-IBMPlexMono text-blue'>
                        Every minute a new deal is post
                    </p>
                </div>
                <div className='flex items-center justify-start gap-3'>
                    <img className='sm:max-w-5 max-sm:max-w-5' src="assets/images/Animated_icon/NewClock.gif" alt="clok" />
                    <p className='tracking-widest font-bold not-italic max-sm:text-lg sm:text-lg font-IBMPlexMono text-blue'>
                        By Mover Operators
                    </p>
                </div>
                <div className='flex items-center justify-start gap-3'>
                    <img className='sm:max-w-5 max-sm:max-w-5' src="assets/images/Animated_icon/NewClock.gif" alt="clok" />
                    <p className='tracking-widest font-bold not-italic max-sm:text-lg sm:text-lg font-IBMPlexMono text-blue'>
                        Furniture Stores
                    </p>
                </div>
                <div className='flex items-center justify-start gap-3'>
                    <img className='sm:max-w-5 max-sm:max-w-5' src="assets/images/Animated_icon/NewClock.gif" alt="clok" />
                    <p className='tracking-widest font-bold not-italic max-sm:text-lg sm:text-lg font-IBMPlexMono text-blue'>
                        Appliance Stores
                    </p>
                </div>
            </div>
        </LayoutContainer>
    )
}
