import React from 'react';
// import styles from './OrderForm.scss';
import { Row, Col } from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary.js';

const OrderForm = (props) => {
  return (
    <Row>
      <Col xs={12}>
        <OrderSummary tripOptions={props} />
      </Col>
    </Row>
  );
};

export default OrderForm;
