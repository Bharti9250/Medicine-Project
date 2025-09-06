import React, { useEffect } from 'react'
import { getAllApiData } from '../context/Datacontext'

const Categories = () => {
    const { categoryData, fetchCategoriesData } = getAllApiData();

    useEffect(() => {
        fetchCategoriesData()
    }, [])

    console.log(categoryData);


    return (
        <div className='container my-5'>

            <div className='d-flex AllProductList'>
                {categoryData ? (
                    categoryData.map((item, i) => (
                        <div key={i}>
                            {/* <h1>i</h1> */}
                            <div className='CategoryProduct'>
                                <a href="#">
                                    <img src={item.catImg} alt="img" />
                                </a>
                            </div>
                        </div>

                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Categories