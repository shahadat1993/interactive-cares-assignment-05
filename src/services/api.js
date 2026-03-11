import axios from "axios";

const api = axios.create({
//   baseURL: "http://localhost:5002"
baseURL: "https://contact-api.onrender.com"
});

export default api;