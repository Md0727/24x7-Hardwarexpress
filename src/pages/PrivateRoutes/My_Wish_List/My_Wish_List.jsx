import React from 'react'
import { My_Wishlist } from './component/My_Wishlist'
import { LayoutContainerMain } from '../../../component/LayoutContainer/LayoutContainerMain'
import LayoutContainer from '../../../component/LayoutContainer/LayoutContainer'

export const My_Wish_List = () => {
    return (
        <LayoutContainerMain headerDark={true}>
            <LayoutContainer className="bg-blue">
                <My_Wishlist />
            </LayoutContainer>
        </LayoutContainerMain>
    )
}
