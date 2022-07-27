import axios from 'axios';
// axios.default.baseUrl = 'http://localhost:3000';
const request = axios.create({
    baseURL: 'http://liufusong.top:8080',
})
// export default axios;
export default request;