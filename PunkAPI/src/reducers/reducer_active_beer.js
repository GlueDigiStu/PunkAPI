// import {FETCH_BEERS} from '../actions/index';
//
// export default function(state= null, action){
//     console.log('action Received:', action);
//     switch(action.type){
//         case FETCH_BEERS :
//             // return [action.payload.data, ...state];
//             return Object.assign({}, state, {
//                 beers : action.payload.data
//             })
//     }
//
//     return state;
// }