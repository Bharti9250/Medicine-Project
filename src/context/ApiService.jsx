import axios from "axios";

const API_URL = "https://medilab.instaviv.com/api"
const reqHeader = { "Content-Type": "application/json" };
const reqHeader_NoAuth = { "Content-Type": "application/json", "No-Auth": "True" };

// Example APIs
// export const loginUser = (data) =>
//   axios.post(`${API_URL}/Authenticate/login`, data, { headers: reqHeader_NoAuth });


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