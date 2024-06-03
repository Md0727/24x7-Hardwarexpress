import React, { useState } from 'react';
import { Recent_View } from './Compoents/Recent_View';
import Footer from '../../../../component/Footer/Footer'
import { LayoutContainerMain } from '../../../../component/LayoutContainer/LayoutContainerMain';

export const Furniture_Home = () => {
  
  return (
    <LayoutContainerMain headerDark="headerDark">
      <Recent_View />
    </LayoutContainerMain>
  )
}
