import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCurrencys } from '../actions';
import UserForm from './Userform';
import SaveTheInformation from './SaveTheInformation';
import Header from './Header';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(updateCurrencys());
  }

  render() {
    const { list } = this.props;
    return (
      <>
        <h1> Trybewallet </h1>
        <Header />
        <UserForm currencyList={ list } />
        <SaveTheInformation />
      </>
    );
  }
}

Wallet.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};
const mapStateToProps = (state) => ({
  list: state.wallet.currencies,
});
export default connect(mapStateToProps)(Wallet);
