/* Banner component which holds a logo */
import React, { PureComponent } from 'react';
import logo from '../../images/BMO image.png';

class Banner extends PureComponent {
  render() {
    return (
      <div className="flex-banner-container wrapper-banner banner wrapper">
        <div className="logo_div">
          <img src={logo} alt="BMO logo" />
        </div>
      </div>
    );
  }
}

export default Banner;
