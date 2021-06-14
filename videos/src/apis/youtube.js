import axios from 'axios';

const KEY = 'AIzaSyAs2-FJk_otiQr34zcBCBRlbs3we00k6p8'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});