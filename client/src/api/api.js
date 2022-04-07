import axios from "axios"

const instance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

const $api = async({type = 'GET', body, auth = true, url}) => {
  if(auth){
    const token = localStorage.getItem('token')
    instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  }

  let data

  try {
    switch (type) {
      case 'GET':
        data = await instance.get(url)
        break;
      case 'POST':
        data = await instance.post(url, body)
        break;
      case 'PUT':
        data = await instance.put(url, body)
        break;
      case 'DELETE':
        data = await instance.delete(url, {data: body})
        break;
    
      default:
        break;
    }
    return data.data
  } catch (error) {
    if(error.response && error.response.data){
      throw error.response.data.message
    }

    throw error.message
  }
}

export default $api;