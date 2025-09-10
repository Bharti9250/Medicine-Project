import React, { useContext, useEffect } from 'react'
import carousel from "../assets/jsonData/Carousel.json";
import {getAllApiData } from '../context/Datacontext';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function Carousel() {
    const { carouselData, fetchCarouselData } = getAllApiData()
      const navigate = useNavigate();

    useEffect(() => {
        fetchCarouselData ()
    }, [])

    console.log(carouselData, "uio");


    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    };
    return (
        <div className='caroselData w-100'>
            {carouselData ? (
                carouselData.map((item, i) => (
                    <Slider {...settings}>
                        <div className='HeroSectionStart'>
                        {/* <h1>{i,"data"}</h1> */}
                        
                            <div className='caroselDataSlide'>
                                <div className='BackcaroselDataSlide'>
                                    <span>{item.text}</span>
                                </div>

                                <div className='SliderTxt'>
                                    <div className='row'>
                                        <div className='col-md-6 TxtSection'>
                                            <div className=''>
                                                <h1>Get Your Medicine Delivered 24-7</h1>
                                                <p>Feeling unwell ar night?? We deliver your meds anytime so you can rest and recover</p>
                                                <div className='ReuseBtn' onClick={() => navigate("/product")}><button className='btn'>Buy now</button> <span><FaArrowRight /></span></div>
                                                <h2>TRUSTED BY BEST</h2>
                                                <div className='d-flex BrandImg'>
                                                    <div><img src="/Img/lupin.png" alt="BrandImg" /></div>
                                                    <div><img src="/Img/himalaya.png" alt="BrandImg" /></div>
                                                    <div><img src="/Img/himalaya.png" alt="BrandImg" /></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='imgSEction'>
                                                <img src="/Img/bannerimg.png" alt="Img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Carousel