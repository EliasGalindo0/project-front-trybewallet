import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { deleteExpense } from '../actions';
import Table from './Table';

class SaveTheInformation extends React.Component {
  handleClickDelete = ({ target }) => {
    const { id } = target;
    const { dispatch, expenses } = this.props;
    dispatch(deleteExpense(id, expenses));
  }

  // handleClickEdit = ({ target }) => {
  //   const { id } = target;
  //   const { dispatch, expenses } = this.props;
  //   dispatch(editExpense(id, expenses));
  // }

  render() {
    const { expenses } = this.props;
    // console.log(expenses);
    return (
      <>
        <Table />
        {expenses.map((expense, index) => (
          <div key={ expense.id }>
            <tbody>
              <tr>
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
                    id={ index }
                    // onClick={ this.handleClickEdit }
                  >
                    Editar despesa
                  </button>
                  <button
                    data-testid="delete-btn"
                    id={ index }
                    type="button"
                    onClick={ this.handleClickDelete }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            </tbody>
          </div>
        ))}
      </>
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
