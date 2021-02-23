import React, { Component } from 'react';
import PropTypes from 'prop-types';

class HappyHourAd extends Component {
  constructor(props) {
    super(props);

    setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  };

  getCountdownTime = () => {
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

  render() {
    const { title, promoDescription } = this.props;
    const description =
      this.getCountdownTime() / 3600 > 23
        ? promoDescription
        : this.getCountdownTime();
    return (
      <div>
        <h3 className="title">{title}</h3>
        <div className="promoDescription">{description}</div>
      </div>
    );
  }
}

export default HappyHourAd;
