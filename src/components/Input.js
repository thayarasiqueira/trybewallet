import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
  render() {
    const { label, type, id, testeid, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        {label}
        <input
          type={ type }
          id={ id }
          data-testid={ `${testeid}-input` }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  testeid: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
