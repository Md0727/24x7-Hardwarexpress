import React, { useEffect, useState } from 'react'
import LayoutContainer from '../../../../component/LayoutContainer/LayoutContainer'
import { LayoutContainerFull_W } from '../../../../component/LayoutContainer/LayoutContainerFull_W'
import { ButtonCustome } from '../../../../component/Button/ButtonCustome'
import HomeStyle from "./../css/Home.module.css"
import { image } from '../../../../constent/image'
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

export function CardList() {
    const [expanded, setExpanded] = useState(false);

    // Scroll to the top when 'expanded' changes
    useEffect(() => {
        if (expanded) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [expanded]);

    return (
        <>
            <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
                <div className="absolute inset-0">
                    <div className="h-1/3 bg-white sm:h-2/3" />
                </div>
                <div className="relative mx-auto max-w-7xl">
                    <div className="text-center">
                        {/* <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Column me neatly.</h2> */}
                        <h1 className="text-4xl lg:text-6xl font-bold">Find your <span className="text-yellow">greeny</span> for your blogs</h1>
                        <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
                            This is your life and it's ending one minute @ a time...</p>
                    </div>

                    <div className='mt-10'>
                        <OwlCarousel className='owl-theme' {...option}>
                            {
                                [1, 2, 4, 5]?.map((blog) => (
                                    <div className="flex flex-col overflow-hidden rounded-lg ">
                                        <div className="flex-shrink-0">
                                            <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt />
                                        </div>
                                        <div className="flex flex-1 flex-col justify-between bg-white p-6">
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-indigo-600">
                                                    <a href="#" className="hover:underline">Article</a>
                                                </p>
                                                <a href="#" className="mt-2 block">
                                                    <p className="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                                                    <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.</p>
                                                </a>
                                            </div>
                                            <div className="mt-6 flex items-center">
                                                <div className="flex-shrink-0">
                                                    <a href="#">
                                                        <span className="sr-only">Roel Aufderehar</span>
                                                        <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt />
                                                    </a>
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-sm font-medium text-gray-900">
                                                        <a href="#" className="hover:underline">Roel Aufderehar</a>
                                                    </p>
                                                    <div className="flex space-x-1 text-sm text-gray-500">
                                                        <time dateTime="2020-03-16">Mar 16, 2020</time>
                                                        <span aria-hidden="true">·</span>
                                                        <span>6 min read</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                            
                        </OwlCarousel>

                    </div>

                </div>
            </div>

        </>
    )
}


const blogs = [
    {
        title: 'Moving & Storage Containers',
        pera: 'One Size doesn`t fit all. Find the Container that`s right for you. ',
        image: image?.blog_01,
    },
    {
        title: 'Moving Helpers. We packers',
        pera: 'Wondering whether you should pack yourself. Save your back and time. Leave it to the professionals. ',
        image: image?.blog_02
    },
    {
        title: 'Private Relocation',
        pera: 'Changing homes is always exciting, but it is often heavy and time-consuming. For this reason, We are here to help you.',
        image: image?.blog_03
    },
    {
        title: 'Corporate Relocation',
        pera: 'We at CME Move have carried out a number of extensive company relocations in recent years. Serving USA and other Countries.',
        image: image?.blog_04
    },
    {
        title: 'Furniture',
        pera: 'Modern, Antique, Minimalist. Find furniture to love.',
        image: image?.blog_05,
        link: "/products?type=Furniture"
    },
    {
        title: 'Appliance',
        pera: 'Entertaining, Trying a new recipe or starting a new garden project. We have the TOOLS.',
        image: image?.blog_06,
        link: "/products?type=Appliances"
    },
    {
        title: 'Storage',
        pera: 'We store your household goods for a shorter or longer period of time, We store your supplies, Tools, whatever you need storage for.',
        image: image?.blog_07
    },
    {
        title: 'Relocating to another Country? ',
        pera: 'Even though you want do it yourself, There`s a reason to contact us. Our expert experience.',
        image: image?.blog_08
    }
]

const option = {
    loop: true,
    autoplay: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 3,
        },
    }
}