import { types } from '../../actions/types';

function search(state = { data: [] }, action) {
  switch (action.type) {
    case types.SET_SEARCH_CITY:
      return {
        ...state,
        data: action.payload.city,
      };
    case types.SET_SEARCH_RESTAURANT_NAME:
      return {
        ...state,
        data: action.payload.name,
      };
    case types.SET_SEARCH_ADDRESS:
      return {
        ...state,
        data: action.payload.address,
      };
    case types.SET_SEARCH_ZIP:
      return {
        ...state,
        data: action.payload.zip,
      };
    case types.UPDATE_SEARCH:
      return {
        ...state,
        data: action.payload.address,
      };
    default:
      return state;
  }
}

export default search;
