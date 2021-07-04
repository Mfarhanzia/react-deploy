import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-9e2f9.firebaseio.com'
});

export default instance;