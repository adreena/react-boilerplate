import {FETCH_DATA} from '../actions/index';

const INITIAL_STATE = {data:'Generate a random Text ...'};

export default function( state = INITIAL_STATE, action) {
  switch(action.type){
  	case FETCH_DATA:
  		console.log('refreshing data...');
  		console.log(action.payload.data);
  		let x = { ...state, data:action.payload.data};
  		console.log(x)
  		return x
    default:
    	console.log(state);
      return state;
  }
}