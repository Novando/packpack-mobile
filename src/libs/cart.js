import axios from "axios";
import constans from 'expo-constants'


const apiUrl = `${constans.manifest.extra.apiMainAppUrl}/api/cart`;

export default {
  getCartByUser (payload) {
    return axios.post(`${apiUrl}/show/user`, payload);
  },
  postCart (payload) {
    return axios.post(`${apiUrl}/add`, payload);
  },
}