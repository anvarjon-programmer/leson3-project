import axios from "axios";
const axiosClinet = axios.create({
    baseURL: "http://18.139.227.114:3300/api/"
})

axiosClinet.interceptors.request.use((config)=>{
    let token = localStorage.getItem('token');
    if(token){
        config.headers['Authorization'] = `Bearer ${token}`
    }
    return config;
},function(err){
    return Promise.reject(err)
}
)
export default axiosClinet;