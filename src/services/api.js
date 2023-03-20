import axios from "axios"

// const token = localStorage.getItem("startpn@token") || ""

const api = axios.create({
  baseURL: "",
  // headers: {
  //   Authorization: `Bearer ${token}`
  // }
  transformRequest: [(data, headers) => {
    const token = localStorage.getItem("@startpn:token") || ""
    if(token){
      headers.Authorization = `Bearer ${token}`
    }
    return data
  }]

})

export default api