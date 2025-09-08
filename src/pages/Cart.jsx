import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CartItem from '../components/cartPage/CartItem';
import { useCart } from '../context/Cartcontext';
import { Link } from 'react-router-dom';

function Cart() {
    const { cartItem, removeFromCart, updateQuantity, TotalCartPrice } = useCart();


    console.log(cartItem,"cartItem");
    

    const handleQuantityChange = (id, newQty) => {
        updateQuantity(id, newQty);
    };

    const handleRemoveItem = (id) => {
        removeFromCart(id);
    };

    return (
        <div>
            {cartItem.length > 0 ? (
                <Container className="CartSection my-4">
                    <div className='CartSectionBanner mb-5'>
                        <Row className="align-items-center">
                            <Col>
                                <div className='d-flex align-items-center gap-3'>
                                    <div style={{ backgroundColor: "#73E8CC", borderRadius: "5px" }}>
                                        <span><img src="/Img/cart.png" alt="" /></span>
                                    </div>
                                    <div className='CartView'>
                                        <h4 style={{ color: "#127E64" }} className="CartViewTxt fw-bold mb-0">Your Cart</h4>
                                        <p className="text-muted mb-0">{cartItem.length} products in the cart</p>
                                    </div>
                                </div>
                            </Col>
                            <Col className="text-end">
                                <Button variant="success">View cart</Button>
                            </Col>
                        </Row>
                    </div>

                    {cartItem.map(item => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onQuantityChange={handleQuantityChange}
                            onRemove={handleRemoveItem}
                        />
                    ))}

                    {/* <hr className="my-4" /> */}

                    <Row className="mt-5">
                        <Col xs={6} className="text-start">
                            <h4 className="fw-bold">Total amount</h4>
                        </Col>
                        <Col xs={6} className="text-end">
                            <h4 className="fw-bold">₹ {TotalCartPrice().toFixed(2)}</h4>
                        </Col>
                    </Row>

                    <div className='mt-5'>
                        <Link to="/CheckoutPage">
                            <button className='btn w-100' style={{ backgroundColor: "#198754", color: "#fff" }}>CheckOut</button>
                        </Link>
                    </div>
                </Container>
            ) : (
                <div className="text-center my-5">
                    <div className='EmptyCartImg' style={{width:"250px", margin:"auto"}}>
                        <img style={{width:"100%", height:"100%", objectFit:"contain"}} src="/Img/empty-cart.png" alt="" />
                    </div>
                    <Link to="/product">
                        <button className="btn mt-5" style={{background: "#0552AA", padding: "10px 50px", fontWeight: "700", color:"#fff"}}>Add Product</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Cart;
