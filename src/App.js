import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { getColors } from './lib/utils'

class App extends Component {

  state = {
    colors: null,
    selected: 0
  }

  defaultColor = '#000000';

  async componentDidMount(){
    const colors = await getColors();
    this.setState({ colors })
  }

  changeColor = (e) => {
    const { selected, colors } = this.state;
    this.setState({
      selected: (selected + 1) >= colors.length ? 0 : selected+1
    })
    return false;

  }

  render() {

    const { colors, selected } = this.state;

    return (
      <div onClick={this.changeColor} className="App" style={{backgroundColor: colors && colors[selected] || this.defaultColor }}>

        <img src="/logo.png" />

        <div className="copy">
          <p>Site Underconstruction</p>
          <p>
            Contact:<br />
            <a href="mailto:grafismasakini@gmail.com">grafismasakini@gmail.com</a>
          </p>
        </div>

      </div>
    );
  }
}

export default App;
