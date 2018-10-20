import React from 'react';
import { FaceCard } from './face-card';
import { NumberCard } from './number-card';
// noinspection NpmUsedModulesInstalled
import PropTypes from 'prop-types';
import { getCard } from '../utils/card-utils';
const isFaceCard = (rank) => ['king', 'queen', 'jack'].includes(rank.name);

export class Card extends React.PureComponent {
  static propTypes = {
    size: PropTypes.number,
    rank: PropTypes.string,
    suit: PropTypes.string,
  };
  static defaultProps = {
    size: 10,
  };
  render() {
    const { rank, suit, size } = this.props;
    const card = getCard(rank, suit);
    if (isFaceCard(card.rank)) {
      return <FaceCard card={card} size={size} />;
    }
    return <NumberCard card={card} size={size} />;
  }
}
