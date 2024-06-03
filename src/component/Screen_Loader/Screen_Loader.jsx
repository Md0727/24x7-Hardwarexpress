import React from 'react'

export const Screen_Loader = () => {
    return (
        <div className="flex items-center justify-center z-10 fixed top-0 left-0 w-full h-full" style={{backgroundColor: 'rgb(0 0 0 / 72%)'}}>
            <div className="flex justify-center items-center space-x-1 text-sm text-gray-700">
                <svg fill="#fff" className="w-10 text-white h-10 animate-spin" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z" fill="currentColor" fillRule="evenodd" />
                </svg>
                <div className='text-white text-2xl'>Loading ...</div>
            </div>
        </div>

    )
}
