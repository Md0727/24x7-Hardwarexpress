import React, { useEffect, useState } from 'react'
import "../css/Style.css"
import { image } from '../../../../../constent/image'
import { APIRequest, ApiUrl } from '../../../../../utils/api';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Recent_Skeleton from '../../../../../component/Skeleton/Recent_Skeleton/Recent_Skeleton';
import { Search_Product_Filter } from '../../../../../component/Search_Product_Filter/Search_Product_Filter';
import { InputCustome } from '../../../../../component/InputCustome/InputCustome';
import { ButtonCustome } from '../../../../../component/Button/ButtonCustome';
import { FaSearch } from 'react-icons/fa';

export const RecentView = ({ category, setStateInput, setCity, city, statedata, ProductFilteredFun, ProductFiltered }) => {
    const [IsLoading, setIsLoading] = useState(false);
    const [RecentProduct, setRecentProduct] = useState([])
    const [recentProductSketon, setRecentProductSketon] = useState(true)

    const perams = new URLSearchParams(window.location.search)
    const service_type = perams?.get("type")
    const RecentProductFun = () => {
        setIsLoading(true)
        let config = {
            url: `${ApiUrl?.productRecent}`,
            method: "get",
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setRecentProduct(res?.data)
                    setRecentProductSketon(false)
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
        RecentProductFun()
    }, [])

    let eleId = document.getElementById("ProductSearch");
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 150) {
                eleId.classList.add("NewClass")
                console.log('scrolling...');
                // You can perform any action here when scrolling beyond 100 pixels
            } else {
                eleId.classList.remove("NewClass")
                console.log('scrolling... jj');
            }
        }

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [perams]);

    return (
        <div className="App mt-0 funiture_main_container w-fullbg-white">
            {/* <div className=''>
                <BackToButton
                    pageUrl={''}
                    pageTitle={"Back"}
                    category={category}
                />
            </div> */}
            <div id='ProductSearch' className='mb-10 hidden' style={{backgroundColor: '#fff', padding: '20px'}}>
                <div>
                    <p className='text-center'>Search : Enter location</p>
                </div>
                <div className='flex gap-4 mt-4 justify-center items-center shadow-lg responsice_class'>
                    <InputCustome
                        placeholder={'State'}
                        searchValue={statedata}
                        icon={false}
                        name="boxHeight"
                        onChange={(e) => setStateInput(e.target.value)}
                        className="outline-none rounded-sm border border-blue w-full px-3 py-2 placeholder:text-blue text-blue"
                    />
                    <InputCustome
                        placeholder={'City'}
                        searchValue={city}
                        icon={false}
                        name="boxHeight"
                        onChange={(e) => setCity(e.target.value)}
                        className="outline-none rounded-sm border border-blue w-full px-3 py-2 placeholder:text-blue text-blue"
                    />
                    <Search_Product_Filter />
                    <ButtonCustome
                        className={`border border-blue max-sm:text-xs min-md:text-sm font-bold hover:bg-blue hover:text-white transition-all duration-500 text-blue rounded-sm py-2 px-3`}
                        buttonTitle={<FaSearch className='option-image m-auto rounded-md' />}
                        // buttonTitle={'Enter'}
                        type="text"
                        // isLoading={IsLoading}
                        onClick={() => ProductFilteredFun()}
                    />
                </div>
                <div>
                    {
                        !ProductFiltered?.length > 0 && (<p className='text-center'>Record Not Found!</p>)
                    }
                
                </div>
            </div>

            {/* =========== recently view =========== */}
            <div className='recent-view-main'>
                <div className='recent-veiw'>
                    <h1 className='Recently_viewed font-poppins'>Recently view</h1>
                    {/* <h1 className='see_all font-poppins'>See all</h1> */}
                </div>
                <div className='recently_product'>
                    {
                        recentProductSketon && (
                            <Recent_Skeleton />
                        )
                    }
                    {
                        !recentProductSketon && (
                            RecentProduct?.map((item, index) => (
                                <div className='slide_item' key={`recently_product${index}`}>
                                    <Link to={`/products/products-details?productId=${item?.productDetails?._id}`} state={{ id: item?.productDetails?._id, category: category }}>
                                        <img src={item?.productDetails?.images[0] ? item?.productDetails?.images[0] : image?.Ellipse} alt="Ellipse" />
                                    </Link>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}

