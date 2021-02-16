import React from 'react';
import styles from './OrderForm.scss';
import { Row, Col } from 'react-flexbox-grid';
import pricing from '../../../data/pricing.json';
import settings from './../../../data/settings';
import Button from './../../common/Button/Button';

import OrderSummary from '../OrderSummary/OrderSummary.js';
import OrderOption from '../OrderOption/OrderOption';
import PropTypes from 'prop-types';
import { formatPrice } from './../../../utils/formatPrice';
import { calculateTotal } from './../../../utils/calculateTotal';

const sendOrder = (options, id, tripName, countryCode, tripCost) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    id,
    tripName,
    countryCode,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function (response) {
      return response.json();
    })
    .then(function (parsedResponse) {
      console.log('parsedResponse', parsedResponse);
    });
};

const handleSubmit = (name, contact) => {
  if (name && contact) {
    return true;
  } else {
    alert('Name and contact can not be empty');
  }
};

const OrderForm = (props) => {
  const {
    setOrderOption,
    options,
    tripCost,
    id,
    tripName,
    countryCode,
  } = props;
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
      <Button
        onClick={() =>
          handleSubmit(options.name, options.contact) &&
          sendOrder(options, id, tripName, countryCode, tripCost)
        }
      >
        Order now!
      </Button>
    </Row>
  );
};

OrderForm.propTypes = {
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripCost: PropTypes.string,
  id: PropTypes.string,
  tripName: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;
