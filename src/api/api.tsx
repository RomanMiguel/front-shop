import axios from "axios";

// const baseURL = "https://shop-ba.herokuapp.com";
const baseURL = "http://localhost:8080";

export const apiShop = axios.create({baseURL})