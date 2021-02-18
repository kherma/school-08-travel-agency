import React from 'react';
import PropTypes from 'prop-types';

const HappyHourAd = ({ title, countdown }) => {
  return (
    <div>
      <h3 className="title">{title}</h3>
      <div className="countdown">{countdown}</div>
    </div>
  );
};

HappyHourAd.propTypes = {
  title: PropTypes.string,
  countdown: PropTypes.string,
};

export default HappyHourAd;
