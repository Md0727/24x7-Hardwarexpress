import React from 'react'
import LayoutStyle from "./Layouts.module.css"

const LayoutContainer = ({ children }) => {
  return (
    <div className={LayoutStyle?.container}>
      {children}
    </div>
  )
}

export default LayoutContainer