import React, { useEffect, useState } from 'react'
import { image } from '../../../../constent/image'
import { ImageTag } from '../../../../component/ImageTag/ImageTag'
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { LayoutContainerFull_W } from '../../../../component/LayoutContainer/LayoutContainerFull_W';
import { APIRequest, ApiUrl } from '../../../../utils/api';
import { toast } from 'react-toastify';
import OwlCarousel from 'react-owl-carousel';
import Hero_slider_Skeleton from '../../../../component/Skeleton/Popular_List_Skeleton/Hero_slider_Skeleton';

const BannerSlider = () => {
    const [isLoading, setIsloading] = useState(false)
    const [hereSlider, setHeroSlider] = useState([])
    const getHereSlider = () => {
        setIsloading(true)
        let config = {
            url: `${ApiUrl?.getBanner_all}?type=Hero_Slider`,
            method: "get",
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setHeroSlider(res?.data);
                    setIsloading(false)
                }
            },
            err => {
                if (err?.error) {
                    toast.error(err?.message)
                    setIsloading(false)
                }
            }
        )
    }

    useEffect(() => {
        getHereSlider();
    }, [])

    return (
        <LayoutContainerFull_W>
            {/* testing comments */}
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {
                    isLoading ? <Hero_slider_Skeleton /> : (
                        <OwlCarousel className='owl-theme' {...option}>
                            {hereSlider?.map((slides, index) => (
                                <div class='item' key={index}>
                                    <div className='max-sm:h-[250px] sm:h-[470px] w-full'>
                                        <ImageTag
                                            className="w-full h-full object-cover"
                                            src={slides?.image}
                                            alt={slides?.type}
                                        />
                                    </div>
                                </div>
                            ))}
                        </OwlCarousel>
                    )
                }

                {/* {
                        hereSlider?.map((slide, index) => (
                            <TECarouselItem
                                key={index}
                                itemID={index}
                                className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                            >
                                <ImageTag
                                    src={slide?.image}
                                    alt={slide?.type}
                                    className="w-full h-full"
                                />
                            </TECarouselItem>
                        ))
                    } */}
            </div>
        </LayoutContainerFull_W>
    )
}

export default BannerSlider

const option = {
    loop: true,
    autoplay: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 1,
        },
    }
}