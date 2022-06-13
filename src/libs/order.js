import axios from "axios";
import constans from 'expo-constants'


const apiUrl = `${constans.manifest.extra.apiMainAppUrl}/api/order`;

export default {
  getOrder (filter = {}) {
    return axios.get(`${apiUrl}`, {params: filter});
  },
  postOrder (payload) {
    return axios.post(`${apiUrl}/add`, payload);
  },
}