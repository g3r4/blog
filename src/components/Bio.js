import React from 'react';
//import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'block',
          marginBottom: rhythm(2),
        }}
      >
        {/* <img
          src={profilePic}
          alt={`Dan Abramov`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        /> */}
        <p style={{ maxWidth: 310 }}>
          Personal blog by{' '}
          <a href="https://mobile.twitter.com/_g3r4">g3r4</a>.{' '}
        </p>
        <p >
          You can't go back and change the beginning, but you can start where you are and change how it ends - C.S. Lewis.
        </p>
      </div>
    );
  }
}

export default Bio;
