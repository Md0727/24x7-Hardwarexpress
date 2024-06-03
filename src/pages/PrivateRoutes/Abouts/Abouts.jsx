import React from 'react'
import { LayoutContainerMain } from '../../../component/LayoutContainer/LayoutContainerMain'
import { Abouts } from '../Home/components/Abouts'
import HeaderDark from '../../../component/Header/HeaderDark'
import "./Css/Style.css"

export const AboutsPage = () => {
  return (
    <div>
      <>
        <LayoutContainerMain headerDark={"headerDark"}>
          <Abouts />
        </LayoutContainerMain>
      </>
    </div>
  )
}
