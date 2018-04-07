import React from 'react';
import PropTypes from 'prop-types';
import styles from '../playingcards.css';
import cx from 'classnames';

export class NumberCardCenter extends React.PureComponent {
  static propTypes = {
    card: PropTypes.object,
  };
  render() {
    const { card } = this.props;
    switch (card.rank.name) {
      case 'ace':
        return <span className={cx(styles.suit,middle_center}>{card.suit.symbol}</span>;
      case 'two':
        return (
          <span>
            <span className={cx(styles.suit,top_center}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_center}>{card.suit.symbol}</span>
          </span>
        );
      case 'three':
        return (
          <span>
            <span className={cx(styles.suit,top_center}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_center}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_center}>{card.suit.symbol}</span>
          </span>
        );
      case 'four':
        return (
          <span>
            {' '}
            <span className={cx(styles.suit,top_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,top_right}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_right}>{card.suit.symbol}</span>
          </span>
        );
      case 'five':
        return (
          <span>
            <span className={cx(styles.suit,top_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,top_right}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_center}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_right}>{card.suit.symbol}</span>
          </span>
        );
      case 'six':
        return (
          <span>
            {' '}
            <span className={cx(styles.suit,top_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,top_right}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_right}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_right}>{card.suit.symbol}</span>
          </span>
        );
      case 'seven':
        return (
          <span>
            {' '}
            <span className={cx(styles.suit,top_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,top_right}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_top}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_right}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_right}>{card.suit.symbol}</span>
          </span>
        );
      case 'eight':
        return (
          <span>
            {' '}
            <span className={cx(styles.suit,top_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,top_right}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_top}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_right}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_bottom}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_right}>{card.suit.symbol}</span>
          </span>
        );
      case 'nine':
        return (
          <span>
            <span className={cx(styles.suit,top_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,top_right}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_top_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_center}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_top_right}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_right}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_bottom_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_bottom_right}>{card.suit.symbol}</span>
          </span>
        );
      case 'ten':
        return (
          <span>
            {' '}
            <span className={cx(styles.suit,top_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,top_right}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_top_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_top_center}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_top_right}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,bottom_right}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_bottom_center}>
              {card.suit.symbol}
            </span>
            <span className={cx(styles.suit,middle_bottom_left}>{card.suit.symbol}</span>
            <span className={cx(styles.suit,middle_bottom_right}>{card.suit.symbol}</span>
          </span>
        );
    }
  }
}
