import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'http://localhost:3001'
  // http://localhost:5001/e-commerce-store-app/us-central1/api'
});

export default instance;