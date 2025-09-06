import React from 'react'

const categoryData = [
    {
        "id": 1,
        "catImg": "/Img/card1.png",
        "IMgAlt": "CategorieImg"
    },
    {
        "id": 2,
        "catImg": "/Img/card2.png",
        "IMgAlt": "CategorieImg"
    },
    {
        "id": 3,
        "catImg": "/Img/card.png",
        "IMgAlt": "CategorieImg"
    }
]



function Healthsection() {
    return (
        <div className='container my-5'>
            <div className='row AllProductList'>
                {categoryData ? (
                    categoryData.map((item, i) => (
                        <div className='col-md-4' key={i}>
                            <div className='CategoryProduct w-100' >
                                <a href="#">
                                    <img src={item.catImg} alt="img" />
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}

                {/* <div className='col-md-4' >
                    <div className='d-flex w-100' >
                        <a href="#">
                            <img src="/Img/card.png" alt="img" />
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Healthsection