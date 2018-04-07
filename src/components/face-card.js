import React from 'react';
import PropTypes from 'prop-types';

export class FaceCard extends React.PureComponent {
  static propTypes = {
    card: PropTypes.object,
  };
  render() {
    const { card } = this.props;

    return (
      <div className="card">
        <div className={`card-${card.rank.name} ${card.suit.name}`}>
          <div className="corner top">
            <span className="face">{card.rank.symbol}</span>
            <span>{card.suit.symbol}</span>
          </div>
          <span className="face middle_center">
            <div
              className={`face-image face-${card.rank.name}-${card.suit.name}`}
            />
          </span>
          <div className="corner bottom">
            <span className="face">{card.rank.symbol}</span>
            <span>{card.suit.symbol}</span>
          </div>
        </div>
      </div>
    );
  }
}
