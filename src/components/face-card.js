import React from 'react';
import images from '../utils/images';
import PropTypes from 'prop-types';

export class FaceCard extends React.PureComponent {
  static propTypes = {
    card: PropTypes.object,
  };
  render() {
    const { card } = this.props;
    const image = images[`${card.rank.name}-${card.suit.name}`];

    return (
      <div className="card">
        <div className={`card-${card.rank.name} ${card.suit.name}`}>
          <div className="corner top">
            <span className="face">{card.rank.symbol}</span>
            <span>{card.suit.symbol}</span>
          </div>
          <span className="face middle_center">
            <img src={image} />
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
