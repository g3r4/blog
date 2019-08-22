import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';
import Ppm from './Ppm';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Gerardo M`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 250 }}>
          A personal blog by{' '}
          <a href="https://mobile.twitter.com/_g3r4">Gerardo M</a>. 
          CO<sub>2</sub> this week: <Ppm attr="0" />
        </p>
      </div>
    );
  }
}

export default Bio;
