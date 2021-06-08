import { CHANGE_STATE_MAIN} from '../actions/types'; 


import initialState from './initialState';

  
  export default function(state = initialState, action) {
    switch (action.type) {  

        case CHANGE_STATE_MAIN: 
        return {
          ...state,
          [action.payload.name]: action.payload.value,
          payload: false
      }
      default: 
        return state;
    }
  }  