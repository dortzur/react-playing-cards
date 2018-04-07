import React from 'react';
import { FaceCard } from './face-card';
import { NumberCard } from './number-card';
// noinspection NpmUsedModulesInstalled
import PropTypes from 'prop-types';
import { getCard } from '../utils/card-utils';
const isFaceCard = (rank) => ['king', 'queen', 'jack'].includes(rank.name);

export class Card extends React.PureComponent {
  static propTypes = {
    rank: PropTypes.string,
    suit: PropTypes.string,
  };
  render() {
    const { rank, suit } = this.props;
    const card = getCard(rank, suit);
    if (isFaceCard(card.rank)) {
      return <FaceCard card={card} />;
    }
    return <NumberCard card={card} />;
  }
}
