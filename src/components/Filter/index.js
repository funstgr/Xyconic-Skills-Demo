/* Navigation component which holds a logo */
import React, { PureComponent } from 'react';
import TextField from '../TextField';

import filter from '../../utils/arraykeyfilter/partialValueArrayByKeyFilter';
import priceFilter from '../../utils/priceFilter/priceFilter';

class Filter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      address: '',
      name: '',
      area: '',
    };

    this.filterByAddress = this.filterByAddress.bind(this);
    this.filterByName = this.filterByName.bind(this);
    this.filterByPrice = this.filterByPrice.bind(this);
    this.filterByArea = this.filterByArea.bind(this);
  }

  filterByAddress = (value) => {
    this.setState({ address: value }, () => this.applyfilterToRestaurants());
  };

  filterByName = (value) => {
    this.setState({ name: value }, () => this.applyfilterToRestaurants());
  };

  filterByPrice = (value) => {
    this.setState({ price: value }, () => this.applyfilterToRestaurants());
  };

  filterByArea = (value) => {
    this.setState({ area: value }, () => this.applyfilterToRestaurants());
  };

  applyfilterToRestaurants() {
    const { filterRestaurants, restaurants } = this.props;
    let newArray = restaurants.data.restaurants;

    const {
      address, name, price, area,
    } = this.state;

    if (address && address.length > 0) {
      newArray = filter(newArray, 'address', address);
    }

    if (name && name.length > 0) {
      newArray = filter(newArray, 'name', name);
    }

    if (price && price.length > 0) {
      newArray = priceFilter(newArray, price);
    }

    if (area && area.length > 0) {
      newArray = filter(newArray, 'area', area);
    }
    filterRestaurants(newArray);
  }

  render() {
    return (
      <aside className="sidebar aside">
        <div className="nav_text">Refine Search Filter</div>
        <TextField
          tfID="addressFilter"
          textFieldClass="nav-filter-div"
          inputClass="additional_input"
          textAreaLabel="Address Filter"
          onChangeMethod={(value) => this.filterByAddress(value)}
        />
        <TextField
          tfID="nameFilter"
          textFieldClass="nav-filter-div"
          inputClass="additional_input"
          textAreaLabel="Name Filter"
          onChangeMethod={(value) => this.filterByName(value)}
        />
        <TextField
          tfID="priceFilter"
          textFieldClass="nav-filter-div"
          inputClass="additional_input"
          textAreaLabel="Price Filter: 1 to 4"
          onChangeMethod={(value) => this.filterByPrice(value)}
        />
        <TextField
          tfID="valueFilter"
          textFieldClass="nav-filter-div"
          inputClass="additional_input"
          textAreaLabel="Area Filter"
          onChangeMethod={(value) => this.filterByArea(value)}
        />
        <span>Restaurant list is maxed at 100 entries.</span>
      </aside>
    );
  }
}

export default Filter;
