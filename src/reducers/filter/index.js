import { types } from '../../actions/types';

function filteredRestaurants(state = { data: [] }, action) {
  switch (action.type) {
    case types.FILTER_RESTAURANTS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export default filteredRestaurants;
