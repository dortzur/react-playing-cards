import ReactDOM from 'react-dom';
import React from 'react';

import { Card, ranks, suits } from '../src';

ReactDOM.render(
  <div>
    <Card rank={ranks.eight} suit={suits.club}/>
    <Card rank={ranks.jack} suit={suits.club}/>
  </div>,
  document.getElementById('root'),
);
