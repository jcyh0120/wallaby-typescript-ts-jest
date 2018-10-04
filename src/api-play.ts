import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com'

const callApi = async function (id) {
  axios // ?
  const todoApiResponse = await axios.get(`${url}/todos/${id}`)

  return todoApiResponse.data
}

export default callApi
