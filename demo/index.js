import ReactDOM from 'react-dom';
import React from 'react';

import { Card, SUITS,RANKS } from '../src';

ReactDOM.render(
  <div>
    <Card rank={RANKS.EIGHT} suit={SUITS.CLUBS}/>
    <Card rank={RANKS.JACK} suit={SUITS.HEARTS}/>
  </div>,
  document.getElementById('root'),
);
