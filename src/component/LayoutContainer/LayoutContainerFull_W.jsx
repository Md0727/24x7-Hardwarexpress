import React from 'react'
import styleModule from "./Layouts.module.css"

export const LayoutContainerFull_W = ({ children }) => {
    return (
        <div className={styleModule?.bannerbox}>
            {
                children
            }
        </div>
    )
}
