import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email } = this.props;
    return (
      <div>
        <span>
          Usuário:
          <p data-testid="email-field">
            {` ${email}`}
          </p>
        </span>
        <span>
          Despesa total: R$
          <p data-testid="total-field"> 0 </p>
        </span>
        <span>
          Câmbio:
          <p data-testid="header-currency-field"> BRL</p>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
