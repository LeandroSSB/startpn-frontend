import axios from "axios"

// const token = localStorage.getItem("startpn@token") || ""

const api = axios.create({
  baseURL: "http://localhost:5000",
  // headers: {
  //   Authorization: `Bearer ${token}`
  // }
  transformRequest: [(data, headers) => {

    const token = JSON.parse(localStorage.getItem("@startpn:token")) || ""
    // headers["Content-Type"] = "application/json"
    if(token){
      headers.Authorization = `Bearer ${token}`
    }
    return data
  }, ...axios.defaults.transformRequest]

})

export default api