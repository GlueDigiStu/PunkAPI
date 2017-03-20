import axios from 'axios'

const ROOT_URL = 'https://api.punkapi.com/v2/beers';

export const FETCH_BEERS = 'FETCH_BEERS';
export const FETCH_BEER = 'FETCH_BEER';

export function fetchBeers(query){

    const url = `${ROOT_URL}${query}`;
    const request = axios.get(url);
    return {
        type: FETCH_BEERS,
        payload: request
    };
}

export function showBeer(query){
    const url = `${ROOT_URL}${query}`;
    const request = axios.get(url);
    return {
        type: FETCH_BEER,
        payload: request
    };

}