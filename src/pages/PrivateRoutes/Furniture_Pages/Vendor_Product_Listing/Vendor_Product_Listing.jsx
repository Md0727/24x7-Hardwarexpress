import React from 'react'
import "./Css/Style.css"
import { Product_List } from './Components/Product_List/Product_List'
import { LayoutContainerMain } from '../../../../component/LayoutContainer/LayoutContainerMain'

export const Vendor_Product_Listing = () => {

    return (
        <LayoutContainerMain headerDark={"headerDark"}>
            <div className='flex justify-between gap-8 items-start'>
                <div className='w-full'>
                    <Product_List />
                </div>
            </div>
        </LayoutContainerMain>
    )
}
