import React from 'react'
import { Contact_Information } from './Component/Contact_Information/Contact_Information'
import { useLocation } from 'react-router-dom'
import { LayoutContainerMain } from '../../../../component/LayoutContainer/LayoutContainerMain'
import Jumbotron from '../../../../component/Jumbotron/Jumbotron'

export const Checkout = () => {
    const location = useLocation();
    const cartIdForBuy = location?.state?.cartdId;
    console.log('object ==========', cartIdForBuy)
    return (
        <LayoutContainerMain headerDark={"headerDark"}>
            <Jumbotron
                title="Checkout"
                logTitle="The App Store is completely free to use. Apps can be free or paid."
            />
            <Contact_Information cartIdForBuy={cartIdForBuy} />
        </LayoutContainerMain>
    )
}
