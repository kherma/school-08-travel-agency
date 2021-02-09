import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const OrderOptionDate = ({ currentValue, setOptionValue }) => {
  return (
    <DatePicker
      selected={currentValue}
      onChange={(date) => setOptionValue(date)}
    />
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Date),
  ]),
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
