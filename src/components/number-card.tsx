import React from 'react';
import { NumberCardCenter } from './card-center';
import styles from '../playingcards.css';
import cx from 'classnames';
import { Card } from '../utils/card-utils';

interface Props {
  className?: string,
  size: number,
  card: Card
}

export function NumberCard(props: Props) {
  const { card, size, className, ...rest } = props;
  const style = size === 10 ? {} : { transform: `scale(${size / 10})` };

  return (
    <div style={style} className={`${styles.card} ${className}`} {...rest}>
      <div
        className={cx(
          styles[`card-${card.rank.name}`],
          styles[card.suit.name],
        )}>
        <div className={cx(styles.corner, styles.top)}>
          <span className={styles.number}>{card.rank.symbol}</span>
          <span>{card.suit.symbol}</span>
        </div>
        <NumberCardCenter card={card}/>
        <div className={cx(styles.corner, styles.bottom)}>
          <span className={styles.number}>{card.rank.symbol}</span>
          <span>{card.suit.symbol}</span>
        </div>
      </div>
    </div>
  );
}
