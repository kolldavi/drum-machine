import React, { Component } from 'react';
import Logo from './components/Logo.js';
import DrumpMachine from './components/DrumpMachine';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="inner-container" id="drum-machine">
				<Logo />
				<DrumpMachine />
			</div>
		);
	}
}

export default App;
