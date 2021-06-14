import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID 8-MSEIjhy2rhIWFlR5s4x6nr-ORj8EMAEJolf2kIeEc' }
});