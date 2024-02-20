import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/recipients'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const findById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);
  return response.data;
};

const createNew = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}

export default { 
  getAll, 
  createNew
}