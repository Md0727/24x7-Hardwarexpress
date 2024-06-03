import React, { useState } from 'react'
import { LayoutContainerMain } from '../../../component/LayoutContainer/LayoutContainerMain'
import LayoutContainer from '../../../component/LayoutContainer/LayoutContainer'
import { OrderList } from './component/OrderList'

export const Orders = () => {

    return (
        <LayoutContainerMain headerDark={"headerDark"}>
            <LayoutContainer className="bg-blue">
                <OrderList />
            </LayoutContainer>
        </LayoutContainerMain>
    )
}
