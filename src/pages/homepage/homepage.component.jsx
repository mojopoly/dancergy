import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
  <div className='homepage'>
    <div className='homepage-hero'>
      <h1 className='homepage-hero-text'>Love Dancing. Love Energy. Love Dancergy!</h1>
    </div>
    <div className='about-us'>
      <h1>Dancergy was created to make dancing sexier!</h1>
      <p>Our story goes back to our social dancer lifestyle.</p>
    </div>
    <div className='directory-menu'>
      <Directory />
    </div>
  </div>
);

export default HomePage;