import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-central1-humazon-9-9-2019.cloudfunctions.net/api'
  // http://localhost:5001/humazon-9-9-2019/us-central1/api/'
});

instance.defaults.headers.post['Access-Control-Allow-Origin'] = 'https://humazon-9-9-2019.web.app';

export default instance;