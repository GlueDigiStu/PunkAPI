import axios from 'axios'

const ROOT_URL = 'https://api.punkapi.com/v2/beers';

export const FETCH_BEERS = 'FETCH_BEERS';

export default function fetchBeers(query){

    const url = `${ROOT_URL}${query}`;
    const request = axios.get(url);

    console.log('request: ', request);

    return {
        type: FETCH_BEERS,
        payload: request
    };
}