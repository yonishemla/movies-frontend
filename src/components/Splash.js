import React,{useState, Component, setActiveNode } from "react";

import cinema from './img/cinema.jpg';


export default class Splash extends Component {
  render() {
    const style = {top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      position: 'fixed'};

    return (
      <img className="splashimg" src={cinema} style={style}/>
    // <div> welcome </div>
    );
  }
}

