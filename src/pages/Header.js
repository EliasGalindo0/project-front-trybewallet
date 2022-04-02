import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      totalField: 0,
    };
  }

  render() {
    const { email } = this.props;
    const { totalField } = this.state;
    return (
      <div>
        <h3 data-testid="email-field">
          {`E-mail: ${email}`}
        </h3>
        <h3 data-testid="total-field">
          {`Total: ${totalField}`}
        </h3>
        <h3 data-testid="header-currency-field">
          BRL
        </h3>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
