import { types } from '../../actions/types';

function cities(state = { data: [] }, action) {
  switch (action.type) {
    case types.REQUEST_CITIES:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

export default cities;
