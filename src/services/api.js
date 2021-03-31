import axios from "axios";

//https://api.hgbrasil.com/weather?key=6ef45251&lat=-1.36259&lon=-48.4063325;

export const key = "6ef45251";

const api = axios.create({
  baseURL: "https://api.hgbrasil.com"
})

export default api;




