import React from 'react';
import { FaceCard } from './face-card';
import { NumberCard } from './number-card';
// noinspection NpmUsedModulesInstalled
import PropTypes from 'prop-types';
import { CardRank, getCard } from '../utils/card-utils';
import { RANKS, SUITS } from '../constants';

const isFaceCard = (rank: CardRank) => ['king', 'queen', 'jack'].includes(rank.name);

interface Props {
  rank: RANKS,
  suit: SUITS,
  className: string,
  size: number
}

export function Card(props: Props) {
  const { rank, suit, size, ...rest } = props;
  const card = getCard(rank, suit);
  if (isFaceCard(card.rank)) {
    return <FaceCard card={card} size={size} {...rest} />;
  }
  return <NumberCard card={card} size={size} {...rest} />;
}

Card.propTypes = {
  size: PropTypes.number,
  rank: PropTypes.string,
  suit: PropTypes.string,
};

Card.defaultProps = {
  size: 10,
};
