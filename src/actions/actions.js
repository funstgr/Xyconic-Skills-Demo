import axios from 'axios';
import { types } from './types';

// fetches cities from api for autocomplete
export const fetchCities = () => async (dispatch) => {
  await axios.get('https://opentable.herokuapp.com/api/cities')
    .then((res) => {
      dispatch({
        type: types.REQUEST_CITIES,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

// builds an api request string
export const fetchRestaurantData = (params) => async (dispatch) => {
  // initialize the city string to empty string
  let cityString = '?city=';
  if (params.city && params.city.length > 0) {
    cityString += `${params.city}`;
  }
  let dataParamsString = cityString;

  if (params.name && params.name.length > 0) {
    dataParamsString += `&name=${params.name}`;
  }

  if (params.zip && params.zip.length > 0) {
    dataParamsString += `&zip=${params.zip}`;
  }

  if (params.address && params.address.length > 0) {
    dataParamsString += `&address=${params.address}`;
  }

  if (params.city && params.city.length > 0) {
    dataParamsString += '&per_page=100';
  }

  const url = `https://opentable.herokuapp.com/api/restaurants${dataParamsString}`;
  await axios.get(url)
    .then((res) => {
      dispatch({
        type: types.REQUEST_RESTAURANTS,
        payload: res.data,
      });
      updateRestaurants(res.data.restaurants, dispatch);
    })
    .catch((err) => {
      console.log(err);
    });
};

// stored redux state object to build api request
export const updateSearch = (search) => (dispatch) => {
  dispatch({
    type: types.UPDATE_SEARCH,
    payload: {
      search,
    },
  });
};

// updates restaurant filtered results
const updateRestaurants = (filteredResults, dispatch) => {
  dispatch({
    type: types.FILTER_RESTAURANTS,
    payload: {
      filteredResults,
    },
  });
};

export const filterRestaurants = (restaurants) => (dispatch) => {
  updateRestaurants(restaurants, dispatch);
};
