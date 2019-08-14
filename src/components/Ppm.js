import React from 'react';

class Ppm extends React.Component {
  state = {
    ppm: null,
  };
  componentDidMount() {
    // TODO: change this and implement your own: https://stackoverflow.com/questions/43871637/no-access-control-allow-origin-header-is-present-on-the-requested-resource-whe
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    fetch(proxyurl + 'http://hqcasanova.com/co2/?callback=process')
      .then(response => response.text())
      .then(responseText => {
        console.log(responseText);
        const text = responseText.replace(/([\(\)]|process)/g, '');
        console.log(JSON.parse(text));
        this.setState({
          ppm: JSON.parse(text),
        });
      })
      .catch(() =>
        console.log('Can’t access ' + url + ' response. Blocked by browser?')
      );
  }
  render() {
    let ppm = this.state.ppm;
    return (
      <div
        style={{
          textAlign: 'right',
          transition: 'color 0.5s ease-in, background 0.5s ease-in',
          fontSize: '80%',
        }}
      >
        {null !== ppm
          ? 'Atmospheric CO2 levels measured today: ' + ppm[0] + ppm.units
          : ''}
      </div>
    );
  }
}

export default Ppm;
