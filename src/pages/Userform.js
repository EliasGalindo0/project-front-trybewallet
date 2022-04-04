import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getExpensesThunk } from '../actions';

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fieldValue: '',
      fieldDescription: '...',
      fieldCurrency: 'USD',
      paymentMethod: '',
      fieldCategory: '',
      optionsList: [],
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = () => {
    const { dispatch } = this.props;
    dispatch(getExpensesThunk(this.state));
    this.setState({
      fieldValue: '',
    });
  }

  render() {
    const {
      fieldValue,
      fieldDescription,
      paymentMethod,
      fieldCategory,
    } = this.state;
    const { currencyList } = this.props;

    return (
      <form className="inputsCategorys" action="">
        <label htmlFor="fieldValue">
          Value
          <input
            id="fieldValue"
            data-testid="value-input"
            type="text"
            name="fieldValue"
            value={ fieldValue }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="FieldDescription">
          Description
          <input
            id="FieldDescription"
            data-testid="description-input"
            type="text"
            name="fieldDescription"
            value={ fieldDescription }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="moeda">
          Moedas (Currency)
          <select
            id="moeda"
            type="select"
            name="fieldCurrency"
            role="combobox"
            onChange={ this.handleChange }
          >
            { currencyList.map((item, index) => (
              <option
                key={ index }
                value={ item }
              >
                {item}

              </option>))}

          </select>
        </label>

        <label htmlFor="paymentMethod">
          Payment method
          <select
            id="paymentMethod"
            data-testid="method-input"
            type="text"
            name="paymentMethod"
            value={ paymentMethod }
            onChange={ this.handleChange }
          >
            <option value="Dinheiro">Dinheiro</option>
            <option value="Cartão de crédito">Cartão de crédito</option>
            <option value="Cartão de débito">Cartão de débito</option>
          </select>
        </label>

        <label htmlFor="fieldCategory">
          Category
          <select
            id="fieldCategory"
            data-testid="tag-input"
            type="text"
            name="fieldCategory"
            value={ fieldCategory }
            onChange={ this.handleChange }
          >
            <option value="Alimentação">Alimentação</option>
            <option value="Lazer">Lazer</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Transporte">Transporte</option>
            <option value="Saúde">Saúde</option>

          </select>
        </label>
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

UserForm.propTypes = {
  currencyList: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(UserForm);
