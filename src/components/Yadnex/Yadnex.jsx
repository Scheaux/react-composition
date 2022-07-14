import React from 'react';
import News from './News';
import MiniAd from './MiniAd';
import Search from './Search';
import Ad from './Ad';
import Weather from './Weather';
import Visited from './Visited';
import Map from './Map';
import Tv from './Tv';
import Stream from './Stream';

function Yadnex() {
  return (
    <div className='wrap'>
      <div className='flex'>
        <News />
        <MiniAd text='описание рекламы' />
      </div>
      <Search />
      <Ad />
      <div className='flex'>
        <div>
          <Weather />
          <Visited />
        </div>
        <div>
          <Map />
          <Tv />
        </div>
        <Stream />
      </div>
    </div>
  );
}

export default Yadnex;
