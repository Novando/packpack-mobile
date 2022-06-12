import axios from "axios";
import constans from 'expo-constants'


const apiUrl = `${constans.manifest.extra.apiMainAppUrl}/api/product`;

export default {
  getProducts (filter = {}) {
    return axios.get(`${apiUrl}`, {params:filter});
  },
  getProductDetail (id) {
    return axios.get(`${apiUrl}/show/${id}`, {params:{}});
  },
}