import ReactDOM from 'react-dom';
import React from 'react';

import { Card, SUITS,RANKS } from '../src';

const Deck = () => Object.values(SUITS).map(suitId => <div key={suitId}>
  {Object.values(RANKS).map(rankId => <Card key={rankId} rank={rankId} suit={suitId}/>)}
</div>);

ReactDOM.render(
  <div>
    <Deck/>
  </div>,
  document.getElementById('root'),
);
