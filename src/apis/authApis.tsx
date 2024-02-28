import axios from "axios"


const url: string = "http://localhost:2345"

export const registerApi = async (data: any) => {
    try {
        return await axios.post(`${url}/register`, data).then((res) => {
            return res.data?.data
        })
    } catch (error: any) {
        console.log(error?.message)
    }
}


export const signinApi = async (data: any) => {
    try {
        return await axios.post(`${url}/signin`, data).then((res) => {
            return res.data?.data
        })
    } catch (error: any) {
        console.log(error?.message)
    }
}