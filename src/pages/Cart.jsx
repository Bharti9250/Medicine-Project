import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Form, FormControl, InputGroup, } from 'react-bootstrap';
import CartItem from '../components/cartPage/CartItem';
import { useCart } from '../context/Cartcontext'

function Cart() {

    const { cartItem } = useCart()

    console.log(cartItem, "cartImte");


    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Medecine name with viramins',
            description: 'Lorem ipsum dolor sit amet consectetur...',
            details: '12 Capsule in 1 pack',
            price: 675.00,
            quantity: 1,
        },
        {
            id: 2,
            name: 'Medecine name with viramins',
            description: 'Lorem ipsum dolor sit amet consectetur...',
            details: '12 Capsule in 1 pack',
            price: 675.00,
            quantity: 1,
        },
        {
            id: 3,
            name: 'Medecine name with viramins',
            description: 'Lorem ipsum dolor sit amet consectetur...',
            details: '12 Capsule in 1 pack',
            price: 675.00,
            quantity: 1,
        },
    ]);


    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        const newTotal = cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setTotalAmount(newTotal);
    }, [cartItem]);

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(currentItems =>
            currentItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );

        console.log(id,"summ");
        
    };
    
    const handleRemoveItem = (id) => {
        setCartItems(currentItems => currentItems.filter(item => item.id !== id));
    };


    return (
        <div>
            <Container className="CartSection my-4">
                <div className='CartSectionBanner'>
                    <Row className="align-items-center">
                        <Col>
                            <div className='d-flex align-items-center gap-3'>
                                <div style={{backgroundColor:"#73E8CC", borderRadius:"5px"}}>
                                    <span><img src="/Img/cart.png" alt="" /></span>
                                </div>
                                <div>
                                    <h4 style={{color:"#127E64"}} className="fw-bold mb-0">Your Cart</h4>
                                    <p className="text-muted mb-0">{cartItem.length} products in the cart</p>
                                </div>
                            </div>
                        </Col>
                        <Col className="text-end">
                            <Button variant="success" className="rounded-full">View cart</Button>
                        </Col>
                    </Row>
                </div>

                {cartItem.map(item => (
                    <CartItem key={item.id} item={item} onQuantityChange={handleQuantityChange}
                        onRemove={handleRemoveItem} />
                ))}

                <hr className="my-4" />

                <Row className="mt-4">
                    <Col xs={6} className="text-start">
                        <h4 className="fw-bold">Total amount</h4>
                    </Col>
                    <Col xs={6} className="text-end">
                        <h4 className="fw-bold">₹ {totalAmount.toFixed(2)}</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cart