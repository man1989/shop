import axios from "axios";
const request = axios.create({
    baseURL: "http://localhost:8083"
});

export async function fetchCategories() {
    const { data: categories } = await request.get("/categories");
    return categories;
}
