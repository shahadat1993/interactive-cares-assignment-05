
import axios from "axios";

const api = axios.create({
//   baseURL: "http://localhost:5002"

  baseURL: "https://interactive-cares-assignment-05.onrender.com",
});

export default api;