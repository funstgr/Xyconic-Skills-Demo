/* Header component */
import React, { PureComponent } from 'react';

// eslint-disable-next-line import/no-named-as-default
import Autocomplete from '../Autocomplete';

class Header extends PureComponent {
  constructor(props) {
    super(props);

    this.fetchRestaurantData = this.fetchRestaurantData.bind(this);
    this.setSearchRestaurantName = this.setSearchRestaurantName.bind(this);
    this.setSearchRestaurantAddress = this.setSearchRestaurantAddress.bind(this);
    this.setSearchRestaurantZip = this.setSearchRestaurantZip.bind(this);
    this.setSearchCity = this.setSearchCity.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line react/prop-types
    const { fetchCities } = this.props;
    fetchCities();
  }

  setSearchRestaurantName(name) {
    const { updateSearch, search } = this.props;
    search.name = name;
    updateSearch(search);
  }

  setSearchRestaurantAddress(address) {
    const { updateSearch, search } = this.props;
    search.address = address;
    updateSearch(search);
  }

  setSearchRestaurantZip(zip) {
    const { updateSearch, search } = this.props;
    search.zip = zip;
    updateSearch(search);
  }

  setSearchCity(city) {
    const { updateSearch, search } = this.props;
    search.city = city;
    updateSearch(search);
  }

  fetchRestaurantData() {
    const { fetchRestaurantData, search } = this.props;
    fetchRestaurantData(search);
  }

  render() {
    const { cities } = this.props;
    return (
      <section className="header wrapper">
        <h1>Xyconic Responsive Demo App</h1>
        <p>
          Search for your favorite restaurant. Start by entering a city name into the City search field.
        </p>
        <Autocomplete
          // eslint-disable-next-line react/prop-types
          options={cities.data.cities}
          setSearchCity={(city) => this.setSearchCity(city)}
        />
        <br />
        <hr />
        <div className="button_search_row">
          <div className="button_search_row_div">
            <button type="button" onClick={this.fetchRestaurantData}>
              <span className="search_button_text">Search</span>
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default Header;
