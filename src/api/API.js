import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
const baseURL = process.env.REACT_APP_BASE_URL;

console.log(baseURL)

const API = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

export default API;