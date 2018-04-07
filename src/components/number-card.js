import React from 'react';
import { NumberCardCenter } from './card-center';

export const NumberCard = ({card}) => {

  return (
    <div className="card">
      <div className={`card-${card.rank.name} ${card.suit.name}`}>
        <div className="corner top">
          <span className="number">{card.rank.symbol}</span>
          <span>{card.suit.symbol}</span>
        </div>
        <NumberCardCenter card={card} />
        <div className="corner bottom">
          <span className="number">{card.rank.symbol}</span>
          <span>{card.suit.symbol}</span>
        </div>
      </div>
    </div>
  );
};
