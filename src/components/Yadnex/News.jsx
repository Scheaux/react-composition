import React from 'react';
import Article from './Article';

function News() {
  return (
    <div>
      <h3>Новости</h3>
      <div>
        <Article text='новость1' />
        <Article text='новость2' />
        <Article text='новость3' />
      </div>
    </div>
  );
}

export default News;
