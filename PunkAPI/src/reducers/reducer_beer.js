import {FETCH_BEERS, FETCH_BEER} from '../actions/index';


export default function(state= null, action){
    switch(action.type){
        case FETCH_BEERS :
            console.log(action.payload);
            return Object.assign({}, state, {
                beers : action.payload.data,
                activeBeer : action.payload.data[0]
            });
        case FETCH_BEER :
            return Object.assign({}, state, {
                activeBeer : action.payload.data[0]
            })
    }

    return state;
}