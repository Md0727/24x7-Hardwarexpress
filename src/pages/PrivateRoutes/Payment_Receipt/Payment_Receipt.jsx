import React, { useState } from 'react'
import { LayoutContainerMain } from '../../../component/LayoutContainer/LayoutContainerMain'
import LayoutContainer from '../../../component/LayoutContainer/LayoutContainer'
import { Payment_Receipt_Slip } from './compoents/Payment_Receipt_Slip'

export const Payment_Receipt = () => {

    return (
        <LayoutContainerMain headerDark={true}>
            <LayoutContainer className="bg-blue">
                <Payment_Receipt_Slip />
            </LayoutContainer>
        </LayoutContainerMain>
    )
}