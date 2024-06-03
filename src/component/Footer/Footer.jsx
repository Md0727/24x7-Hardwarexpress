import React, { useEffect, useState } from 'react'
import { ImageTag } from '../ImageTag/ImageTag'
import { image } from '../../constent/image'

const Footer = () => {
    const [expanded, setExpanded] = useState(false);

    // Scroll to the top when 'expanded' changes
    useEffect(() => {
        if (expanded) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [expanded]);
    return (
        <>
            <div className="mt-8 pt-9" style={{backgroundColor: "#a40001"}}>
                <div className="mx-auto w-full max-w-[1166px] px-4 xl:px-0">
                    <div className="flex flex-col justify-between sm:px-[18px] md:flex-row md:px-10">
                        <div className="md:w-[316px]">
                            <p className="text-[18px] font-medium text-white">
                            </p>
                            <div className='logo_box max-w-[100px] pb-4'>
                                <ImageTag
                                    src={'/assets/images/Logo/mainLogo.png'}
                                    alt={'footer logo'}
                                    className="w-full h-full cover"
                                />
                            </div>
                            <p />
                            <p className="mt-[18px] text-[15px] font-normal text-white/[80%]">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Eos, fugit non. Incidunt dolorum adipisci, tempore asperiores nemo odio facere officiis enim animi
                                placeat eaque nesciunt alias beatae id, at dicta.</p>
                            <div className='social-icon flex justify-start gap-4 mt-5'>
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
                        <div className="md:w-[316px]">
                            <div className="mt-[23px] flex">
                                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.8472 14.8554L16.4306 12.8764L16.4184 12.8707C16.1892 12.7727 15.939 12.7333 15.6907 12.7562C15.4424 12.7792 15.2037 12.8636 14.9963 13.002C14.9718 13.0181 14.9484 13.0357 14.9259 13.0545L12.6441 14.9998C11.1984 14.2976 9.70595 12.8164 9.00376 11.3895L10.9519 9.07294C10.9706 9.0495 10.9884 9.02606 11.0053 9.00075C11.1407 8.79384 11.2229 8.55667 11.2445 8.31035C11.2661 8.06402 11.2264 7.81618 11.1291 7.58887V7.57762L9.14438 3.15356C9.0157 2.85662 8.79444 2.60926 8.51362 2.44841C8.2328 2.28756 7.9075 2.22184 7.58626 2.26106C6.31592 2.42822 5.14986 3.05209 4.30588 4.01615C3.4619 4.98021 2.99771 6.21852 3.00001 7.49981C3.00001 14.9436 9.05626 20.9998 16.5 20.9998C17.7813 21.0021 19.0196 20.5379 19.9837 19.6939C20.9477 18.85 21.5716 17.6839 21.7388 16.4136C21.7781 16.0924 21.7125 15.7672 21.5518 15.4864C21.3911 15.2056 21.144 14.9843 20.8472 14.8554ZM16.5 19.4998C13.3185 19.4963 10.2682 18.2309 8.01856 15.9813C5.76888 13.7316 4.50348 10.6813 4.50001 7.49981C4.49648 6.58433 4.82631 5.69887 5.42789 5.00879C6.02947 4.3187 6.86167 3.87118 7.76907 3.74981C7.7687 3.75355 7.7687 3.75732 7.76907 3.76106L9.73782 8.16731L7.80001 10.4867C7.78034 10.5093 7.76247 10.5335 7.74657 10.5589C7.60549 10.7754 7.52273 11.0246 7.5063 11.2825C7.48988 11.5404 7.54035 11.7981 7.65282 12.0307C8.5022 13.7679 10.2525 15.5051 12.0084 16.3536C12.2428 16.465 12.502 16.5137 12.7608 16.495C13.0196 16.4762 13.2692 16.3907 13.485 16.2467C13.5091 16.2305 13.5322 16.2129 13.5544 16.1942L15.8334 14.2498L20.2397 16.2232C20.2397 16.2232 20.2472 16.2232 20.25 16.2232C20.1301 17.1319 19.6833 17.9658 18.9931 18.5689C18.3028 19.172 17.4166 19.5029 16.5 19.4998Z" fill="white" />
                                    </svg>
                                </div>
                                <div className="ml-[18px]">
                                    <a href="tel:+000 000 00" className="font-poppins text-[14px] font-medium text-white">+91 000 000 000</a>
                                    <p className="font-poppins text-[12px] font-medium text-white">Support Number</p>
                                </div>
                            </div>
                            <div className="mt-[23px] flex">
                                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                                    <svg width={20} height={15} viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 0H1C0.801088 0 0.610322 0.0790178 0.46967 0.21967C0.329018 0.360322 0.25 0.551088 0.25 0.75V13.5C0.25 13.8978 0.408035 14.2794 0.68934 14.5607C0.970644 14.842 1.35218 15 1.75 15H18.25C18.6478 15 19.0294 14.842 19.3107 14.5607C19.592 14.2794 19.75 13.8978 19.75 13.5V0.75C19.75 0.551088 19.671 0.360322 19.5303 0.21967C19.3897 0.0790178 19.1989 0 19 0ZM10 7.98281L2.92844 1.5H17.0716L10 7.98281ZM7.25406 7.5L1.75 12.5447V2.45531L7.25406 7.5ZM8.36406 8.51719L9.48906 9.55312C9.62743 9.68014 9.80842 9.75062 9.99625 9.75062C10.1841 9.75062 10.3651 9.68014 10.5034 9.55312L11.6284 8.51719L17.0659 13.5H2.92844L8.36406 8.51719ZM12.7459 7.5L18.25 2.45438V12.5456L12.7459 7.5Z" fill="white" />
                                    </svg>
                                </div>
                                <div className="ml-[18px]">
                                    <a href="#" className="font-poppins text-[14px] font-medium text-[#fff]">help@exapmple.com</a>
                                    <p className="font-poppins text-[12px] font-medium text-[#fff]">Support Email</p>
                                </div>
                            </div>
                            <div className="mt-[23px] flex">
                                <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[75%]">
                                    <svg width={18} height={21} viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 4.5C8.25832 4.5 7.5333 4.71993 6.91661 5.13199C6.29993 5.54404 5.81928 6.12971 5.53545 6.81494C5.25162 7.50016 5.17736 8.25416 5.32205 8.98159C5.46675 9.70902 5.8239 10.3772 6.34835 10.9017C6.8728 11.4261 7.54098 11.7833 8.26841 11.9279C8.99584 12.0726 9.74984 11.9984 10.4351 11.7145C11.1203 11.4307 11.706 10.9501 12.118 10.3334C12.5301 9.7167 12.75 8.99168 12.75 8.25C12.75 7.25544 12.3549 6.30161 11.6517 5.59835C10.9484 4.89509 9.99456 4.5 9 4.5ZM9 10.5C8.55499 10.5 8.11998 10.368 7.74997 10.1208C7.37996 9.87357 7.09157 9.52217 6.92127 9.11104C6.75097 8.6999 6.70642 8.2475 6.79323 7.81105C6.88005 7.37459 7.09434 6.97368 7.40901 6.65901C7.72368 6.34434 8.12459 6.13005 8.56105 6.04323C8.9975 5.95642 9.4499 6.00097 9.86104 6.17127C10.2722 6.34157 10.6236 6.62996 10.8708 6.99997C11.118 7.36998 11.25 7.80499 11.25 8.25C11.25 8.84674 11.0129 9.41903 10.591 9.84099C10.169 10.2629 9.59674 10.5 9 10.5ZM9 0C6.81273 0.00248131 4.71575 0.872472 3.16911 2.41911C1.62247 3.96575 0.752481 6.06273 0.75 8.25C0.75 11.1938 2.11031 14.3138 4.6875 17.2734C5.84552 18.6108 7.14886 19.8151 8.57344 20.8641C8.69954 20.9524 8.84978 20.9998 9.00375 20.9998C9.15772 20.9998 9.30796 20.9524 9.43406 20.8641C10.856 19.8147 12.1568 18.6104 13.3125 17.2734C15.8859 14.3138 17.25 11.1938 17.25 8.25C17.2475 6.06273 16.3775 3.96575 14.8309 2.41911C13.2843 0.872472 11.1873 0.00248131 9 0ZM9 19.3125C7.45031 18.0938 2.25 13.6172 2.25 8.25C2.25 6.45979 2.96116 4.7429 4.22703 3.47703C5.4929 2.21116 7.20979 1.5 9 1.5C10.7902 1.5 12.5071 2.21116 13.773 3.47703C15.0388 4.7429 15.75 6.45979 15.75 8.25C15.75 13.6153 10.5497 18.0938 9 19.3125Z" fill="white" />
                                    </svg>
                                </div>
                                <div className="ml-[18px]">
                                    <a href="#" className="font-poppins text-[14px] font-medium text-[#fff]">Sub Nerul, Mumbia,
                                        India, 123456</a>
                                    <p className="font-poppins text-[12px] font-medium text-white">Address</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex w-full flex-col justify-between text-white sm:flex-row md:mt-0 md:max-w-[341px]">
                            <div className>
                                <p className="text-deutziawhite font-inter text-[18px] font-medium leading-normal">Pages</p>
                                <ul>
                                    <li className="mt-[15px]"><a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold" href="/">Home</a></li>
                                    <li className="mt-[15px]"><a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold" href="/abouts">About Us</a></li>
                                    <li className="mt-[15px]"><a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold" href="/blogs">Blog</a></li>
                                    <li className="mt-[15px]"><a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold" href="/login">Login / Register</a></li>
                                    <li className="mt-[15px]"><a className="text-deutziawhite hover:text-deutziawhite/80 font-inter text-[15px] font-normal hover:font-semibold" href="/contact-us">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="mt-6 flex flex-col gap-4 sm:mt-0">
                                <p className="text-deutziawhite font-inter text-[18px] font-medium">Download the app</p>
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
                    </div>
                    <hr className="mt-[30px] text-white" />
                    <div className="flex items-center justify-center pb-8 pt-[9px] md:py-8">
                        <p className="text-[10px] font-normal text-white md:text-[12px]">
                            © Copyright
                            {/* */}2024
                            {/* */}, All Rights Reserved by 24*7 Hardwareexpress. PVT. LTD
                        </p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer