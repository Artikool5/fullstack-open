import axios from "axios";
const BASE_URL = "http://localhost:3001/phones";

const getAll = () => {
  const response = axios.get(BASE_URL);
  return response.then((r) => r.data);
};

const create = (newObject) => {
  const response = axios.post(BASE_URL, newObject);
  return response.then((r) => r.data);
};

const update = (id, newObject) => {
  const response = axios.put(`${BASE_URL}/${id}`, newObject);
  return response.then((r) => r.data);
};

const remove = (id) => {
  const response = axios.delete(`${BASE_URL}/${id}`);
  return response.then((r) => r.data);
};

export default { getAll, create, update, remove };
