import { combineReducers } from 'redux';
import BeerReducer from './reducer_beer';
// import ActiveBeer from './reducer_active_beer';



const rootReducer = combineReducers({
    beerList : BeerReducer
});

export default rootReducer;
