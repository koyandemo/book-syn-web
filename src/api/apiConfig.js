import axios from 'axios';
import { API_POINT } from '../utils/initData';


const apiConfig = axios.create({
 baseURL : API_POINT
})


export {apiConfig};