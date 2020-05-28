import React, { PureComponent } from 'react';

import Banner from '../Banner/Banner';
import Header from '../../containers/HeaderContainer';
import Filter from '../../containers/FilterContainer';
import Content from '../../containers/ContentContainer';

import Footer from '../Footer';

import '../../sass/style.scss';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <main>
          <div className="main_div">
            <Banner />
            <Header />
            <div className="flex-container wrapper content-sidebar-wrapper">
              <Filter />
              <Content />
            </div>
            <Footer />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
