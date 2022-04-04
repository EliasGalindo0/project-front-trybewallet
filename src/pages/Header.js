import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const { email, totalField } = this.props;
    // console.log(totalField);
    const totalFields = totalField || 0;
    return (
      <div>
        <h3 data-testid="email-field">
          {`E-mail: ${email}`}
        </h3>
        <h3 data-testid="total-field">
          {totalFields.toFixed(2)}
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
  totalField: PropTypes.number,
};

Header.defaultProps = {
  totalField: 0,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalField: state.wallet.totalField,
});

export default connect(mapStateToProps)(Header);
