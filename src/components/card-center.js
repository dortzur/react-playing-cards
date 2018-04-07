import React from 'react';

export class NumberCardCenter extends React.PureComponent {
  render() {
    const { card } = this.props;
    switch (card.rank.name) {
      case 'ace':
        return <span className="suit middle_center">{card.suit.symbol}</span>;
      case 'two':
        return (
          <span>
            <span className="suit top_center">{card.suit.symbol}</span>
            <span className="suit bottom_center">{card.suit.symbol}</span>
          </span>
        );
      case 'three':
        return (
          <span>
            <span className="suit top_center">{card.suit.symbol}</span>
            <span className="suit middle_center">{card.suit.symbol}</span>
            <span className="suit bottom_center">{card.suit.symbol}</span>
          </span>
        );
      case 'four':
        return (
          <span>
            {' '}
            <span className="suit top_left">{card.suit.symbol}</span>
            <span className="suit top_right">{card.suit.symbol}</span>
            <span className="suit bottom_left">{card.suit.symbol}</span>
            <span className="suit bottom_right">{card.suit.symbol}</span>
          </span>
        );
      case 'five':
        return (
          <span>
            <span className="suit top_left">{card.suit.symbol}</span>
            <span className="suit top_right">{card.suit.symbol}</span>
            <span className="suit middle_center">{card.suit.symbol}</span>
            <span className="suit bottom_left">{card.suit.symbol}</span>
            <span className="suit bottom_right">{card.suit.symbol}</span>
          </span>
        );
      case 'six':
        return (
          <span>
            {' '}
            <span className="suit top_left">{card.suit.symbol}</span>
            <span className="suit top_right">{card.suit.symbol}</span>
            <span className="suit middle_left">{card.suit.symbol}</span>
            <span className="suit middle_right">{card.suit.symbol}</span>
            <span className="suit bottom_left">{card.suit.symbol}</span>
            <span className="suit bottom_right">{card.suit.symbol}</span>
          </span>
        );
      case 'seven':
        return (
          <span>
            {' '}
            <span className="suit top_left">{card.suit.symbol}</span>
            <span className="suit top_right">{card.suit.symbol}</span>
            <span className="suit middle_left">{card.suit.symbol}</span>
            <span className="suit middle_top">{card.suit.symbol}</span>
            <span className="suit middle_right">{card.suit.symbol}</span>
            <span className="suit bottom_left">{card.suit.symbol}</span>
            <span className="suit bottom_right">{card.suit.symbol}</span>
          </span>
        );
      case 'eight':
        return (
          <span>
            {' '}
            <span className="suit top_left">{card.suit.symbol}</span>
            <span className="suit top_right">{card.suit.symbol}</span>
            <span className="suit middle_left">{card.suit.symbol}</span>
            <span className="suit middle_top">{card.suit.symbol}</span>
            <span className="suit middle_right">{card.suit.symbol}</span>
            <span className="suit middle_bottom">{card.suit.symbol}</span>
            <span className="suit bottom_left">{card.suit.symbol}</span>
            <span className="suit bottom_right">{card.suit.symbol}</span>
          </span>
        );
      case 'nine':
        return (
          <span>
            <span className="suit top_left">{card.suit.symbol}</span>
            <span className="suit top_right">{card.suit.symbol}</span>
            <span className="suit middle_top_left">{card.suit.symbol}</span>
            <span className="suit middle_center">{card.suit.symbol}</span>
            <span className="suit middle_top_right">{card.suit.symbol}</span>
            <span className="suit bottom_left">{card.suit.symbol}</span>
            <span className="suit bottom_right">{card.suit.symbol}</span>
            <span className="suit middle_bottom_left">{card.suit.symbol}</span>
            <span className="suit middle_bottom_right">{card.suit.symbol}</span>
          </span>
        );
      case 'ten':
        return (
          <span>
            {' '}
            <span className="suit top_left">{card.suit.symbol}</span>
            <span className="suit top_right">{card.suit.symbol}</span>
            <span className="suit middle_top_left">{card.suit.symbol}</span>
            <span className="suit middle_top_center">{card.suit.symbol}</span>
            <span className="suit middle_top_right">{card.suit.symbol}</span>
            <span className="suit bottom_left">{card.suit.symbol}</span>
            <span className="suit bottom_right">{card.suit.symbol}</span>
            <span className="suit middle_bottom_center">
              {card.suit.symbol}
            </span>
            <span className="suit middle_bottom_left">{card.suit.symbol}</span>
            <span className="suit middle_bottom_right">{card.suit.symbol}</span>
          </span>
        );
    }
  }
}

