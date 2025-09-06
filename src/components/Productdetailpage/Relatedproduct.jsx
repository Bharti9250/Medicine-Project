import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, Form, Pagination } from "react-bootstrap";
import axios from "axios";
import Product from '../../pages/Product';
import { getAllApiData } from '/src/context/Datacontext';

function Relatedproduct() {
    // const { productData, fetchAllProductData } = getAllApiData();

    const [product, setAllProductData] = useState(null);

    const getsingleProduct = async () => {
        try {
            const res = (await axios.get('jsonData/Product.json')).data;
            setAllProductData(res);
            console.log(res,"Product");
            
        } catch (error) {
             console.log(error,"error");
        }
    };

    useEffect(() => {
        getsingleProduct();
    }, []);

    console.log("product");
    




    return (
        <div className='container'>
            <div className='row'>
                {/* Products Grid */}
                {/* <div className="ProductList mb-5">
                    <Row>
                        {product?.map((item) => (
                            <Col key={item.id} xs={12} sm={6} md={4} lg={3} className="mb-4" style={{ padding: "0px 10px" }}>
                                <Card className="ProductListCard h-100">
                                    <div className="ProductListImg">
                                        <div className="WishlistTag" onClick={AddToWishlist}><FaRegHeart /></div>
                                        <div className="" onClick={() => navigate(`/product/${item.id}`)} style={{ width: "200px" }}><Card.Img variant="top" src={item.image || "/Img/productitem.png"} /></div>
                                    </div>
                                    <Card.Body className="ProductCardBody">
                                        <div className="productTitle">
                                            <Card.Title className="fs-6" style={{ color: "#667085" }}>{item.name || item.title}</Card.Title>
                                            <p className="mb-1">₹{item.price?.toFixed(2) || "N/A"}</p>
                                        </div>
                                        <small className="text" style={{ color: "#98A2B3" }}>{truncateText(item?.description, 10)}</small>
                                        <div className="ProductBtn d-flex">
                                            <button className="btn BuyBtn">Buy Now</button>
                                            <button className="btn CartToBtn">Add To Cart</button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div> */}

            </div>
        </div>
    )
}

export default Relatedproduct