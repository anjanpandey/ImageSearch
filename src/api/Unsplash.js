import axios from 'axios';

// create the instance of axios client with defaulted properties
export default axios.create ({
    baseURL: 'https://api.unsplash.com/search/photos',
    headers: {
        Authorization: 
        'Client-ID 357a03ce2c8692d651d431d2c3afe24c69336af26d12c20c708280079ca57943'
    }
});