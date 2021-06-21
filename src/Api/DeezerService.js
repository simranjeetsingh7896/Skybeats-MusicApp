import axios from 'axios';
const options = {
    method: 'GET',
    //please note this is where I managed to get the base api from
    baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
}
const instance = axios.create(options);

instance.defaults.timeout = 2500;
// Add a request interceptor
instance.interceptors.request.use((config) => ({
    // Do something before request is sent
    ...config,
    headers: {
        ...config.headers,
        // please note this is where I managed to get the api key from for free
        'X-RapidAPI-Key': '14f2e198bcmshb832de74ee0588bp1cd853jsn96b36343467a',
    },
}))

export default instance;



