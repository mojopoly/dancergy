import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';

const HomePage = () => (
  <div className="homepage">
    <div className="homepage-hero">
      <div className="homepage-hero-image">
        <img src="https://i.imgur.com/agF60eb.jpg?1" alt="banner" />
      </div>
      <h1 className="homepage-hero-text">Keep Your Swag on the Dance Floor!</h1>
    </div>
    <div className="directory-menu">
      <h2 className="directory-menu-heading">Shop Latest and Coolest!</h2>
      <Directory />
    </div>
    <div className="about-us">
      <h2 className="directory-menu-heading">
        Dancergy Was Created to Make Dancing Sexier!
      </h2>
      <div className="about-us-container">
        <div className="about-us-img">
          <img src="https://i.imgur.com/UHYvwmH.jpg" />
        </div>
        <p className="about-us-text">
          We’ve been dancing in our respective communities for over 7 years and
          have always appreciated the power of dance. Dancing energizes. It
          uplifts. It also has this incredible ability to bring people together
          - from all walks of life, all ages, all backgrounds. Having seen and
          experienced firsthand some of the challenges that come along with
          dancing in a social setting, we were driven to help solve these
          problems to ensure that every dancer has a positive experience on the
          dance floor.
        </p>
      </div>
    </div>
  </div>
);
export default HomePage;
