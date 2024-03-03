import axios, {AxiosResponse} from "axios";
import {baseURL, token} from "../constans";

export type IRes<T> = Promise<AxiosResponse<T>>

const apiService=axios.create({baseURL})

apiService.interceptors.request.use(request=>
{request.headers.Authorization = `Bearer ${token}`
return request
})

export {apiService}