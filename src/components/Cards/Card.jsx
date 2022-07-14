import React from 'react';

function Card(props) {
  const { title, desc } = props;

  return (
    <div className='card' style={{ width: '18rem' }}>
      {props.children}
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{desc}</p>
        <a href='#' className='btn btn-primary'>
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Card;
