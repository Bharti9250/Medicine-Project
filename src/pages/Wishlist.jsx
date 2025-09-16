import React from 'react';
import { useWishlist } from '../context/Wishlistcontext';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Pagination } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

function Wishlist() {
    const { AddToWishlist, wishListItem } = useWishlist();
    const navigate = useNavigate()

    console.log(wishListItem, "wislist componet");


    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">My Wishlist</h2>
            {wishListItem.length === 0 ? (
                <div className="text-center">
                    <p className="lead">Your wishlist is empty.</p>
                    <Link to="/">Explore products to add some items!</Link>
                </div>
            ) : (
                <div className="ProductList mb-5 mt-4">
                    <Row>
                        {wishListItem?.map((item) => (
                            <Col key={item.id} xs={6} sm={6} md={4} lg={3} className="mb-4" style={{ padding: "0px 10px" }}>
                                <Card className="ProductListCard h-100">
                                    <div className="ProductListImg">
                                        <div className="WishlistTag" onClick={() => AddToWishlist(item)}>
                                            <FaHeart
                                                style={{
                                                    color: wishListItem.some((i) => i.id === item.id) ? "red" : "gray",
                                                    cursor: "pointer",
                                                }}
                                            />
                                        </div>
                                        <div className="" onClick={() => navigate(`/product/${item.id}`)} style={{ width: "200px", cursor: "pointer" }}><Card.Img variant="top" src={item.image || "/Img/productitem.png"} /></div>
                                    </div>
                                    <Card.Body className="ProductCardBody">
                                        <div className="productTitle gap-2">
                                            <Card.Title className="fs-6" style={{ color: "#667085" }}>{item.name || item.title}</Card.Title>
                                            <p className="mb-1">₹{item.price?.toFixed(2) || "N/A"}</p>
                                        </div>
                                        <small className="text" style={{ color: "#98A2B3" }}>{item?.description}</small>
                                        {/* <div className="ProductBtn d-flex">
                                            <Link to="/CheckoutPage">
                                                <button className="btn BuyBtn" onClick={() => addToCart(item)}>Buy Now</button>
                                            </Link>
                                            <button className="btn CartToBtn" onClick={() => addToCart(item)} >Add To Cart</button>
                                        </div> */}
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </Container>
    )
}

export default Wishlist