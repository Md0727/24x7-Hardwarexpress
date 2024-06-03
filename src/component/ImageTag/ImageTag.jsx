import React from 'react'
import { image } from '../../constent/image'

export const ImageTag = (props) => {
    const {
        className,
        src,
        alt,
    } = props
    return (
        <img
            src={src}
            alt={alt}
            className={className}
        />
    )
}
