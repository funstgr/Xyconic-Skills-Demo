import React, { PureComponent } from 'react';

export class Autocomplete extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onChange = (e) => {
    const { options } = this.props;
    const userInput = e.currentTarget.value;
    let filteredOptions = '';

    // only show filtered results after 2 characters are entered
    if (userInput.length > 1) {
      filteredOptions = options.filter(
        (optionName) => optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1,
      );
    }

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput,
    });
    const { setSearchCity } = this.props;
    setSearchCity(userInput);
  };

  onClick = (e) => {
    const city = e.currentTarget.innerText;
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: city,
    });
    const { setSearchCity } = this.props;
    setSearchCity(city);
  };

  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption],
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      state: {
        activeOption, filteredOptions, showOptions, userInput,
      },
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <div className="options">
            {filteredOptions.map((optionName, index) => {
              let elClass;
              if (index === activeOption) {
                elClass = 'option-active';
              }
              return (
                // eslint-disable-next-line
                <div className={elClass} key={optionName} onClick={this.onClick}>
                  {optionName}
                </div>
              );
            })}
          </div>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }
    return (
      <div>
        <div className="search">
          <label htmlFor="city-search-btn" className="city_search_label">
            <span>City Search</span>
            <div className="spacer">&nbsp;</div>
            <input
              id="city-search-btn"
              type="text"
              className="search-box"
              onChange={this.onChange}
              onKeyDown={this.onKeyDown}
              value={userInput}
            />
          </label>
          <div className="search-btn" />
        </div>
        {optionList}
      </div>
    );
  }
}

export default Autocomplete;
