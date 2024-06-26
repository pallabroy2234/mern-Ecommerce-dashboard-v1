import axios from "axios";

// Development URL
const developmentUrl = "http://localhost:3000";

// Production URL

const productionUrl = "https://mern-ecommerce-backend-v1-w1ps.onrender.com"; // Replace this with your actual production URL

// Determine the mode (development or production)
const mode = "production"; // Change this to "production" when deploying

// Select the appropriate API URL based on the mode
const apiBaseUrl = mode === "production" ? productionUrl : developmentUrl;


export const baseUrl = apiBaseUrl;

const api = axios.create({
    // baseURL: "http://localhost:3000/api"
    baseURL: `${apiBaseUrl}/api/`,
    withCredentials: true,
})

export default api
