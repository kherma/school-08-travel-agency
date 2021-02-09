import React from 'react';
import styles from './OrderForm.scss';
import { Row, Col } from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';

import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption';
import PropTypes from 'prop-types';

const OrderForm = (props) => {
  const { setOrderOption, options } = props;

  return (
    <Row>
      {pricing.map((item) => (
        <Col md={4} key={item.id} className={styles.asd}>
          <OrderOption
            {...item}
            currentValue={options[item.id]}
            setOrderOption={setOrderOption}
          />
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary tripOptions={props} />
      </Col>
    </Row>
  );
};

OrderForm.propTypes = {
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
