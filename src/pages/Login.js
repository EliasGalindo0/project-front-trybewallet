import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userReducer } from '../actions';
import verifyEmail from '../helpers/verifyEmail';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isBtnDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.validateEmail());
  }

    validateEmail = () => {
      const { email, password } = this.state;
      const minLength = 6;
      if (verifyEmail(email) && password.length >= minLength) {
        return this.setState({
          isBtnDisabled: false,
        });
      }
      return this.setState({
        isBtnDisabled: true,
      });
    };

    handleLogin = (event) => {
      event.preventDefault();
      const { history, dispatchSetValue } = this.props;
      dispatchSetValue(this.state);
      history.push('/carteira');
    };

    render() {
      const { password, email, isBtnDisabled } = this.state;
      return (
        <div>
          <h1>Login</h1>
          <label htmlFor="email">
            Digite o seu E-mail
            <input
              type="email"
              data-testid="email-input"
              onChange={ this.handleChange }
              name="email"
              value={ email }
              placeholder="Email"
            />
          </label>
          <label htmlFor="password">
            Digite sua Senha
            <input
              type="password"
              data-testid="password-input"
              onChange={ this.handleChange }
              name="password"
              value={ password }
              placeholder="Senha com 6 dígitos"
            />
          </label>
          <button
            type="submit"
            onClick={ this.handleLogin }
            name="button-login"
            disabled={ isBtnDisabled }
          >
            Entrar
          </button>
        </div>
      );
    }
}

Login.propTypes = {
  dispatchSetValue: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
const mapDispatchToProps = (dispatch) => ({
  dispatchSetValue: (user) => dispatch(userReducer(user.email)),
}
);

export default connect(null, mapDispatchToProps)(Login);
