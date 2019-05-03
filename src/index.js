import React from 'react';
import ReactDOM from 'react-dom';
import './SeasonDisplay.css';
import SeasonDisplay from './SeasonDisplay.js';
import Spinner from './Spinner';
import Error from './Error';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {lat: null, err: ''};
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat: position.coords.latitude}),
        error => this.setState({err: error.message})
    );
  }

  renderContent() {
    if (this.state.err && !this.state.lat) {
      return (
          <Error text={this.state.err}/>
      );
    }

    if (this.state.lat && !this.state.err) {
      return (
          <SeasonDisplay lat={this.state.lat}/>
      )
    } else {
      return (
          <Spinner/>
      );
    }
  }

  render() {
    return (
        <div>
          {this.renderContent()}
        </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
);