import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-93c1c.firebaseio.com/'
});

export default instance;