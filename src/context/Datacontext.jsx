import { useContext, useState } from "react";
import { createContext } from "react";
import axios from "axios";


export const Datacontext = createContext(null);

export const DataProvider = ({children})=>{
    const [carouselData, setCarouselData]= useState();
    const [categoryData, setCategoryData]= useState();
    const [productData, setAllProductData]= useState();
    

    // fetch Carousel API
    const fetchCarouselData = async () =>{
        try {
            const res = await axios.get('jsonData/Carousel.json')
            const GetcarouselData = res.data;
            setCarouselData(GetcarouselData);            
        } catch (error) {
            console.log(error,"error");
        }
    }


    //fetch Categories
    const fetchCategoriesData = async () =>{
        try {
            const res = (await axios.get('jsonData/Categories.json')).data;
            setCategoryData(res);
            // console.log(res,"categories");
            
        } catch (error) {
             console.log(error,"error");
        }
    }

    //fetch All ProductData
    const fetchAllProductData = async () =>{
        try {
            const res = (await axios.get('jsonData/Product.json')).data;
            setAllProductData(res);
            // console.log(res,"Product");
            
        } catch (error) {
             console.log(error,"error");
        }
    }


    return <Datacontext.Provider value={{carouselData,categoryData,productData, fetchCarouselData,fetchCategoriesData, fetchAllProductData }}>
        {children}
    </Datacontext.Provider>
}

export const getAllApiData = () => useContext(Datacontext)
