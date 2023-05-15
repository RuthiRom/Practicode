import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_ADDRESS;

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('An error occurred:', error);
    return Promise.reject(error);
  }
);

export default {
  getTasks: async () => {
    const result = await axios.get()
    return result.data;
  },

  addTask: async (name) => {
    console.log('addTask ', name)
    await axios.post('', { name: name, isComplete: false })
    return {};
  },

  setCompleted: async (id, isComplete) => {
    console.log('setCompleted', { id, isComplete })
    await axios.put(`/${id}`);
    return {};
  },

  deleteTask: async (id) => {
    console.log('deleteTask')
    await axios.delete(`/${id}`)
    return {};
  }
};