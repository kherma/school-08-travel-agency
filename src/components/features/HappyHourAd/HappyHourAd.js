import React from 'react';
import PropTypes from 'prop-types';

const HappyHourAd = ({ title }) => {
  const getCountdownTime = () => {
    const currentTime = new Date();
    const nextNoon = new Date(
      Date.UTC(
        currentTime.getUTCFullYear(),
        currentTime.getUTCMonth(),
        currentTime.getUTCDate(),
        12,
        0,
        0,
        0
      )
    );

    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  };
  return (
    <div>
      <h3 className="title">{title}</h3>
      <div className="countdown">{getCountdownTime()}</div>
    </div>
  );
};

HappyHourAd.propTypes = {
  title: PropTypes.string,
};

export default HappyHourAd;
