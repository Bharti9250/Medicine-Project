import React, { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoCartOutline } from "react-icons/io5";
import Relatedproduct from "./Relatedproduct";
import { getAllApiData } from '../../context/Datacontext';


const Singleproduct = () => {
    const { ProductJsonData, fetchAllProductData} = getAllApiData();
    const params = useParams();
    
    const [product, setProduct] = useState(null);


    console.log(ProductJsonData,"jsonProductJsonDataProductJsonData");
    


    const getsingleProduct = async () => {
        try {
            const res = (await axios.get(`https://medilab.instaviv.com/api/store/categories/${params.id}/products/`)).data;
            setProduct(res);
            const product = res
            console.log(product);

        } catch (error) {
            console.log(error, "error");
        }
    };

    useEffect(() => {
        getsingleProduct();
        fetchAllProductData();
    }, [params.id]);


    return (
        <div className="SinglePage container mt-5 mb-5">

            <div className="row">
                <div className="col-md-6">
                    <div>
                        <div className=" SinglePageSection">
                            <div className="SinglePageImg">
                                <div className="Innerimg"><img src="/Img/productitem.png" alt="" /></div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="row">
                                <div className="col-md-4" style={{width:"180px"}}>
                                    <div className="BackImg SinglePageSection" style={{ borderRadius: "10px" }}>
                                        <div className="SinglePageImg">
                                            <div className="Innerimg" style={{ width: "100px", height: "150px" }}><img src="/Img/productitem.png" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{width:"180px"}}>
                                    <div className="BackImg SinglePageSection">
                                        <div className="SinglePageImg">
                                            <div className="Innerimg" style={{ width: "100px", height: "150px" }}><img src="/Img/productitem.png" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4" style={{width:"180px"}}>
                                    <div className="BackImg SinglePageSection">
                                        <div className="SinglePageImg">
                                            <div className="Innerimg" style={{ width: "100px", height: "150px" }}><img src="/Img/productitem.png" alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" ProductDetail col-md-6 mb-4">
                    {product ? (
                        product?.map((item) => (
                        <div className="SinglePageTxt" key={item.id}>
                            <h1 style={{ color: "#00254E" }}>{item.name}</h1>
                            <span>{item.category}</span>
                            <p style={{ color: "#00254E" }}>{item.description} Lorem ipsum dolor sit amet consectetur. Consectetur viverra eu ultrices vitae sit augue augue. Facilisis semper ullamcorper sed viverra mauris feugiat nec luctus augue. Feugiat lacinia purus scelerisque tincidunt pulvinar tempus urna. Proin cursus senectus in vulputate nunc sollicitudin diam dignissim</p>
                            <div className="SinglePagePrice">
                                <span className="SinglePageNewPrice">${item.price}</span>
                                <span className="SinglePageOldPrice">${item.old_price}</span>
                            </div>

                            <div>
                                <button className="btn"><span><IoCartOutline /></span>Add To cart</button>
                            </div>
                        </div>
                    ))
                    ):(
                        <p>Loading.....</p>
                    )}
                </div>
            </div>

            {/* <div className="mt-4">
                <Relatedproduct />
            </div> */}
        </div>
    )
}

export default Singleproduct