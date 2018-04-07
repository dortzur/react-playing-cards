const cardSuits = {
  C: {
    name: 'club',
    symbol: '♣',
    color: 'black',
    id: 'C',
  },
  D: {
    name: 'diamond',
    symbol: '♦',
    color: 'red',
    id: 'D',
  },
  S: {
    name: 'spade',
    symbol: '♠',
    color: 'black',
    id: 'S',
  },
  H: {
    name: 'heart',
    symbol: '♥',
    color: 'red',
    id: 'H',
  },
};

const cardRanks = {
  A: {
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
  T: {
    name: 'ten',
    symbol: '10',
    id: 'T',
  },
  J: {
    name: 'jack',
    symbol: 'J',
    id: 'J',
  },
  Q: {
    name: 'queen',
    symbol: 'Q',
    id: 'Q',
  },
  K: {
    name: 'king',
    symbol: 'K',
    id: 'K',
  },
};

export const getCard = (rank, suit) => ({
  rank: cardRanks[rank],
  suit: cardSuits[suit],
});


