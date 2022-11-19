import axios from "axios";

export const loginUser = async (body) => {
    return axios.get("/",body)
}