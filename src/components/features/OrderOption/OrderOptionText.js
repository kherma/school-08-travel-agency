import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionText = ({ currentValue, setOptionValue }) => {
  return (
    <div>
      <input
        className={styles.inputSmall}
        type="text"
        value={currentValue}
        onChange={(event) => setOptionValue(event.currentTarget.value)}
      />
    </div>
  );
};

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
