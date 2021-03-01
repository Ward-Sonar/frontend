import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Authorization': `Basic ${process.env.REACT_APP_API_TOKEN}`
  },
});