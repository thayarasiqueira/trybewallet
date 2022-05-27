import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { fetchCurrencies } from '../actions';
import Form from '../components/Form';

class Wallet extends React.Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { currencies, expenses } = this.props;
    return (
      <div>
        <Header />
        <Form currencies={ currencies } />
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((e) => {
              const currentCurrency = Object.entries(e.exchangeRates)
                .find((curr) => curr[0] === e.currency);
              const currencyName = currentCurrency[1].name.split('/');
              const currencyValue = currentCurrency[1].ask;
              const total = e.value * currencyValue;
              return (
                <tr key={ e.id }>
                  <td>{e.description}</td>
                  <td>{e.tag}</td>
                  <td>{e.method}</td>
                  <td>{Number(e.value).toFixed(2)}</td>
                  <td>{currencyName[0]}</td>
                  <td>{Number(currencyValue).toFixed(2)}</td>
                  <td>{total.toFixed(2)}</td>
                  <td>Real</td>
                  <td>Editar/Excluir</td>
                </tr>);
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchCurrencies()),
});

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

Wallet.propTypes = {
  fetch: PropTypes.func.isRequired,
  currencies: PropTypes.shape.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
