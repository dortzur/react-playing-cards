import React from 'react';
import images from '../utils/images';

export const FaceCard = ({ rank, suit }) => {
  const image = images[`${rank.name}-${suit.name}`];
  return (
    <div className="card">
      <div className={`card-${rank.name} ${suit.name}`}>
        <div className="corner top">
          <span className="face">{rank.symbol}</span>
          <span>{suit.symbol}</span>
        </div>
        <span className="face middle_center">
          <img src={image} />
        </span>
        <div className="corner bottom">
          <span className="face">{rank.symbol}</span>
          <span>{suit.symbol}</span>
        </div>
      </div>
    </div>
  );
};
