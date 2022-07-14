import React from 'react';
import Card from './Card';

function Cards() {
  return (
    <div className='wrap'>
      <Card
        title='Card Title'
        desc='Some quick example text to build on the card title and make up the bulk of the cards content.'
      >
        <img
          src='https://wallup.net/wp-content/uploads/2019/09/162702-cat-eyes-pet.jpg'
          alt='cat'
        />
      </Card>
      <Card
        title='Special title treatment'
        desc='With supporting text below as a natural lead-in to additional content.'
      />
    </div>
  );
}

export default Cards;
