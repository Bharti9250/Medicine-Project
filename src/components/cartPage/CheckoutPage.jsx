import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { useCart } from '../../context/Cartcontext'

const CheckoutPage = ({ geoLocation }) => {
    const { cartItem ,TotalCartPrice} = useCart();

    console.log(cartItem, "useCartuseCartuseCart");


    console.log(geoLocation, "local");

    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        Streetaddress: "",
        town: "",
        State: "",
        Postcode: "",
        Phone: "",
        Emailaddress: ""
    });


    useEffect(() => {
        if (geoLocation) {
            setFormData(prev => ({
                ...prev,
                Streetaddress: geoLocation?.suburb || "",
                town: geoLocation?.city || "",
                State: geoLocation?.city_district || "",
                Postcode: geoLocation?.postcode || ""
            }));
        }
    }, [geoLocation]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, "address");
    };

    return (
        <Container className="AddressSection my-5">
            <Row>
                {/* Billing Details */}
                <Col md={7} className="order-2 order-md-1">
                    <h4 className="mb-4" style={{color:"#127E64"}}>Billing details</h4>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="First name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="lastname"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Street address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Street address"
                                name="Streetaddress"
                                value={formData.Streetaddress}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Town / City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Town / City"
                                        name="town"
                                        value={formData.town}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>State / District</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="State / District"
                                        name="State"
                                        value={formData.State}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Postcode / Zip</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Postcode / Zip"
                                        name="Postcode"
                                        value={formData.Postcode}
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Email address"
                                name="Emailaddress"
                                value={formData.Emailaddress}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <div className="d-grid">
                            <Button  type="submit" className="" style={{backgroundColor:"#127E64", color:"#fff", border:"none"}}>
                                Continue
                            </Button>
                        </div>
                    </Form>
                </Col>

                {/* Order Summary */}
                <Col md={5} className="order-1 order-md-2">
                    <h4 className="mb-4" style={{color:"#127E64"}}>Your Order</h4>

                    <Card className="p-3 border-0">
                        {cartItem?.map((item, key) => (
                            <div className="d-flex justify-content-between mb-3">
                                <div>
                                    <strong>{item.name}</strong>
                                    <p className="mb-0 text-muted" style={{ fontSize: "14px" }}>
                                        {item.description}
                                    </p>
                                </div>
                                <span>{item.totalPrice}</span>
                            </div>
                        ))}

                        <hr />
                        <div className="d-flex justify-content-between fw-bold mb-3">
                            <span>Total amount</span>
                            <span>{TotalCartPrice().toFixed(2)}</span>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CheckoutPage;
