import dotenv from "dotenv";
import axios from "axios";

//dotenv.config();

//const baseURL = process.env.REACT_APP_BASE_URL;

//console.log(baseURL);

const API = axios.create({
    baseURL: "http://127.0.0.1:8080/api/",
});

export default API;