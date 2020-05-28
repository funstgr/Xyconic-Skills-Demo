import { connect } from 'react-redux';
import Filter from '../../components/Filter';

import {
  filterRestaurants,
} from '../../actions/actions';

const mapStateToProps = (state) => {
  const {
    restaurants,
    filteredRestaurants,
  } = state;
  return {
    restaurants,
    filteredRestaurants,
  };
};

const mapDispatchToProps = (dispatch) => ({
  filterRestaurants: (restaurants) => { dispatch(filterRestaurants(restaurants)); },
});

const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;
