import React from 'react';
import { NumberCardCenter } from './card-center';
import PropTypes from 'prop-types';
import styles from '../playingcards.css';
import cx from 'classnames';

export class NumberCard extends React.PureComponent {
  static propTypes = {
    card: PropTypes.object,
  };
  render() {
    const { card } = this.props;
    return (
      <div className={styles.card}>
        <div
          className={cx(
            styles[`card-${card.rank.name}`],
            styles[card.suit.name]
          )}>
          <div className={cx(styles.corner, styles.top)}>
            <span className={styles.number}>{card.rank.symbol}</span>
            <span>{card.suit.symbol}</span>
          </div>
          <NumberCardCenter card={card} />
          <div className={cx(styles.corner, styles.bottom)}>
            <span className={styles.number}>{card.rank.symbol}</span>
            <span>{card.suit.symbol}</span>
          </div>
        </div>
      </div>
    );
  }
}
