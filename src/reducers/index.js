import { combineReducers } from 'redux';
import cities from './cities';
import search from './search';
import restaurants from './restaurants';
import filteredRestaurants from './filter';

export default combineReducers({
  cities,
  search,
  restaurants,
  filteredRestaurants,
});
