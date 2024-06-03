import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import HeaderDark from '../Header/HeaderDark'
import TopHeadersDark from '../TopHeader/TopHeadersDark'
import TopHeaders from '../TopHeader/TopHeaders'

export const LayoutContainerMain = ({ children, headerDark }) => {
    return (
        <main className={`main-container w-full bg-white p-0 m-0`}>
            {
                headerDark ? <TopHeadersDark /> : <TopHeaders />
            }
            {children}
            <Footer />
        </main>
    )
}
