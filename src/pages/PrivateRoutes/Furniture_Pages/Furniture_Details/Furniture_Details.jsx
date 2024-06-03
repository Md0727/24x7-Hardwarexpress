import React from 'react'
import { Product_Details } from './Components/Product_Details/Product_Details'
import { LayoutContainerMain } from '../../../../component/LayoutContainer/LayoutContainerMain'

export const Furniture_Details = () => {

  return (
    <LayoutContainerMain headerDark={"headerDark"}>
      <Product_Details />
    </LayoutContainerMain>
  )
}
