import axios from "axios";


const tokan = localStorage.getItem("token");

//console.log("Token in authAxiosInstance:", tokan);

const authAxiosInstance = axios.create({
    baseURL: 'https://knowledgeshop.runasp.net/api',

    headers: {
    "Accept-Language": "en",
    "Authorization": `Bearer ${tokan}`,}
});

export default authAxiosInstance;
