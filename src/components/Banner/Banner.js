/* Banner component which holds a logo */
import React, { PureComponent } from 'react';
import network from '../../images/network2.png';

import xyconic from '../../svg/eye.svg';

class Banner extends PureComponent {
  render() {
    return (
      <div className="flex-banner-container wrapper-banner banner wrapper">
        <div className="logo_div">
          <img src={xyconic} alt="xyconic svg logo" />
          <div className="banner_text"><span className="banner_span">Xyconic Ltd.</span></div>
        </div>
        <div className="image_div">
          <img src={network} alt="network image" />
        </div>
      </div>
    );
  }
}

export default Banner;
