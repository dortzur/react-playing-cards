import React from 'react';
import PropTypes from 'prop-types';
import styles from '../playingcards.css';
import cx from 'classnames';

export class FaceCard extends React.PureComponent {
  static propTypes = {
    card: PropTypes.object,
  };
  render() {
    const { card } = this.props;

    return (
      <div className={cx(styles.card)}>
        <div
          className={cx(
            styles[`card-${card.rank.name}`],
            styles[card.suit.name]
          )}>
          <div className={cx(styles.corner, styles.top)}>
            <span className={styles.face}>{card.rank.symbol}</span>
            <span>{card.suit.symbol}</span>
          </div>
          <span className={cx(styles.face, styles.middle_center)}>
            <div
              className={cx(
                styles['face-image'],
                styles[`face-${card.rank.name}-${card.suit.name}`]
              )}
            />
          </span>
          <div className={cx(styles.corner, styles.bottom)}>
            <span className={styles.face}>{card.rank.symbol}</span>
            <span>{card.suit.symbol}</span>
          </div>
        </div>
      </div>
    );
  }
}
