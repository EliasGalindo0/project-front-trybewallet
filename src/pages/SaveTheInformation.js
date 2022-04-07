import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense, editExpense } from '../actions';

class SaveTheInformation extends React.Component {
  handleClickDelete = ({ target }) => {
    const { id } = target;
    const { dispatch, expenses } = this.props;
    dispatch(deleteExpense(id, expenses));
  }

  handleClickEdit = ({ target }) => {
    const { id } = target;
    const { dispatch, expenses } = this.props;
    dispatch(editExpense(id, expenses));
  }

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Tag</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, id) => (
            <tr key={ id }>
              <td>{expense.description}</td>
              <td>{expense.tag}</td>
              <td>{expense.method}</td>
              <td>{Number(expense.value).toFixed(2)}</td>
              <td>
                {expense.exchangeRates[expense.currency].name.split('/')[0]}
              </td>
              <td>
                {Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}
              </td>
              <td>
                {(expense.value * expense.exchangeRates[expense.currency].ask)
                  .toFixed(2)}
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                  onClick={ this.handleClickEdit }
                >
                  Editar despesa
                </button>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ this.handleClickDelete }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

SaveTheInformation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(SaveTheInformation);
