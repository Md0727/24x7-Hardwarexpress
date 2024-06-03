import React, { useState } from 'react'
import "./Css/Style.css"
import { Product_List } from './Components/Product_List/Product_List'
import { SideBar_Filter } from './Components/SideBar_Filter/SideBar_Filter'
import { LayoutContainerMain } from '../../../../component/LayoutContainer/LayoutContainerMain'

export const Furniture_Listing = () => {
    const [sideFilter, setSideFilter] = useState(false)

    return (
        <LayoutContainerMain headerDark={"headerDark"}>
            <div className='flex justify-between gap-8 items-start '>
                <div className={`w-1/4 ${sideFilter ? 'side_show' : 'side_hide'}`}>
                    <SideBar_Filter setSideFilter={setSideFilter} sideFilter={sideFilter} />
                </div>
                <div className='w-full'>
                    <Product_List sideFilter={sideFilter} setSideFilter={setSideFilter} />
                </div>
            </div>
        </LayoutContainerMain>
    )
}
