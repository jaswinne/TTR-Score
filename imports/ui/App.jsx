import React, { Component } from 'react';
 
import LengthButtonContainer from './LengthButtonContainer.js';
import ScorePanelContainer from './ScorePanelContainer.js';
 
// App component - represents the whole app
export default class App extends Component {
  getButtons() {
    return [
      { _id: 1, value: 1},
      { _id: 2, value: 2},
      { _id: 3, value: 4},
      { _id: 4, value: 7},
      { _id: 5, value: 10},
      { _id: 6, value: 15},
    ];
  }
 
  renderButtons() {
    return this.getButtons().map((button) => (
      <LengthButtonContainer key={button._id} length={button._id} value={button.value} />
    ));
  }
 
  render() {
    return (
      <div className="container">
        <header>
          <h1>Ticket To Ride</h1>
        </header>
        {this.renderButtons()}
        <ScorePanelContainer />
      </div>
    );
  }
}