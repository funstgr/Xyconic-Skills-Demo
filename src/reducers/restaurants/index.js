import { types } from '../../actions/types';

function restaurants(state = { data: [] }, action) {
  switch (action.type) {
    case types.REQUEST_RESTAURANTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export default restaurants;
