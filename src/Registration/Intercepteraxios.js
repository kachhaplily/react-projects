import axios from "axios";

let mytoken=JSON.parse(localStorage.getItem("user"))
const authFetch=axios.create({
    baseURL:"http://localhost:4000/"
})

authFetch.interceptors.request.use((request)=>{
    request.headers["Authorization"]=`Bearer ${mytoken.data.jwtToken} `
    return request;
},(error)=>{
    return Promise.reject(error);
})

authFetch.interceptors.response.use((response)=>{
    return response;
},(error)=>{
    console.log(error.response);
    if (error.response.status === 404) {
      // do something
      console.log('NOT FOUND');
    }
    if (error.response.status === 401) {
      // do something
      console.log('NOT FOUND');
    }
    return Promise.reject(error);
})

export default authFetch;
