import React, { useEffect } from 'react'
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt, FaGift } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import logo from "../assets/logo.png";
import { FaLocationCrosshairs } from "react-icons/fa6";
import axios from 'axios'
import { IoIosArrowDown } from "react-icons/io";
import { useCart } from '../context/Cartcontext';
import { Link } from 'react-router-dom';

const Header = () => {

    const { cartItem } = useCart();


    const getLocation = async () => {
        navigator.geolocation.getCurrentPosition(async pos => {
            const { latitude, longitude } = pos.coords
            // console.log(latitude, longitude);

            const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
            try {
                const location = await axios.get(url);
                // console.log(location);

            } catch (error) {
                console.log(error);

            }
        })
    }

    useEffect(() => {
        getLocation()
    }, [])


    return (
        <header className="HaederSection border-bottom bg-white shadow-sm">
            <Container className="py-3">
                <Row className="align-items-center">
                    {/* Logo */}
                    <Col xs="auto">
                        {/* <div className="bg-primary" style={{ width: "25px", height: "25px" }}></div> */}
                        <Link to="/">
                            <span className='cursor-pointer'><img src={logo} alt="logo image" /></span>
                        </Link>
                    </Col>

                    {/* Location + Search */}
                    <Col md className="d-flex justify-content-center">
                        <div className='SearchBar input-group'>
                            <div className="d-flex align-items-center px-2 ">
                                <div>
                                    <FaLocationCrosshairs />
                                    <span>Surat, India</span>
                                </div>

                                <span><IoIosArrowDown /></span>
                            </div>
                            <Form className="d-flex w-50">
                                {/* <FaSearch /> */}
                                <Form.Control type="search" placeholder="Search for medicine and health products" />
                                {/* <Button variant="light">
                                <FaSearch />
                            </Button> */}
                            </Form>
                        </div>
                    </Col>



                    {/* Right Side */}
                    <Col xs="auto" className="d-flex align-items-center">
                        <div className="text-danger me-3 d-flex align-items-center">
                            <FaGift className="me-1" /> Offer
                        </div>

                        <Link to="/cart" style={{ textDecoration: "none" }}>
                            <div className="me-3 d-flex align-items-center" style={{ color: "#000", textDecoration: "none" }}>
                                <FaShoppingCart className="me-1" /> Cart

                                <span>{cartItem.length}</span>
                            </div>
                        </Link>

                        <div className='SignInBtn'>
                            <Link to="/LoginPage">
                                <button className='btn'  ><img className='SignInBtnImg' src="Signin.png" alt="" />Sign in / Sign up</button>
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* Bottom Navbar */}
            <Nav className="justify-content-center border-top py-2">
                <Nav.Item><Nav.Link href="#">Featured</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#">Personal Care</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#">Healthcare Conditions</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#">Homeopathy</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#">Vitamins & Nutrition</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#">Healthcare Devices</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="#">Ayurvedic Products</Nav.Link></Nav.Item>
            </Nav>
        </header>
    )
}

export default Header