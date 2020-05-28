import React, { PureComponent } from 'react';
import logo from '../../images/BMO image.png';

class Restaurant extends PureComponent {
  render() {
    const { restaurant, index } = this.props;
    return (
      <div className="restaurant-wrapper">
        <div className="restauant-card">
          <div className="name_div">
            Index:
            {index}
          </div>
          <div className="name_div">
            City:
            {restaurant.city}
          </div>
          <div className="name_div">
            Name:
            {restaurant.name}
          </div>
          <div className="name_div">
            Address:
            {restaurant.address}
          </div>
          <div className="name_div">
            Postal Code/Zip:
            {restaurant.postal_code}
          </div>
          <div className="name_div">
            Price range:
            {restaurant.price}
          </div>
          <div className="name_div">
            Area:
            {restaurant.area}
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurant;
