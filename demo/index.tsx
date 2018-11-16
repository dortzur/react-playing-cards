import ReactDOM from 'react-dom';
import React from 'react';

import { Card, SUITS, RANKS } from '../src';

const Deck = () => <React.Fragment>{Object.values(SUITS).map(suitId => <div key={suitId}>
  {Object.values(RANKS).map(rankId => <Card size={10} key={rankId} rank={rankId}
                                            suit={suitId}/>)}
</div>)}</React.Fragment>;


ReactDOM.render(
  <div>
    <Deck/>
  </div>,
  document.getElementById('root'),
);
