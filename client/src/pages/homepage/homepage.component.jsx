import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
  <div className='homepage'>
    <div className='homepage-hero'>
      <div className='homepage-hero-image'>
        <img src='https://i.imgur.com/agF60eb.jpg?1' alt='banner' />
      </div>
      <h1 className='homepage-hero-text'>Love Dancing. Love Energy. Love Dancergy!</h1>
    </div>
    <div className='directory-menu'>
      <h2 className='directory-menu-heading'>SHOP OUR MOST FAVOURITE FANNY PACKS!</h2>
      <Directory />
    </div>
    <div className='about-us'>
      <h1>Dancergy was created to make dancing sexier!</h1>
      <p>Our story goes back to our social dancer lifestyle.</p>
    </div>
  </div>
);
export default HomePage;