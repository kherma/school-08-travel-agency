import React from 'react';
import PropTypes from 'prop-types';

const PhoneNumber = ({ phones }) => {
  const setPhoneNumber = () => {
    // Get curren UTC Hour
    const currentHour = new Date().getUTCHours();

    // Get number from state
    for (const shift of phones) {
      if (shift.start <= currentHour && shift.end >= currentHour) {
        return shift.phone;
      } else if (currentHour >= 22 || currentHour < 8) {
        return phones[phones.length - 1].phone;
      }
    }
  };
  return <span>{setPhoneNumber()}</span>;
};

PhoneNumber.propTypes = {
  phones: PropTypes.array,
};

export default PhoneNumber;
