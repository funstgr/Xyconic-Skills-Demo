/* Banner component which holds a logo */
import React, { PureComponent } from 'react';

class TextField extends PureComponent {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    const { value } = e.currentTarget;
    const { onChangeMethod } = this.props;
    onChangeMethod(value);
  };

  render() {
    const {
      tfID, inputClass, onKeyDown, textFieldClass, textAreaLabel,
    } = this.props;
    return (
      <div className={textFieldClass}>
        <label htmlFor={tfID}>
          <span className="tf-filter-label-span">{textAreaLabel}</span>
          <br />
          <input
            id={tfID}
            className={inputClass}
            type="text"
            onChange={this.onChange}
            onKeyDown={onKeyDown}
          />
        </label>
      </div>
    );
  }
}

export default TextField;
