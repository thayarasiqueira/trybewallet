import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Input from '../components/Input';
import { newUserAction } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
  }

  handleLogin = ({ target }) => {
    const { id, value } = target;
    this.setState({
      [id]: value,
    }, () => this.verifyLogin());
  }

  checkingEmail = (email) => {
    const array = email.split('');
    const findAt = array.find((e) => e === '@');
    const getDot = email.includes('.com');

    if (findAt && getDot) return true;

    return false;
  }

  verifyLogin = () => {
    const { email, password } = this.state;
    const verifyEmail = this.checkingEmail(email);
    const minChar = 5;
    if (verifyEmail && password.length > minChar) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  handleSaveBtn = () => {
    const { email } = this.state;
    const { history, newUser } = this.props;
    history.push('/carteira');
    newUser(email);
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <div>
        <Input
          label="Email"
          type="text"
          id="email"
          testeid="email"
          onChange={ this.handleLogin }
        />
        <Input
          label="Password"
          type="password"
          id="password"
          testeid="password"
          onChange={ this.handleLogin }
        />
        <button type="button" disabled={ isDisabled } onClick={ this.handleSaveBtn }>
          Entrar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  newUser: (value) => dispatch(newUserAction(value)),
});

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.shape).isRequired,
  newUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
