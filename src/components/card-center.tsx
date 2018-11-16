import React from 'react';
import styles from '../playingcards.css';
import cx from 'classnames';
import { Card } from '../utils/card-utils';

interface Props {
  card: Card
}

export const NumberCardCenter = (props: Props) => {
  const { card } = props;
  switch (card.rank.name) {
    case 'ace':
      return <span
        className={cx(styles.suit, styles.middle_center)}>{card.suit.symbol}</span>;
    case 'two':
      return (
        <span>
            <span
              className={cx(styles.suit, styles.top_center)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_center)}>{card.suit.symbol}</span>
          </span>
      );
    case 'three':
      return (
        <span>
            <span
              className={cx(styles.suit, styles.top_center)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_center)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_center)}>{card.suit.symbol}</span>
          </span>
      );
    case 'four':
      return (
        <span>
            {' '}
          <span
            className={cx(styles.suit, styles.top_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.top_right)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_right)}>{card.suit.symbol}</span>
          </span>
      );
    case 'five':
      return (
        <span>
            <span
              className={cx(styles.suit, styles.top_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.top_right)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_center)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_right)}>{card.suit.symbol}</span>
          </span>
      );
    case 'six':
      return (
        <span>
            {' '}
          <span
            className={cx(styles.suit, styles.top_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.top_right)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_right)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_right)}>{card.suit.symbol}</span>
          </span>
      );
    case 'seven':
      return (
        <span>
            {' '}
          <span
            className={cx(styles.suit, styles.top_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.top_right)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_top)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_right)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_right)}>{card.suit.symbol}</span>
          </span>
      );
    case 'eight':
      return (
        <span>
            {' '}
          <span
            className={cx(styles.suit, styles.top_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.top_right)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_top)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_right)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_bottom)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_right)}>{card.suit.symbol}</span>
          </span>
      );
    case 'nine':
      return (
        <span>
            <span
              className={cx(styles.suit, styles.top_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.top_right)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_top_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_center)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_top_right)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_right)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_bottom_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_bottom_right)}>{card.suit.symbol}</span>
          </span>
      );
    case 'ten':
      return (
        <span>
            {' '}
          <span
            className={cx(styles.suit, styles.top_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.top_right)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_top_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_top_center)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_top_right)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.bottom_right)}>{card.suit.symbol}</span>
            <span className={cx(styles.suit, styles.middle_bottom_center)}>
              {card.suit.symbol}
            </span>
            <span
              className={cx(styles.suit, styles.middle_bottom_left)}>{card.suit.symbol}</span>
            <span
              className={cx(styles.suit, styles.middle_bottom_right)}>{card.suit.symbol}</span>
          </span>
      );
    default:
      throw new Error('unsupported card');
  }
};
