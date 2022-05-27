import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    const total = expenses.reduce((acc, expense) => {
      const currentCurrencie = Object.entries(expense.exchangeRates)
        .find((currency) => currency[0] === expense.currency);
      return acc + (expense.value * currentCurrencie[1].ask);
    }, 0);
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
          <p data-testid="total-field">
            { total.toFixed(2) }
          </p>
        </span>
        <span>
          Câmbio:
          <p data-testid="header-currency-field"> BRL </p>
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps)(Header);
