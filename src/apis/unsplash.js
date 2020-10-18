import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 47b48d4a20797298f2497291631a35ca319b13d9e342328015a0f36762091df2'
    }
});