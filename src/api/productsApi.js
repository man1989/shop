import axios from "axios";
const request = axios.create({
    baseURL: "http://localhost:8083"
});

export async function fetchProducts(type) {
    const { data: outerwear } = await request.get(type);
    return outerwear;
}