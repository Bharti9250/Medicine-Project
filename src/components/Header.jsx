import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, Nav, Offcanvas, NavDropdown, Accordion } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaGift } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.png";
import axios from 'axios'
import { useCart } from '../context/Cartcontext';
import { Link } from 'react-router-dom';
import { getAllApiData } from '../context/Datacontext'

const Header = () => {
    const { maniCategory, fetchMailCategory, setSelectedSubCategoryId } = getAllApiData();

    console.log(maniCategory, "productDataproductDataproductDataproductData");

    const { cartItem } = useCart();
    const [showMenu, setShowMenu] = useState(false);
    const [location, setLocation] = useState("Detecting...");

    const handleClose = () => setShowMenu(false);
    const handleShow = () => setShowMenu(true);


    const getLocation = async () => {
        if (!navigator.geolocation) {
            setLocation("Location not supported");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async pos => {
                const { latitude, longitude } = pos.coords;
                const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

                try {
                    const res = await axios.get(url);
                    if (res.data && res.data.address) {
                        const { city, town, village, state, country } = res.data.address;
                        setLocation(city || town || village || state || country || "Unknown");
                    } else {
                        setLocation("Not Found");
                    }
                } catch (error) {
                    console.log(error);
                    setLocation("Error fetching");
                }
            },
            err => {
                setLocation("Permission denied");
                console.log(err);
            }
        );
    };


    function saveSubCateegoryKey(id) {
        setSelectedSubCategoryId(id)
        console.log(id, "isfuhf");

    }




    useEffect(() => {
        getLocation();
        fetchMailCategory();
    }, []);

    return (
        
        <header className="HaederSection border-bottom bg-white shadow-sm sticky-top">
            <Container className="py-2">
                {/* Desktop Header */}
                <Row className="align-items-center d-none d-md-flex">

                    {/* Location + Search */}
                    <Col md={6} className="d-flex align-items-center">
                        <Link to="/" className="me-3">
                            <img src={logo} alt="logo" style={{ height: "40px" }} />
                        </Link>

                        <div className="SearchBar input-group px-3 py-2 rounded-pill bg-light flex-grow-1">
                            <div className="d-flex align-items-center me-2">
                                <FaLocationCrosshairs
                                    className="me-1 cursor-pointer"
                                    style={{ color: "#0552AA", marginRight: "5px" }}
                                    onClick={getLocation}
                                />
                                <span>{location}</span>
                                {/* <IoIosArrowDown className="ms-1" /> */}
                            </div>
                            <Form className="d-flex flex-grow-1">
                                <Form.Control
                                    type="search"
                                    placeholder="Search for medicine and health products"
                                    className="border-0 bg-light"
                                />
                            </Form>
                        </div>
                    </Col>


                    {/* Right Side */}
                    <Col md={6} xs="auto" className="d-flex align-items-center     justify-content-end">
                        <div className="text-danger me-3 d-flex align-items-center">
                            <FaGift className="me-1" /> Offer
                        </div>

                        <Link to="/cart" style={{ textDecoration: "none" }}>
                            <div className="me-3 d-flex align-items-center text-dark">
                                <FaShoppingCart className="me-1" /> Cart
                                <span className="ms-1">({cartItem.length})</span>
                            </div>
                        </Link>

                        <div className="SignInBtn">
                            <Link to="/LoginPage">
                                <button className="btn">
                                    {/* <img className="SignInBtnImg" src="Signin.png" alt="" />     */}
                                    Sign in / Sign up
                                </button>
                            </Link>
                        </div>
                    </Col>
                </Row>


                {/* Mobile Header */}
                <div className='HeaderMobileSection'>
                    <Row className="align-items-center d-flex d-md-none my-3 justify-content-between">

                        <Col xs="auto" md={6}>
                            <GiHamburgerMenu size={24} onClick={handleShow} style={{ cursor: "pointer" }} />
                        </Col>

                        <Col xs="auto" md={6} className="d-flex align-items-center">
                            <div className="text-danger me-3 d-flex align-items-center">
                                <FaGift className="me-1" /> Offer
                            </div>

                            <Link to="/cart" style={{ textDecoration: "none" }}>
                                <div className="d-flex align-items-center text-dark">
                                    <FaShoppingCart className="me-1" /> Cart
                                    <span className="ms-1">({cartItem.length})</span>
                                </div>
                            </Link>
                        </Col>
                    </Row>

                    <Row className="align-items-center d-flex d-md-none my-3 justify-content-between">
                        <Col xs={2} md={2}>
                            <Link to="/">
                                <img src={logo} alt="Logo" className="img-fluid" />
                            </Link>

                        </Col>
                        <Col xs={10} md={10} className="flex-grow-1">
                            <div className="d-flex align-items-center px-3 py-2 rounded-pill bg-light">
                                <FaLocationCrosshairs
                                    className="me-1 text-primary cursor-pointer"
                                    onClick={getLocation}
                                />
                                <span className="fw-semibold text-primary">{location}</span>
                                <Form className="d-flex ms-2">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="border-0 bg-light"
                                    />
                                </Form>
                            </div>
                        </Col>
                    </Row>

                </div>
            </Container>


            {/* Sidebar MObile */}
            <Offcanvas show={showMenu} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="flex-column">
                        {maniCategory?.map((item) => (
                            <Accordion key={item.id} flush>
                                <Accordion.Item eventKey={item.id.toString()}>
                                    <Accordion.Header>{item.name}</Accordion.Header>
                                    <Accordion.Body>
                                        {item.sub_categories?.map((subItem) => (
                                            <div key={subItem.id}>
                                                <Link
                                                    to="/product"
                                                    onClick={() => {
                                                        saveSubCateegoryKey(subItem.id);
                                                        handleClose();
                                                    }}
                                                    className="d-block mb-2 text-decoration-none"
                                                >
                                                    {subItem.name}
                                                </Link>
                                            </div>
                                        ))}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        ))}
                    </Nav>
                </Offcanvas.Body>

            </Offcanvas>



            {/* Bottom Navbar (Desktop only) */}

            <Nav className="justify-content-center border-top py-2 d-none d-md-flex">
                {
                    maniCategory?.map((item, key) => (
                        <Nav.Item key={item.id}>
                            <NavDropdown title={item.name} id={`nav-dropdown-${item.id}`}>
                                {item.sub_categories?.map((subItem) => (
                                    <NavDropdown.Item
                                        key={subItem.id}
                                        as={Link}
                                        to="/product"
                                        onClick={() => saveSubCateegoryKey(subItem.id)}
                                    >
                                        {subItem.name}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav.Item>
                    ))
                }
            </Nav>
        </header>
    )
}

export default Header
