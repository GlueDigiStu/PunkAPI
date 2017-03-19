import { combineReducers } from 'redux';
import BeerReducer from './reducer_beer';



const rootReducer = combineReducers({
  beerList : BeerReducer
});

export default rootReducer;
