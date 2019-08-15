import React from 'react';

class Ppm extends React.Component {
  state = {
    ppm: null,
  };
  componentDidMount() {
    // Try to get stored session data
    const cachedPpm = JSON.parse(sessionStorage.getItem('sessionObject'));

    // Set 'caching' expiration for session data (in 24h after now)
    const rightNow = new Date();
    let expires = new Date();
    expires.setHours(rightNow.getHours() + 24);

    if (cachedPpm) {
      // If cache has expired, make a new request
      if (rightNow.getTime() > cachedPpm.expires) {
        this.makeRequest(expires);
      } else {
        // If cache was still valid, use that object to set state
        this.setState({
          ppm: cachedPpm.ppm,
        });
      }
    } else {
      // If there was no data in session, make a request
      this.makeRequest(expires);
    }
  }

  makeRequest(expires) {
    // TODO: change this and implement your own: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    const url = 'http://hqcasanova.com/co2/?callback=process';
    fetch(proxyurl + url)
      .then(response => response.text())
      .then(responseText => {
        // Process response as text and clean it since it is dirty
        const text = responseText.replace(/([\(\)]|process)/g, '');
        // Create and set new session data
        const sessionObject = {
          expires: expires,
          ppm: JSON.parse(text),
        };
        sessionStorage.setItem('sessionObject', JSON.stringify(sessionObject));
        this.setState({
          ppm: JSON.parse(text),
        });
      })
      .catch(() =>
        console.log('Can’t access ' + url + ' response. Blocked by browser?')
      );
  }
  render() {
    console.log(this.state.ppm);
    let ppm = this.state.ppm;
    return (
      <span
        style={{
          fontWeight: 'bold',
          color: this.props.attr === '0' ? '#ff0033' : '',
          fontSize: this.props.attr === '0' ? '130%' : '',
        }}
      >
        {null !== ppm ? ppm[this.props.attr] + ppm.units : ''}
      </span>
    );
  }
}

export default Ppm;
