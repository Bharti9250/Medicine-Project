import { useState, useEffect } from "react";
import { Nav, Tab, Row, Col, Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllApiData } from "../context/Datacontext";
import { useNavigate } from "react-router-dom";


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

const Babycare = () => {
     const [activeTab, setActiveTab] = useState("Vitamins & Nutrition");
    // const { subCategory, fetchSubCategory } = getAllApiData();
    const { maniCategory, fetchMailCategory, setSelectedSubCategoryId } = getAllApiData();

    useEffect(() => {
        fetchMailCategory();
    }, []);


    useEffect(() => {
        if (maniCategory && maniCategory.length > 0) {
            setActiveTab(maniCategory[0].name);
        }
    }, [maniCategory]);


     const navigate = useNavigate()

    console.log(maniCategory, "subCategorysubCategorysubCategorysubCategory");



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
                            {maniCategory.map((cat) => (
                                <Nav.Item key={cat.id}>
                                    <Nav.Link
                                        className={`TrendingProductsCategory ${activeTab === cat.name ? "active" : ""}`}
                                        onClick={() => setActiveTab(cat.name)}
                                    >
                                        {cat.name}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </div>


                    {/* Mobile Tabs Slider */}
                    <div className="MobileViewTab d-md-none mb-5">
                        <Slider {...mobileTabSettings}>
                            {maniCategory.map((cat) => (
                                <div key={cat.id} className={`px-1 MobileViewTabSelect ${activeTab === cat.name ? "active" : ""}`} >
                                    <Nav.Link
                                        eventKey={cat.name}
                                        onClick={() => setActiveTab(cat.name)}
                                    >
                                        {cat.name}
                                    </Nav.Link>
                                </div>
                            ))}
                        </Slider>
                    </div>

                    {/* Tab Content */}
                    <Tab.Content className="TrendingProductsList">
                        {maniCategory.map((cat) => (
                            <Tab.Pane key={cat.id} eventKey={cat.name}>
                                {/* Desktop Grid */}
                                <Row className="d-none d-md-flex">
                                    {cat.sub_categories
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
                                                <Card className="TrendingProductsCard" onClick={() => navigate(`/product/${item.id}`)} style={{ cursor: "pointer" }}>
                                                    <div  className="TrendingProductsCardImg" >
                                                        <Link  ><Card.Img variant="top" src={item.image || "/Img/productitem.png"} /></Link>
                                                    </div>
                                                    <Card.Body className="TrendingProductsCardContent">
                                                        <div className="CardContentHeading d-flex justify-content-between">
                                                            <h2>{item.name}</h2>
                                                            {/* <div className="d-flex align-items-center">
                                                                <IoMdStar
                                                                    style={{
                                                                        color: "#F6E200",
                                                                        fontSize: "18px",
                                                                        marginRight: "5px",
                                                                    }}
                                                                />
                                                                <p className="mb-0">({item.name})</p>
                                                            </div> */}
                                                        </div>
                                                        <Card.Title className="CardContentTitle mb-0">
                                                            {item.name}
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
                                            .filter((item) => item.category === cat.name)
                                            .slice(0, 8)
                                            .map((item) => (
                                                <div key={item.id} className="px-2 pt-4" style={{ width: "300px" }}>
                                                    <Card className="TrendingProductsCard" onClick={() => navigate(`/product/${item.id}`)} >
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

export default Babycare
