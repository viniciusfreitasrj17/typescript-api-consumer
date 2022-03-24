import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders } from 'axios'
import 'dotenv/config'

const baseURL =  `${process.env.BASEURL}${process.env.SUFFIXURL}`
const apiKey =  `${process.env.APIKEY}`
const headers: AxiosRequestHeaders = {
  "Content-Type": "application/x-www-form-urlencoded",
  "Accept-Encoding": "application/gzip",
  "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  "X-RapidAPI-Key": apiKey,
}

const configAxios: AxiosRequestConfig = {
  baseURL,
  headers
}

const api: AxiosInstance = axios.create(configAxios)

export default api
