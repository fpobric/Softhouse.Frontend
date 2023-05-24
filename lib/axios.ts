import axios from "axios";
import config from "../config";

export default axios.create({
  baseURL: config.BACKEND_API_URL,
  headers: { "Content-Type": "application/json" },
});
