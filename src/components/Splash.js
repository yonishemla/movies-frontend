import React,{useState, Component, setActiveNode } from "react";

import cinema from './img/cinema.jpg';

import ProgressBar from 'react-customizable-progressbar';

import './Splash.css'


export default class Splash extends Component {

  constructor(props) {
    super(props);
    this.state = {
    prog: 0
    };
  }

  componentDidMount() 
{
      setTimeout(function() { 
      this.setState({prog: 20}) 
  }.bind(this), 600)

      setTimeout(function() { 
      this.setState({prog: 40}) 
  }.bind(this), 600)

        setTimeout(function() { 
      this.setState({prog: 60}) 
  }.bind(this), 600)

        setTimeout(function() { 
      this.setState({prog: 80}) 
  }.bind(this), 600)

        setTimeout(function() { 
      this.setState({prog: 100}) 
  }.bind(this), 600)

}

  render() {
    return (
    <div className="splash">
     <h1 className="welcome">Welcome</h1> 
     <h3>to <bold>Movie App</bold></h3>
    <ProgressBar className="bar"
    progress={this.state.prog}
    radius={100}/>
    </div>
    );
  }
}

