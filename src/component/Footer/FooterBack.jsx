import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import footerStyle from './Footer.module.css'
import { ImageTag } from '../ImageTag/ImageTag'
import { image } from '../../constent/image'

const Footer = () => {
    const getToken = JSON.parse(localStorage.getItem('data'))
    const [expanded, setExpanded] = useState(false);

    // Scroll to the top when 'expanded' changes
    useEffect(() => {
        if (expanded) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [expanded]);
    return (
        <>
            <div className={footerStyle?.footer_main}>
                <div className='p-10 m-0  text-white w-full flex max-md:flex-wrap justify-between gap-4'>
                    <div className='lg:w-full max-sm:w-full min-md:w-1/3'>
                        <div className='logo_box max-w-[100px] pb-4'>
                            <ImageTag
                                src={'/assets/images/Logo/mainLogo.png'}
                                alt={'footer logo'}
                                className="w-full h-full cover"
                            />
                        </div>
                        <div className='social-icon flex justify-start gap-4'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                    <path d="M15 0C6.71567 0 0 6.71567 0 15C0 23.2843 6.71567 30 15 30C23.2843 30 30.0001 23.2843 30.0001 15C30 6.71567 23.2842 0 15 0ZM10.998 22.2518H7.70457V11.6118H10.998V22.2518ZM9.33558 10.2184C8.25999 10.2184 7.38803 9.33931 7.38803 8.25511C7.38803 7.17078 8.26011 6.29178 9.33558 6.29178C10.411 6.29178 11.283 7.17078 11.283 8.25511C11.2831 9.33937 10.4111 10.2184 9.33558 10.2184ZM23.34 22.2518H20.0626V16.6667C20.0626 15.1348 19.4807 14.2797 18.2694 14.2797C16.9512 14.2797 16.2625 15.1703 16.2625 16.6667V22.2518H13.1037V11.6118H16.2625V13.0448C16.2625 13.0448 17.2126 11.2872 19.4688 11.2872C21.725 11.2872 23.3401 12.6648 23.3401 15.5147L23.34 22.2518Z" fill="url(#paint0_linear_4132_10993)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4132_10993" x1="4.39339" y1="4.39339" x2="25.6066" y2="25.6066" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#2489BE" />
                                            <stop offset={1} stopColor="#0575B3" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                    <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#2DAAE1" />
                                    <path d="M24.6184 9.03305C23.9108 9.34701 23.1509 9.55925 22.3519 9.65465C23.1674 9.16634 23.7921 8.39256 24.087 7.47162C23.3124 7.9317 22.4647 8.25559 21.5806 8.42923C20.8612 7.66237 19.8353 7.18359 18.7003 7.18359C16.5217 7.18359 14.7548 8.94972 14.7548 11.1296C14.7548 11.4384 14.7896 11.7398 14.8565 12.0291C11.5769 11.8643 8.66937 10.2933 6.72319 7.90624C6.38336 8.48923 6.18884 9.16706 6.18884 9.89027C6.18884 11.2591 6.88556 12.4669 7.94422 13.1743C7.31751 13.1549 6.70456 12.9857 6.1566 12.681V12.7308C6.1566 14.6429 7.51658 16.2372 9.32188 16.5998C8.99025 16.6907 8.64222 16.7382 8.28217 16.7382C8.0276 16.7382 7.78062 16.7141 7.53935 16.6687C8.0415 18.2359 9.49882 19.3766 11.2251 19.4089C9.87456 20.4675 8.17286 21.0986 6.32463 21.0986C6.00629 21.0986 5.69167 21.0796 5.38281 21.0424C7.12938 22.1623 9.20315 22.8161 11.4317 22.8161C18.6895 22.8161 22.6589 16.8033 22.6589 11.5889C22.6589 11.4177 22.6551 11.2478 22.6469 11.0784C23.4202 10.5191 24.0878 9.82646 24.6184 9.03305Z" fill="white" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                    <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="#3C5A9A" />
                                    <path d="M19.8767 4.60352H16.5539C14.582 4.60352 12.3886 5.43287 12.3886 8.29122C12.3983 9.28718 12.3886 10.241 12.3886 11.3145H10.1074V14.9446H12.4592V25.395H16.7808V14.8756H19.6332L19.8913 11.3043H16.7064C16.7064 11.3043 16.7135 9.71564 16.7064 9.25428C16.7064 8.12472 17.8817 8.18941 17.9524 8.18941C18.5117 8.18941 19.5992 8.19104 19.8784 8.18941V4.60352H19.8767Z" fill="white" />
                                </svg>
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" fill="none">
                                    <mask id="mask0_4132_10996" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x={0} y={0} width={30} height={30}>
                                        <path d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z" fill="white" />
                                    </mask>
                                    <g mask="url(#mask0_4132_10996)">
                                        <path d="M6.44531 60.7031C24.2436 60.7031 38.6719 46.2748 38.6719 28.4766C38.6719 10.6783 24.2436 -3.75 6.44531 -3.75C-11.3529 -3.75 -25.7812 10.6783 -25.7812 28.4766C-25.7812 46.2748 -11.3529 60.7031 6.44531 60.7031Z" fill="url(#paint0_radial_4132_10996)" />
                                    </g>
                                    <path d="M19.2188 11.9531C19.866 11.9531 20.3906 11.4285 20.3906 10.7812C20.3906 10.134 19.866 9.60938 19.2188 9.60938C18.5715 9.60938 18.0469 10.134 18.0469 10.7812C18.0469 11.4285 18.5715 11.9531 19.2188 11.9531Z" fill="white" />
                                    <path d="M15 11.25C14.2583 11.25 13.5333 11.4699 12.9166 11.882C12.2999 12.294 11.8193 12.8797 11.5355 13.5649C11.2516 14.2502 11.1774 15.0042 11.3221 15.7316C11.4668 16.459 11.8239 17.1272 12.3484 17.6516C12.8728 18.1761 13.541 18.5333 14.2684 18.6779C14.9958 18.8226 15.7498 18.7484 16.4351 18.4645C17.1203 18.1807 17.706 17.7001 18.118 17.0834C18.5301 16.4667 18.75 15.7417 18.75 15C18.75 14.0054 18.3549 13.0516 17.6517 12.3483C16.9484 11.6451 15.9946 11.25 15 11.25ZM15 16.875C14.6292 16.875 14.2667 16.765 13.9583 16.559C13.65 16.353 13.4096 16.0601 13.2677 15.7175C13.1258 15.3749 13.0887 14.9979 13.161 14.6342C13.2334 14.2705 13.412 13.9364 13.6742 13.6742C13.9364 13.412 14.2705 13.2334 14.6342 13.161C14.9979 13.0887 15.3749 13.1258 15.7175 13.2677C16.0601 13.4096 16.353 13.65 16.559 13.9583C16.765 14.2666 16.875 14.6292 16.875 15C16.875 15.4973 16.6775 15.9742 16.3258 16.3258C15.9742 16.6775 15.4973 16.875 15 16.875Z" fill="white" />
                                    <path d="M19.6875 7.5H10.3125C8.7592 7.5 7.5 8.7592 7.5 10.3125V19.6875C7.5 21.2408 8.7592 22.5 10.3125 22.5H19.6875C21.2408 22.5 22.5 21.2408 22.5 19.6875V10.3125C22.5 8.7592 21.2408 7.5 19.6875 7.5Z" stroke="white" strokeWidth={2} strokeMiterlimit={10} />
                                    <defs>
                                        <radialGradient id="paint0_radial_4132_10996" cx={0} cy={0} r={1} gradientUnits="userSpaceOnUse" gradientTransform="translate(6.44531 28.4766) scale(32.2266)">
                                            <stop stopColor="#FFD676" />
                                            <stop offset="0.25" stopColor="#F2A454" />
                                            <stop offset="0.38" stopColor="#F05C3C" />
                                            <stop offset="0.7" stopColor="#C22F86" />
                                            <stop offset="0.96" stopColor="#6666AD" />
                                            <stop offset="0.99" stopColor="#5C6CB2" />
                                        </radialGradient>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className='lg:w-full max-sm:w-full min-md:w-1/3'>
                        <h3 className='text-white text-lg font-bold not-italic font-poppins pb-2'>Company</h3>
                        <ul>
                            <li className='mb-2'>
                                <Link to='/abouts' className='text-md text-white font-poppins not-italic'>About us</Link>
                            </li>
                            {/* <li className='mb-2'>
                                <Link to='/' className='text-md text-white font-poppins not-italic'>Career</Link>
                            </li> */}
                            {/* <li className='mb-2'>
                                <Link to='/' className='text-md text-white font-poppins not-italic'>Blog</Link>
                            </li> */}
                            {
                                !getToken && (
                                    <li className='mb-2'>
                                        <Link to='/register' className='text-md text-white font-poppins not-italic'>Register as user</Link>
                                    </li>
                                )
                            }
                            <li className='mb-2'>
                                <Link to='https://panel.cmemove.com/register' className='text-md text-white font-poppins not-italic'>Register as vendor</Link>
                            </li>
                            <li className='mb-0'>
                                <Link to='https://panel.cmemove.com/register' className='text-md text-white font-poppins not-italic'>Register as service Provider</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:w-full max-sm:w-full min-md:w-1/3'>
                        <h3 className='text-white text-lg font-bold not-italic font-poppins pb-3'>Quick Links</h3>
                        <ul>
                            <li className='mb-2'>
                                <Link to='/' className='text-md text-white font-poppins not-italic'>Services</Link>
                            </li>
                            {/* <li className='mb-2'>
                                <Link to='/' className='text-md text-white font-poppins not-italic'>For Enterprise</Link>
                            </li> */}
                            <li className='mb-2' onClick={() => setExpanded(!expanded)}>
                                <Link to='/' className='text-md text-white font-poppins not-italic'>Packers & Movers</Link>
                            </li>
                            <li className='mb-2'>
                                <Link to='/products?type=Furniture' className='text-md text-white font-poppins not-italic'>Furniture</Link>
                            </li>
                            <li className='mb-0'>
                                <Link to='/products?type=Appliances' className='text-md text-white font-poppins not-italic'>Appliances</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:w-full max-sm:w-full min-md:w-1/3'>
                        <h3 className='text-white text-lg font-bold not-italic font-poppins pb-3'>Support</h3>
                        <ul>
                            <li className='mb-2'>
                                <Link to='/Contact-Us' className='text-md text-white font-poppins not-italic'>Contact us</Link>
                            </li>
                            <li className='mb-2'>
                                <Link to='https://panel.cmemove.com/register' className='text-md text-white font-poppins not-italic'>Login as service provider</Link>
                            </li>
                            <li className='mb-2'>
                                <Link to='https://panel.cmemove.com/register' className='text-md text-white font-poppins not-italic'>Login as seller of Furniture</Link>
                            </li>
                            <li className='mb-2'>
                                <Link to='https://panel.cmemove.com/register' className='text-md text-white font-poppins not-italic'>Login as seller of Appliances</Link>
                            </li>
                            <li className='mb-0'>
                                <Link to='/' className='text-md text-white font-poppins not-italic'>Driver Partner Terms & Conditions</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:w-full max-sm:w-full min-md:w-1/3'>
                        <div className='mb-4 max-w-[170px]'>
                            <ImageTag
                                src={image?.google}
                                className="w-full h-full"
                                alt='google icon'
                            />
                        </div>
                        <div className='mb-4 max-w-[170px]'>
                            <ImageTag
                                src={image?.app_store}
                                className="w-full h-full"
                                alt='app store icon'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='button-footer w-full text-white border-t-2 py-6 border-yellow' style={{backgroundColor: 'rgb(164 0 1)'}}>
            </div>
        </>
    )
}

export default Footer