/* Navigation component which holds a logo */
import React, { PureComponent } from 'react';
import Restaurant from '../Restaurant';

class Content extends PureComponent {
  getRestaurants = () => {
    const { filteredRestaurants } = this.props;
    const restaurants = filteredRestaurants.data.filteredResults;
    let list = [];
    if (restaurants) {
      list = restaurants;
      list = list.map((restaurant, index) => <Restaurant key={restaurant.id} restaurant={restaurant} index={index} />);
    }
    return list;
  }

  render() {
    const { filteredRestaurants } = this.props;
    return (
      <section className="content">
        {filteredRestaurants && this.getRestaurants()}
      </section>
    );
  }
}

export default Content;
