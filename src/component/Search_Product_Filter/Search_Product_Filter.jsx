import React, { useEffect, useState } from 'react'
import Search_Bar_Css from "./Search_Bar.module.css"
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { APIRequest, ApiUrl } from '../../utils/api'
import { toast } from 'react-toastify'
import { image } from '../../constent/image';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setSearch_Id } from '../../app/slice/SearchSlice';

export const Search_Product_Filter = () => {
    const dispatch = useDispatch()
    const [ProductFiltered, setProductFiltered] = useState([])
    const [IsLoading, setIsLoading] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const perams = new URLSearchParams(window.location.search)
    let type = perams?.get("type")
    let category_type = perams?.get("category_type")

    const handlerChangeID = (productID) => {
        console.log('productID', productID)
        dispatch(setSearch_Id({ searchID: productID }))
    }

    const handleAutocompleteChange = (event, newValue) => {
        console.log('object', newValue)
        setSelectedValue(newValue);
    };

    const ProductFilteredFun = () => {
        setIsLoading(true)
        let config = {
            url: ApiUrl?.product_Search,
            method: "post",
            body: {
                "name": selectedValue ? selectedValue : "All",
                "category": "Furniture"
            }
        }
        APIRequest(
            config,
            res => {
                if (!res?.error) {
                    setProductFiltered(res?.data)
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
    }, [selectedValue])
    return (
        <div>
            <div className='relative' style={{ maxWidth: 500, width: '100%', margin: 'auto' }}>
                <Stack spacing={2} sx={{ width: 200, margin: 'auto' }}>
                    <Autocomplete
                        // disablePortal
                        // id="combo-box-demo"
                        disableClearable
                        size="small"
                        className={Search_Bar_Css?.Search_Filter}
                        // disableClearable={true}
                        options={ProductFiltered}
                        onInputChange={handleAutocompleteChange}
                        getOptionLabel={(option) => option?.name}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                placeholder="Enter name"
                                variant="outlined"
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',
                                    style: { color: '#252460', border: '1px solid #121212', borderRadius: '2px' } // Change placeholder color here
                                }}
                            />
                        )}
                        renderOption={(props, option) => (
                            <li {...props}>
                                {
                                    option?.images[0] ?
                                        <img src={option?.images[0]} width={35} height={35} alt={option?.name} className="option-image mr-2 rounded-md" />
                                        : <FaSearch className='option-image mr-2 rounded-md' />
                                }
                                <div onClick={() => handlerChangeID(option?._id)}>
                                    <Link to={`/products/products-details?productId=${encodeURIComponent(option?._id)}&category_type=${type}`}>{option?.name}</Link>
                                </div>
                            </li>
                        )}
                    />

                </Stack>
                {
                    IsLoading && (
                        <div className='absolute top-1 right-2 z-2  rounded-md bg-transparent h-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='bg-white' height={30} viewBox="0 0 200 200"><circle fill="#252460" stroke="#252460" strokeWidth={15} r={15} cx={40} cy={100}><animate attributeName="opacity" calcMode="spline" dur={2} values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4" /></circle><circle fill="#252460" stroke="#252460" strokeWidth={15} r={15} cx={100} cy={100}><animate attributeName="opacity" calcMode="spline" dur={2} values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2" /></circle><circle fill="#252460" stroke="#252460" strokeWidth={15} r={15} cx={160} cy={100}><animate attributeName="opacity" calcMode="spline" dur={2} values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin={0} /></circle></svg>
                        </div>
                    )
                }
                {/* {
                    !IsLoading &&
                    <div className='absolute top-1 rounded-md flex items-center justify-center w-8 right-2 z-2 bg-white' style={{ height: '70%' }}>
                        <FaSearch />
                    </div>
                } */}

            </div>

        </div>
    )
}
