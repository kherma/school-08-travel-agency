import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';
import { formatTime } from '../../../utils/formatTime';

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
        : formatTime(this.getCountdownTime());
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{description}</div>
      </div>
    );
  }
}

export default HappyHourAd;
