import axios from "axios";
import constans from 'expo-constants'


const apiUrl = `${constans.manifest.extra.apiMainAppUrl}/api/user`;

export default {
  postRegister (payload) {
    return axios.post(`${apiUrl}/register`, payload);
  },
  postLogin (payload) {
    return axios.post(`${apiUrl}/login`, payload);
  },
}