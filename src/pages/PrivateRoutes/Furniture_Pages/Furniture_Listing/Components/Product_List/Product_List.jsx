import React, { useEffect, useState } from 'react'
import { ButtonCustome } from '../../../../../../component/Button/ButtonCustome'
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { APIRequest, ApiUrl } from '../../../../../../utils/api'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../../../../../app/slice/ProductSlice'
import { Screen_Loader } from '../../../../../../component/Screen_Loader/Screen_Loader';
import { BackToButton } from '../../../../../../component/BackToButton/BackToButton';
import { FaFilter } from "react-icons/fa";

export const Product_List = ({sideFilter, setSideFilter}) => {
  const dispatch = useDispatch()
  const [isActiveButton, setIsActiveButton] = useState('Best Seller')
  const [page, setPage] = useState(1);
  const [IsLoading, setIsLoading] = useState(false);
  const [ProductFiltered, setProductFiltered] = useState([])
  const [pageCount, setPageCount] = useState([])
  const filter = useSelector(state => state.product.filter)
  const perams = new URLSearchParams(window.location.search)
  const category_type = perams?.get("category_type")

  const ProductFilteredFun = () => {
    setIsLoading(true)
    let config = {
      url: ApiUrl?.productFiltered,
      method: "post",
      body: filter
    }
    APIRequest(
      config,
      res => {
        if (!res?.error) {
          console.log(res?.data);
          setProductFiltered(res?.data)
          setPageCount(res?.count)
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
    ProductFilteredFun()
  }, [filter])

  useEffect(() => {
    dispatch(setFilter({ category: category_type }))
  }, [])


  const SetFilterButton = (button) => {
    dispatch(setFilter({
      mostPopular: false,
      highToLow: false,
      lowToHigh: false,
      [button.value]: true
    }))
    setIsActiveButton(button.name)
  }

  const handleChange = (event, value) => {
    setPage(value);
    dispatch(setFilter({page: value}))
  };

  // console.log('page', page)
  
  return (
    <div className='max-sm:px-2 product_all'>
      {
        IsLoading && (
          <Screen_Loader />
        )
      }
      <div className='heading_sidebar'>
        <BackToButton
          pageUrl={`products?type=${category_type}`}
          pageTitle={"Back"}
        />
      </div>
      <div className='main_button_div'>
        <div className='sidebar_icon_par' onClick={()=> setSideFilter(!sideFilter)}>
          <FaFilter className='sidebar_icon_' />
        </div>
        {
          buttonName?.map((button, index) => (
            <div className='button_div' key={index} onClick={() => SetFilterButton(button)}>
              <ButtonCustome
                className={`text-md font-bold transition-all duration-500 ${isActiveButton === button?.name ? 'text-white bg-themBgColor border border-themBgColor' : 'text-themBgColor border border-themBgColor bg-white'} rounded-full px-5 m-auto py-1`}
                buttonTitle={button?.name}
                type="text"
              />
            </div>
          ))
        }
      </div>
      <div className='main_card_box mt-5'>
        {
          ProductFiltered?.length > 0 ? (
            ProductFiltered?.map((product, index) => (
              <Link to={`/products/products-details?productId=${product?._id}&category_type=${category_type}`} className='card_bx shadow-lg rounded-md p-1' key={`productList${index}`}>
                <div className='images_box'>
                  <img src={product?.images[0] ? product?.images[0] : "assets/images/Funiture/Product_01.png"} alt="Hot_deals_01" className='rounded-md' />
                </div>
                <div className='content_box p-1'>
                  <p className='sfsdfjsdfjds-sfskdj mt-2 font-poppins'>{product?.name}</p>
                  <div className='rating_box flex justify-start items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="10" viewBox="0 0 52 10" fill="none">
                      <path d="M3.75662 1.30943C3.89101 0.896856 4.47471 0.896856 4.60865 1.30943L5.28911 3.40321C5.31839 3.49302 5.37532 3.57128 5.45175 3.62679C5.52818 3.6823 5.62021 3.71224 5.71467 3.71231H7.91641C8.35049 3.71231 8.53057 4.26778 8.17981 4.52312L6.39871 5.81684C6.3222 5.87246 6.26526 5.95087 6.23605 6.04083C6.20684 6.1308 6.20686 6.2277 6.2361 6.31766L6.91611 8.41144C7.0505 8.82446 6.5779 9.1676 6.22714 8.91226L4.44604 7.61854C4.36949 7.56289 4.27728 7.53292 4.18264 7.53292C4.088 7.53292 3.99579 7.56289 3.91923 7.61854L2.13813 8.91226C1.78738 9.1676 1.31478 8.82401 1.44917 8.41144L2.12917 6.31766C2.15842 6.2277 2.15843 6.1308 2.12922 6.04083C2.10001 5.95087 2.04307 5.87246 1.96656 5.81684L0.185461 4.52312C-0.165742 4.26778 0.015235 3.71231 0.448863 3.71231H2.65015C2.7447 3.71233 2.83682 3.68244 2.91334 3.62692C2.98987 3.5714 3.04686 3.49309 3.07617 3.40321L3.75662 1.30943Z" fill="#FFB800" />
                      <path d="M25.0613 1.30943C25.1957 0.896856 25.7794 0.896856 25.9133 1.30943L26.5938 3.40321C26.6231 3.49302 26.68 3.57128 26.7564 3.62679C26.8329 3.6823 26.9249 3.71224 27.0194 3.71231H29.2211C29.6552 3.71231 29.8353 4.26778 29.4845 4.52312L27.7034 5.81684C27.6269 5.87246 27.57 5.95087 27.5407 6.04083C27.5115 6.1308 27.5115 6.2277 27.5408 6.31766L28.2208 8.41144C28.3552 8.82446 27.8826 9.1676 27.5318 8.91226L25.7507 7.61854C25.6742 7.56289 25.582 7.53292 25.4873 7.53292C25.3927 7.53292 25.3005 7.56289 25.2239 7.61854L23.4428 8.91226C23.0921 9.1676 22.6195 8.82401 22.7539 8.41144L23.4339 6.31766C23.4631 6.2277 23.4631 6.1308 23.4339 6.04083C23.4047 5.95087 23.3478 5.87246 23.2713 5.81684L21.4901 4.52312C21.1389 4.26778 21.3199 3.71231 21.7536 3.71231H23.9548C24.0494 3.71233 24.1415 3.68244 24.218 3.62692C24.2946 3.5714 24.3515 3.49309 24.3809 3.40321L25.0613 1.30943Z" fill="#FFB800" />
                      <path d="M14.4051 1.30943C14.5395 0.896856 15.1231 0.896856 15.2571 1.30943L15.9375 3.40321C15.9668 3.49302 16.0238 3.57128 16.1002 3.62679C16.1766 3.6823 16.2686 3.71224 16.3631 3.71231H18.5648C18.9989 3.71231 19.179 4.26778 18.8282 4.52312L17.0471 5.81684C16.9706 5.87246 16.9137 5.95087 16.8845 6.04083C16.8553 6.1308 16.8553 6.2277 16.8845 6.31766L17.5645 8.41144C17.6989 8.82446 17.2263 9.1676 16.8756 8.91226L15.0945 7.61854C15.0179 7.56289 14.9257 7.53292 14.8311 7.53292C14.7364 7.53292 14.6442 7.56289 14.5677 7.61854L12.7866 8.91226C12.4358 9.1676 11.9632 8.82401 12.0976 8.41144L12.7776 6.31766C12.8069 6.2277 12.8069 6.1308 12.7777 6.04083C12.7484 5.95087 12.6915 5.87246 12.615 5.81684L10.8339 4.52312C10.4827 4.26778 10.6637 3.71231 11.0973 3.71231H13.2986C13.3931 3.71233 13.4853 3.68244 13.5618 3.62692C13.6383 3.5714 13.6953 3.49309 13.7246 3.40321L14.4051 1.30943Z" fill="#FFB800" />
                      <path d="M35.7097 1.30943C35.8441 0.896856 36.4278 0.896856 36.5618 1.30943L37.2422 3.40321C37.2715 3.49302 37.3284 3.57128 37.4049 3.62679C37.4813 3.6823 37.5733 3.71224 37.6678 3.71231H39.8695C40.3036 3.71231 40.4837 4.26778 40.1329 4.52312L38.3518 5.81684C38.2753 5.87246 38.2184 5.95087 38.1892 6.04083C38.16 6.1308 38.16 6.2277 38.1892 6.31766L38.8692 8.41144C39.0036 8.82446 38.531 9.1676 38.1803 8.91226L36.3992 7.61854C36.3226 7.56289 36.2304 7.53292 36.1358 7.53292C36.0411 7.53292 35.9489 7.56289 35.8724 7.61854L34.0913 8.91226C33.7405 9.1676 33.2679 8.82401 33.4023 8.41144L34.0823 6.31766C34.1115 6.2277 34.1116 6.1308 34.0823 6.04083C34.0531 5.95087 33.9962 5.87246 33.9197 5.81684L32.1386 4.52312C31.7874 4.26778 31.9684 3.71231 32.402 3.71231H34.6033C34.6978 3.71233 34.7899 3.68244 34.8665 3.62692C34.943 3.5714 35 3.49309 35.0293 3.40321L35.7097 1.30943Z" fill="#FFB800" />
                      <path d="M46.3582 1.30943C46.4926 0.896856 47.0763 0.896856 47.2102 1.30943L47.8907 3.40321C47.92 3.49302 47.9769 3.57128 48.0533 3.62679C48.1297 3.6823 48.2218 3.71224 48.3162 3.71231H50.518C50.952 3.71231 51.1321 4.26778 50.7814 4.52312L49.0003 5.81684C48.9238 5.87246 48.8668 5.95087 48.8376 6.04083C48.8084 6.1308 48.8084 6.2277 48.8377 6.31766L49.5177 8.41144C49.6521 8.82446 49.1795 9.1676 48.8287 8.91226L47.0476 7.61854C46.9711 7.56289 46.8788 7.53292 46.7842 7.53292C46.6896 7.53292 46.5973 7.56289 46.5208 7.61854L44.7397 8.91226C44.3889 9.1676 43.9163 8.82401 44.0507 8.41144L44.7307 6.31766C44.76 6.2277 44.76 6.1308 44.7308 6.04083C44.7016 5.95087 44.6446 5.87246 44.5681 5.81684L42.787 4.52312C42.4358 4.26778 42.6168 3.71231 43.0504 3.71231H45.2517C45.3463 3.71233 45.4384 3.68244 45.5149 3.62692C45.5914 3.5714 45.6484 3.49309 45.6777 3.40321L46.3582 1.30943Z" stroke="#FFB800" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className='text-xs text-blue font-poppins'>{product?.discount}{product?.isPercent ? '%' : '$'} off</span>
                  </div>
                  <div className='price_box_x flex mt-2 justify-between items-center'>
                    <div className='text-xs text-blue font-poppins'>{product?.price} $</div>
                    <div className='product_btn'>
                      <ButtonCustome
                        className="text-xs product_btn1 max-sm:mb-3 font-bold hover:bg-white hover:border-themBgColor border hover:text-themBgColor transition-all duration-500 text-white bg-themBgColor rounded-full px-3 m-auto p-1"
                        buttonTitle="Add to cart"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : 'Retrieval Failure'

        }
      </div>
      <div className='flex justify-end mb-5 mr-12 paginationClass'>
        <Stack spacing={2}>
          <Pagination
            count={Math.round(pageCount / 10)}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </div>
    </div>

  )
}

const buttonName = [
  { name: "Most Popular", value: 'mostPopular' },
  { name: "High to low", value: 'highToLow' },
  { name: "Low to High", value: 'lowToHigh' },
]
