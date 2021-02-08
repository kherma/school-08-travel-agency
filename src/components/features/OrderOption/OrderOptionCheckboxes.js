import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if (checked) {
    return [...currentValue, id];
  } else {
    return currentValue.filter((value) => value != id);
  }
};

const OrderOptionCheckboxes = ({ values, setOptionValue, currentValue }) => (
  <div className={styles.checkboxes}>
    {values.map(({ id, name, price }) => (
      <label key={id}>
        <input
          type="checkbox"
          value={id}
          checked={currentValue.includes(id) ? true : false}
          onChange={(event) =>
            setOptionValue(
              newValueSet(currentValue, id, event.currentTarget.checked)
            )
          }
        />
        {name} ({formatPrice(price)})
      </label>
    ))}
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values: PropTypes.array,
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
};

export default OrderOptionCheckboxes;
