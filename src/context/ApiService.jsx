import axios from "axios";

const API_URL = "https://medilab.instaviv.com/api"
const reqHeader = { "Content-Type": "application/json" };
const reqHeader_NoAuth = { "Content-Type": "application/json", "No-Auth": "True" };




// --------------------- Fake APIs ---------------------//

export const fakeProfuctApi = () =>{
   return axios.get(`https://fakestoreapi.com/products`,{reqHeader_NoAuth})
}

// --------------------- Fake APIs ---------------------//


//--------------------------------------- Registration APIES ----------------------------------------//

// Example APIs
export const UserRegistration = (data) =>
  axios.post(`${API_URL}/otp/send-otp/`, data, { headers: reqHeader_NoAuth });

export const optSend = (data) =>
    axios.post(`${API_URL}/accounts/register/`, data, { headers: reqHeader_NoAuth });

export const optVerify = (data) =>
  axios.post(`${API_URL}/accounts/register/`, data, { headers: reqHeader_NoAuth });


//--------------------------------------- ProduCt APIES ----------------------------------------//
export const Maincategories = () => 
    axios.get(`${API_URL}/store/categories/`,{reqHeader_NoAuth})

export const getCategoriesProduct = (id) =>
  axios.get(`${API_URL}/store/categories/${id}/products/`, { headers: reqHeader });


export const getProductSearch = (id) =>
  axios.get(`${API_URL}/store/categories/${id}/products/`, { headers: reqHeader });

export const getProductbyId = (id) =>
  axios.get(`${API_URL}/store/products/${id}`, { headers: reqHeader });

export const getSubCategories = () =>
  axios.get(`${API_URL}/store/subcategories/`, { headers: reqHeader });


export const getSubCategoriesProduct = (id) =>
  axios.get(`${API_URL}/store/subcategories/${id}/products/`, { headers: reqHeader });