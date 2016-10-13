import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';

export function fetchData(){

	//sending request to /refresh endpoint of node server
  const url = '/refresh';
  const request = axios.post(url);
  return{
    type: FETCH_DATA,
    payload: request
  }


}