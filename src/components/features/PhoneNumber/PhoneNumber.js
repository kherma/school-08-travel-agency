import React from 'react';
import PropTypes from 'prop-types';

const PhoneNumber = ({ phones }) => {
  return <span>{phones[0].phone}</span>;
};

PhoneNumber.propTypes = {
  phones: PropTypes.array,
};

export default PhoneNumber;
