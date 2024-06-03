import React, { useState } from 'react'

export const TestingInput = (props) => {
    const [inputValue, setInputValue] = useState('')
    const {
        onChange,
        setUsername,
        value,
        name
    } = props

    const valueHandler = (e) => {
        setUsername(e.target.value)
    }

    // console.log('inputValue ========', inputValue)

    return (
        <div>
            <input className='border'
                onChange={valueHandler}
                type="text"
                name={name}
                value={value}
                id=""
            />
        </div>
    )
}
