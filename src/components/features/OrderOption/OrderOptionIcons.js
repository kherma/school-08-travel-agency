import React from 'react';
import styles from './OrderOption.scss';
import { formatPrice } from '../../../utils/formatPrice';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({
  values,
  required,
  currentValue,
  setOptionValue,
}) => (
  <div>
    {!required && (
      <div
        className={`${styles.icon} ${currentValue === '' && styles.iconActive}`}
        onClick={() => setOptionValue('')}
      >
        <Icon name="times-circle"></Icon>
        none
      </div>
    )}
    {values.map(({ icon, id, name, price }) => (
      <div
        key={id}
        className={`${styles.icon} ${currentValue === id && styles.iconActive}`}
        onClick={() => setOptionValue(id)}
      >
        <Icon name={icon}></Icon>
        {name} ({formatPrice(price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;
