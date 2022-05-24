import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    return (
      <div>
        <Header />
        TrybeWallet
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchCurrencies()),
});

Wallet.propTypes = {
  fetch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
