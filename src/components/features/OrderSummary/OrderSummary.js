import React from 'react';
import styles from './OrderSummary.scss';

import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

import PropTypes from 'prop-types';

const OrderSummary = ({ tripOptions }) => {
  const { tripCost, options } = tripOptions;
  return (
    <h2 className={styles.component}>
      Total: <strong>{formatPrice(calculateTotal(tripCost, options))}</strong>
    </h2>
  );
};

OrderSummary.propTypes = {
  tripOptions: PropTypes.object,
};

export default OrderSummary;
