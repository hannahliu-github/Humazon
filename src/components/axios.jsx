import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:5001/humazon-9-9-2019/us-central1/api/'
  // http://localhost:5001/e-commerce-store-app/us-central1/api'
});

instance.defaults.headers.post['Access-Control-Allow-Origin'] = 'http://localhost:3001';

export default instance;