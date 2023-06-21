import axios from "axios";

const Api = axios.create({baseURL: "http://note-on-three.vercel.app"})

export default Api;