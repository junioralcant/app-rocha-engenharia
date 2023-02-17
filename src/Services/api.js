import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
  // baseURL: 'https://api-to-ligado.herokuapp.com/',
  baseURL: 'http://192.168.0.106:3001/',
});

api.interceptors.request.use(async (config) => {
  try {
    const token = await AsyncStorage.getItem('@TOLIGADO:token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    alert(error);
    console.log(error);
  }
});

export default api;
