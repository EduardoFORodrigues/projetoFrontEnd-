import axios from "axios";
//BAse da url
//https://api.themoviedb.org/3/
//ULR DA API: https://api.themoviedb.org/3/movie/550?api_key=b0a0c8bfa3379431090ea52c3bb2110e
 
const api  = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'

});

export default api;