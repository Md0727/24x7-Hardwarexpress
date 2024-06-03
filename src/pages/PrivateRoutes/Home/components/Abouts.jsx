import React from 'react'
import LayoutContainer from '../../../../component/LayoutContainer/LayoutContainer'
import { ButtonCustome } from '../../../../component/Button/ButtonCustome'
import { ImageTag } from '../../../../component/ImageTag/ImageTag'
import { image } from '../../../../constent/image'
import { Link } from 'react-router-dom'
import Accordion from '../../../../page_component/Accordion/Accordion'
import Jumbotron from '../../../../component/Jumbotron/Jumbotron'

export const Abouts = () => {
    const getToken = JSON.parse(localStorage.getItem('data'))
    const movePage = () => {

    }
    return (
        <>
            <Jumbotron
                title="About Us"
                logTitle="The App Store is completely free to use. Apps can be free or paid."
            />
            <div className="flex flex-wrap mb-10 py-16">
                <div className="w-full sm:w-8/12 mb-10">
                    <div className="container mx-auto h-full sm:p-10">
                        
                        <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
                            <div className="w-full">
                                <h1 className="text-4xl lg:text-6xl font-bold">Find your <span className="text-yellow">greeny</span> stuff for <br /> your room</h1>
                                <div className="w-20 h-2 bg-yellow my-4" />
                                <p className="text-xl mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae maiores neque eaque ea odit placeat, tenetur illum distinctio nulla voluptatum a corrupti beatae tempora aperiam quia id aliquam possimus aut.</p>
                                <button className="bg-yellow-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">Learn More</button>
                            </div>
                        </header>
                    </div>
                </div>
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <img src="/assets/images/Abouts/about-us.jpg" alt="about-us" className="w-full h-48 object-cover sm:h-screen" />
                </div>
            </div>
        </>
    )
}
