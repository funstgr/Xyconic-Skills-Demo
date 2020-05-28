import { connect } from 'react-redux';
import Header from '../../components/Header';

import {
  fetchCities,
  fetchRestaurantData,
  updateSearch,
} from '../../actions/actions';

const mapStateToProps = (state) => {
  const {
    cities,
    search,
    restaurants,
  } = state;
  return {
    cities,
    search,
    restaurants,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchCities: () => { dispatch(fetchCities()); },
  updateSearch: (search) => { dispatch(updateSearch(search)); },
  fetchRestaurantData: (params) => { dispatch(fetchRestaurantData(params)); },
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
