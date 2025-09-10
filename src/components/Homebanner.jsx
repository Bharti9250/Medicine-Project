import React from 'react';
import { RiDoubleQuotesR } from "react-icons/ri";

const Homebanner = () => {
    return (
        <div className='HomebannerSection container my-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='HomebannerLeftSection'>
                        <div><button className='btn'>Why choose us</button></div>
                        <h4 className='' style={{ fontSize: "40px" }}>Unique approach to your health needs</h4>

                        <div className='Homebannertxt'>
                            <p>Public Healthcare been a lifesaver! Large network of medicines with great offers and good customer support. I’ve been using them for the past 4 years and appreciate the convenience of home delivery, especially during the lockdown. Highly recommend Healthcare for online purchases.</p>
                            <div className='HomebannertxtIcon'>
                                <div className='HomebannerProfile d-flex me-2'>
                                    <div className='HomebannerProfileImg'><img src="/Img/img.png" alt="" /></div>
                                    <div className='HomebannerProfileTxt'>
                                        <h3>Pulkit Malik</h3>
                                        <p className='mb-0'>Patient</p>
                                    </div>
                                </div>
                                <div style={{fontSize:"40px"}}><RiDoubleQuotesR /></div>
                            </div>
                            <span>j</span>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-12'>
                    <div className='row Homebanner'>
                        <div className='col-md-6 col-6 Homebannergroup'>
                            <div className='' style={{ width: "100%" }}><img style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} src="/Img/healthImg1.png" alt="img" /></div>
                            <div className='mt-4' style={{ width: "100%" }}><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="/Img/google.png" alt="img" /></div>
                        </div>
                        <div className='col-md-6 col-6 Homebannergroup '>
                            <div className='' style={{ width: "100%" }}><img style={{ width: "100%", height: "100%", objectFit: "cover" }} src="/Img/smile.png" alt="img" /></div>
                            <div className='mt-4' style={{ width: "100%" }}><img style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }} src="/Img/healthImg.png" alt="img" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homebanner