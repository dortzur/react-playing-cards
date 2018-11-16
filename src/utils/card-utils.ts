import { RANKS, SUITS } from '../constants';


export interface CardSuit {
  name: 'club' | 'diamond' | 'spade' | 'heart',
  symbol: '♥' | '♠' | '♦' | '♣',
  color: 'black' | 'red',
  id: SUITS,
}

interface CardSuits {
  C: CardSuit,
  D: CardSuit
  S: CardSuit
  H: CardSuit
}


const cardSuits: CardSuits = {
  C: {
    name: 'club',
    symbol: '♣',
    color: 'black',
    id: SUITS.CLUBS,
  },
  D: {
    name: 'diamond',
    symbol: '♦',
    color: 'red',
    id: SUITS.DIAMONDS,
  },
  S: {
    name: 'spade',
    symbol: '♠',
    color: 'black',
    id: SUITS.SPADES,
  },
  H: {
    name: 'heart',
    symbol: '♥',
    color: 'red',
    id: SUITS.HEARTS,
  },
};

type cardId = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'T' | 'J' | 'Q' | 'K'
type cardSymbol = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K'
type cardName = 'ace' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | 'ten' | 'jack' | 'queen' | 'king'

export interface CardRank {
  name: cardName
  symbol: cardSymbol,
  id: cardId,
}


interface CardRanks {
  'A': CardRank,
  '2': CardRank,
  '3': CardRank,
  '4': CardRank,
  '5': CardRank,
  '6': CardRank,
  '7': CardRank,
  '8': CardRank,
  '9': CardRank,
  'T': CardRank,
  'J': CardRank,
  'Q': CardRank,
  'K': CardRank,
}


const cardRanks: CardRanks = {
  'A': {
    name: 'ace',
    symbol: 'A',
    id: 'A',
  },
  '2': {
    name: 'two',
    symbol: '2',
    id: '2',
  },
  '3': {
    name: 'three',
    symbol: '3',
    id: '3',
  },
  '4': {
    name: 'four',
    symbol: '4',
    id: '4',
  },
  '5': {
    name: 'five',
    symbol: '5',
    id: '5',
  },
  '6': {
    name: 'six',
    symbol: '6',
    id: '6',
  },
  '7': {
    name: 'seven',
    symbol: '7',
    id: '7',
  },
  '8': {
    name: 'eight',
    symbol: '8',
    id: '8',
  },
  '9': {
    name: 'nine',
    symbol: '9',
    id: '9',
  },
  'T': {
    name: 'ten',
    symbol: '10',
    id: 'T',
  },
  'J': {
    name: 'jack',
    symbol: 'J',
    id: 'J',
  },
  'Q': {
    name: 'queen',
    symbol: 'Q',
    id: 'Q',
  },
  'K': {
    name: 'king',
    symbol: 'K',
    id: 'K',
  },
};

export interface Card {
  rank: CardRank,
  suit: CardSuit
}

export const getCard = (rank: RANKS, suit: SUITS): Card => ({
  rank: cardRanks[rank],
  suit: cardSuits[suit],
});


