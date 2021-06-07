import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_END_POINT}/v1`,
});

export default instance;