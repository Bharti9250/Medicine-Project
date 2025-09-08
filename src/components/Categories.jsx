import React, { useEffect } from "react";
import { getAllApiData } from "../context/Datacontext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Categories = () => {
    const { categoryData, fetchCategoriesData } = getAllApiData();

    useEffect(() => {
        fetchCategoriesData();
    }, []);

    // Slider settings for mobile
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 768, // mobile
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false, // swipe only
                },
            },
        ],
    };

    return (
        <div className="container my-5">
            {/* Desktop Grid */}
            <div className="d-none d-md-flex gap-3" >
                {categoryData ? (
                    categoryData.map((item, i) => (
                        <div key={i} className="text-center mb-3" >
                            <div className="CategoryProduct">
                                <Link to="/product">
                                    <img
                                        src={item.catImg}
                                        alt={item.catName || "Category"}
                                        className="img-fluid rounded"
                                    />
                                </Link>
                                <p className="mt-2">{item.catName}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            {/* Mobile Slider */}
            <div className="d-md-none">
                {categoryData ? (
                    <Slider {...sliderSettings}>
                        {categoryData.map((item, i) => (
                            <div key={i} className="text-center px-2" >
                                <div
                                    className="CategoryProduct"
                                    style={{ width: "100%", margin: "0 auto" }}
                                >
                                    <Link to="/product">
                                        <img
                                            src={item.catImg}
                                            alt={item.catName || "Category"}
                                            className="img-fluid rounded"
                                        />
                                    </Link>
                                    <p className="mt-2 small">{item.catName}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
};

export default Categories;
