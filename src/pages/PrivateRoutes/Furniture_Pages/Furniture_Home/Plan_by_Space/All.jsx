import React, { useEffect, useState } from 'react'
import { APIRequest, ApiUrl } from '../../../../../utils/api'
import { toast } from 'react-toastify';
import { Screen_Loader } from '../../../../../component/Screen_Loader/Screen_Loader';
import { Link } from 'react-router-dom';

export const All = ({ tags_title }) => {
    const [IsLoading, setIsLoading] = useState(false);
    const [res_Tags, setRes_Tags] = useState([])
    const perams = new URLSearchParams(window.location.search)
    const service_type = perams?.get("type")
    const Get_All_Tag = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.Product_By_Tag,
            method: "post",
            body: {
                "category": tags_title ? tags_title : "All",
                "limit": 10,
                "page": 1
            }
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setRes_Tags(res?.data)
                    setIsLoading(false)
                }
            },
            err => {
                setIsLoading(false)
                if (err?.error) {
                    toast.error(err?.message)
                }
            }
        )
    }

    useEffect(() => {
        Get_All_Tag()
    }, [tags_title])

    return (
        <div className='mt-5'>
            {
                IsLoading && (
                    <Screen_Loader />
                )
            }
            <h1 style={{ textTransform: 'capitalize' }}>{tags_title}</h1>
            <div className='main_images_box'>
                {
                    res_Tags?.map((image, index) => (
                        <div className='overlay-gallery'>
                            <div key={index} className='images_box shadow-lg rounded-md'>
                                <img src={image?.image} className='rounded-md' alt={`wertyui${index}`} />
                            </div>
                            <div className='overlay_image'>
                                <Link to={`/products/products-details?productId=${image?._id}`} className='title_content_over font-poppins'>{image?.name}</Link>
                            </div>
                        </div>
                    ))
                }
            </div>


            {/* <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                    <div className='overlay-gallery'>
                        <img className="h-auto hover:bg-black hover:bland max-w-full rounded-lg" src="assets/images/Funiture/gallery_img_large.jfif" alt />
                        <div className='title_content_over font-poppins'>Living Room</div>
                    </div>
                    <div className='overlay-gallery'>
                        <img className="h-auto max-w-full rounded-lg" src="assets/images/Funiture/gallery_img_large_01.png" alt />
                        <div className='title_content_over font-poppins'>Dining Room</div>
                    </div>
                    <div className='overlay-gallery'>
                        <img className="h-auto max-w-full rounded-lg" src="assets/images/Funiture/gallery_img_large_02.png" alt />
                        <div className='title_content_over font-poppins'>Bed Room</div>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='overlay-gallery'>
                        <img className="h-auto max-w-full rounded-lg" src="assets/images/Funiture/gallery_img_large_01.png" alt />
                        <div className='title_content_over font-poppins'>Living Room</div>
                    </div>
                    <div className='overlay-gallery'>
                        <img className="h-auto max-w-full rounded-lg" src="assets/images/Funiture/gallery_img_large_04.png" alt />
                        <div className='title_content_over font-poppins'>Bed Room</div>
                    </div>
                    <div className='overlay-gallery'>
                        <img className="h-auto max-w-full rounded-lg" src="assets/images/Funiture/gallery_img_large_01.png" alt />
                        <div className='title_content_over font-poppins'>Kitchen</div>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='overlay-gallery'>
                        <img className="h-auto max-w-full rounded-lg" src="assets/images/Funiture/gallery_img_large_03.png" alt />
                        <div className='title_content_over font-poppins'>Dining Room</div>
                    </div>
                    <div className='overlay-gallery'>
                        <img className="h-auto max-w-full rounded-lg" src="assets/images/Funiture/gallery_img_large_02.png" alt />
                        <div className='title_content_over font-poppins'>Bed Room</div>
                    </div>
                    <div className='overlay-gallery'>
                        <img className="h-auto max-w-full rounded-lg" src="assets/images/Funiture/gallery_img_large_03.png" alt />
                        <div className='title_content_over font-poppins'>Kitchen</div>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='overlay-gallery'>
                        <img className="h-auto max-w-full rounded-lg" src="assets/images/Funiture/gallery_img_large_01.png" alt />
                        <div className='title_content_over font-poppins'>Living Room</div>
                    </div>
                    <div className='overlay-gallery'>
                        <img className="h-auto max-w-full rounded-lg" src="assets/images/Funiture/gallery_img_large_05.png" alt />
                        <div className='title_content_over font-poppins'>Bed Room</div>
                    </div>
                    <div className='overlay-gallery'>
                        <img className="h-auto max-w-full rounded-lg" src="assets/images/Funiture/gallery_img_large_02.png" alt />
                        <div className='title_content_over font-poppins'>Kitchen</div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
