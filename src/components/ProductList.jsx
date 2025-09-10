import { useState,useEffect } from "react";
import { Nav, Tab, Row, Col, Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllApiData } from "../context/Datacontext";

const categories = [
    "Vitamins & Nutrition",
    "Gynecology",
    "Nephrology",
    "Orthopedics",
    "Pediatrics",
    "Gastroenterology",
    "Urology",
];

const products = [
    { id: 1, title: "Quality Health Australia Vitamin D & Calcium", rating: 4.5, category: "Vitamins & Nutrition" },
    { id: 2, title: "Quality Health Australia Vitamin D & Calcium", rating: 4.5, category: "Vitamins & Nutrition" },
    { id: 3, title: "Quality Health Australia Vitamin D & Calcium", rating: 4.5, category: "Vitamins & Nutrition" },
    { id: 4, title: "Quality Health Australia Vitamin D & Calcium", rating: 4.5, category: "Vitamins & Nutrition" },
    { id: 5, title: "Quality Health Australia Vitamin D & Calcium", rating: 4.5, category: "Vitamins & Nutrition" },
    { id: 6, title: "Quality Health Australia Vitamin D & Calcium", rating: 4.5, category: "Vitamins & Nutrition" },
    { id: 7, title: "Quality Health Australia Vitamin D & Calcium", rating: 4.5, category: "Vitamins & Nutrition" },
    { id: 8, title: "Quality Health Australia Vitamin D & Calcium", rating: 4.5, category: "Vitamins & Nutrition" },
    { id: 9, title: "Quality Health Australia Vitamin D & Calcium", rating: 4.5, category: "Urology" },
    { id: 10, title: "Quality Health Australia Vitamin D & Calcium", rating: 4.5, category: "Nephrology" },
    { id: 11, title: "Gynecbhartiiiiiiiiology Product 1", rating: 4.3, category: "Gynecology" },
    { id: 12, title: "Gynecology Product 1", rating: 4.3, category: "Gastroenterology" },
    { id: 13, title: "Gynecology Product 2", rating: 4.6, category: "Pediatrics" },
    { id: 14, title: "Gynecology Product 2", rating: 4.6, category: "Orthopedics" }
];

export default function TrendingProducts() {
    const [activeTab, setActiveTab] = useState("Vitamins & Nutrition");
    const { subCategory, fetchSubCategory } = getAllApiData();

     useEffect(() => {
        fetchSubCategory();         
      }, []);

      console.log(subCategory,"subCategorysubCategorysubCategorysubCategory");
      


    // Slider settings for mobile
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        // slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 576, // for small devices
                settings: {
                    slidesToShow: 1.2, // show 1 full card + part of next
                },
            },
        ],
    };


    // Slider settings for mobile tabs
    const mobileTabSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        // slidesToShow: 2,
        variableWidth: true,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 576,
                settings: { slidesToShow: 2.5 },
            },
        ],
    };

    return (
        <div className="container TrendingProducts">
            {/* Header */}
            <div className="TrendingProductsHeader d-flex justify-content-between align-items-center mb-4">
                <h4>Your Personalized Trending Product!</h4>
                <Link to="/product">
                    See all products <span><FaArrowRight /></span>
                </Link>
            </div>

            {/* Tabs */}
            <div className="TrendingProductsList">
                <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                    {/* Tab Nav */}
                    <div className="d-none d-md-block">
                        <Nav variant="pills" className="mb-5 TrendingProductsTab flex-wrap">
                            {categories.map((cat) => (
                                <Nav.Item key={cat}>
                                    <Nav.Link
                                        className={`TrendingProductsCategory ${activeTab === cat ? "active" : ""}`}
                                        eventKey={cat}
                                        onClick={() => setActiveTab(cat)}
                                    >
                                        {cat}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </div>


                    {/* Mobile Tabs Slider */}
                    <div className="MobileViewTab d-md-none mb-5">
                        <Slider {...mobileTabSettings}>
                            {categories.map((cat) => (
                                <div key={cat} className={`px-1 MobileViewTabSelect ${activeTab === cat ? "active" : ""}`} >
                                    <Nav.Link
                                        // className={`TrendingProductsCategory ${activeTab === cat ? "active" : ""}`}
                                        eventKey={cat}
                                        onClick={() => setActiveTab(cat)}
                                    >
                                        {cat}
                                    </Nav.Link>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Tab Content */}
                    <Tab.Content className="TrendingProductsList">
                        {categories.map((cat) => (
                            <Tab.Pane key={cat} eventKey={cat}>
                                {/* Desktop Grid */}
                                <Row className="d-none d-md-flex">
                                    {products
                                        .filter((item) => item.category === cat)
                                        .slice(0, 8)
                                        .map((item) => (
                                            <Col
                                                key={item.id}
                                                xs={12}
                                                sm={6}
                                                md={4}
                                                lg={3}
                                                className="mb-4 px-2"
                                                style={{ marginTop: "60px" }}
                                            >
                                                <Card className="TrendingProductsCard">
                                                    <div className="TrendingProductsCardImg" style={{ cursor: "pointer" }}>
                                                        <Link to="/product"><Card.Img variant="top" src="/Img/productitem.png" /></Link>
                                                    </div>
                                                    <Card.Body className="TrendingProductsCardContent">
                                                        <div className="CardContentHeading d-flex justify-content-between">
                                                            <h2>{item.category}</h2>
                                                            <div className="d-flex align-items-center">
                                                                <IoMdStar
                                                                    style={{
                                                                        color: "#F6E200",
                                                                        fontSize: "18px",
                                                                        marginRight: "5px",
                                                                    }}
                                                                />
                                                                <p className="mb-0">({item.rating})</p>
                                                            </div>
                                                        </div>
                                                        <Card.Title className="CardContentTitle mb-0">
                                                            {item.title}
                                                        </Card.Title>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        ))}
                                </Row>

                                {/* Mobile Slider */}
                                <div className="d-md-none">
                                    <Slider {...sliderSettings}>
                                        {products
                                            .filter((item) => item.category === cat)
                                            .slice(0, 8)
                                            .map((item) => (
                                                <div key={item.id} className="px-2 pt-4" style={{width:"300px"}}>
                                                    <Card className="TrendingProductsCard">
                                                        <div className="TrendingProductsCardImg">
                                                            <Card.Img variant="top" src="/Img/productitem.png" />
                                                        </div>
                                                        <Card.Body className="TrendingProductsCardContent">
                                                            <div className="CardContentHeading d-flex justify-content-between">
                                                                <h2>{item.category}</h2>
                                                                <div className="d-flex align-items-center">
                                                                    <IoMdStar
                                                                        style={{
                                                                            color: "#F6E200",
                                                                            fontSize: "18px",
                                                                            marginRight: "5px",
                                                                        }}
                                                                    />
                                                                    <p className="mb-0">({item.rating})</p>
                                                                </div>
                                                            </div>
                                                            <Card.Title className="CardContentTitle mb-0">
                                                                {item.title}
                                                            </Card.Title>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            ))}
                                    </Slider>
                                </div>
                            </Tab.Pane>
                        ))}
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    );
}
