import React from 'react';
import styles from '../playingcards.css';
import cx from 'classnames';
import { Card } from '../utils/card-utils';

interface Props {
  className?: string,
  size: number,
  card: Card
}

export function FaceCard(props: Props) {
  const { card, size, className, ...rest } = props;
  const style = size === 10 ? {} : { transform: `scale(${size / 10})` };
  return (
    <div style={style} className={cx(styles.card, className)} {...rest}>
      <div
        className={cx(
          styles[`card-${card.rank.name}`],
          styles[card.suit.name],
        )}>
        <div className={cx(styles.corner, styles.top)}>
          <span className={styles.face}>{card.rank.symbol}</span>
          <span>{card.suit.symbol}</span>
        </div>
        <span className={cx(styles.face, styles.middle_center)}>
            <div
              className={cx(
                styles['face-image'],
                styles[`face-${card.rank.name}-${card.suit.name}`],
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
