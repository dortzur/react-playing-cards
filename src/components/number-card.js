import React from 'react';
import { NumberCardCenter } from './card-center';
import PropTypes from 'prop-types';

export class NumberCard extends React.PureComponent {
  static propTypes = {
    card: PropTypes.object,
  };
  render() {
    const { card } = this.props;
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
  }
}
