import axios, { AxiosInstance } from 'axios'
import 'dotenv/config'

const baseURL =  `${process.env.BASEURL}${process.env.SUFFIXURL}`

const api: AxiosInstance = axios.create({
  baseURL
})

export default api
