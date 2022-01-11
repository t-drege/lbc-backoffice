import axios from 'axios'

export default axios.create({
  baseURL: process.env.BASE_URL,
  post: {
    'Content-Type': 'application/json'
  },
  /*common : {
    'Authorization': 'Bearer '
  }*/
})
