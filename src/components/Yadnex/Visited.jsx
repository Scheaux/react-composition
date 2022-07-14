import React from 'react';
import Article from './Article';

function Visited() {
  return (
    <div className='column'>
      <h4>Посещаемое</h4>
      <Article text='недвижимость' />
      <Article text='маркет' />
      <Article text='авто' />
    </div>
  );
}

export default Visited;
