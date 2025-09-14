import { useContext, useState,useEffect} from "react";
import { createContext } from "react";
import axios from "axios";
import { getSubCategories, Maincategories, getCategoriesProduct, UserRegistration } from './ApiService';


export const Datacontext = createContext(null);

export const DataProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);

    const [registrationUser, setRegistrationUser] = useState([]);
    const [getUserRegistrationFormData, setUserRegistrationFormData] = useState([]);


    const [subCategory, setSubCategory] = useState([]);
    const [maniCategory, setCategory] = useState([]);
    //fetch SubCategory Id
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
    const [productData, SetCategoryById] = useState([]);
    const [carouselData, setCarouselData] = useState();
    const [categoryData, setCategoryData] = useState();

    console.log(selectedSubCategoryId, "selectedSubCategoryId");




    useEffect(() => {
        if (getUserRegistrationFormData && Object.keys(getUserRegistrationFormData).length > 0) {
            fetchRegistrationUser();
        }
    }, [getUserRegistrationFormData]);




    // ---------------------- AUth API ---------------------------//
    const fetchRegistrationUser = async () => {
        debugger
        try {
            setLoading(true);
            console.log("login");

            console.log(getUserRegistrationFormData, "PI");

            const res = await UserRegistration(getUserRegistrationFormData);

            setRegistrationUser(res.data);
            console.log(res.data, "on mobile registration");

        } catch (error) {
            console.error("Error fetching User:", error.response?.data || error.message);
        } finally {
            setLoading(false);
        }
    };


    console.log(getUserRegistrationFormData, "datacontect");












    //Main Category
    const fetchMailCategory = async () => {
        try {
            setLoading(true);
            const res = await Maincategories();
            setCategory(res?.data)
        } catch (error) {
            console.error("Error fetching Category:", err);
        } finally {
            setLoading(false);
        }
    }

    // Main Category product fetch by id 
    const fetchMainCategoryById = async () => {
        try {
            const res = await getCategoriesProduct(selectedSubCategoryId);
            console.log(selectedSubCategoryId, "selectedSubCategoryId");

            SetCategoryById(res?.data)
        } catch (error) {
            console.error("Error fetching Category:", err);
        }
    }


    // Fetch fetchSubCategory
    const fetchSubCategory = async () => {
        try {
            const res = await getSubCategories();
            setSubCategory(res.data);
            console.log(res, "resBlogDATA");


        } catch (err) {
            console.error("Error fetching blogs:", err);
        }
    };


    // fetch Carousel API
    const fetchCarouselData = async () => {
        try {
            const res = await axios.get('jsonData/Carousel.json')
            const GetcarouselData = res.data;
            setCarouselData(GetcarouselData);
        } catch (error) {
            console.log(error, "error");
        }
    }


    //fetch Categories
    const fetchCategoriesData = async () => {
        try {
            const res = (await axios.get('jsonData/Categories.json')).data;
            setCategoryData(res);
            // console.log(res,"categories");

        } catch (error) {
            console.log(error, "error");
        }
    }

    //fetch All ProductData
    const fetchAllProductData = async () => {
        try {
            const res = (await axios.get('jsonData/Product.json')).data;
            setAllProductData(res);
            // console.log(res,"Product");

        } catch (error) {
            console.log(error, "error");
        }
    }


    return <Datacontext.Provider
        value={{
            carouselData,
            categoryData,
            productData,
            subCategory,
            maniCategory,
            selectedSubCategoryId,
            registrationUser,

            fetchCarouselData,
            fetchCategoriesData,
            fetchAllProductData,
            fetchSubCategory,
            fetchMailCategory,
            setSelectedSubCategoryId,
            fetchMainCategoryById,
            fetchRegistrationUser,
            setUserRegistrationFormData,
            loading

        }}>
        {children}
    </Datacontext.Provider>
}

export const getAllApiData = () => useContext(Datacontext)
