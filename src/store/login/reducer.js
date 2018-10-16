import{
    FETCH_USER_DATA,
    FETCH_USER_DATA_FULFILLED,
  } from '../constants';
  
  export default function (state = [], action) {
    switch (action.type) {
      case FETCH_USER_DATA_FULFILLED:
        return Object.assign({}, state, { userList: action.payload });
      case FETCH_USER_DATA:
        return Object.assign({}, state, { selected: action.payload });
  
      default: return state;
    }
  }