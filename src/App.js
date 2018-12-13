import React, { Component } from 'react';
import Logo from './components/Logo.js';
import DrumpMachine from './components/DrumpMachine';
import Toggle from './components/Toggle';
import './App.css';

class App extends Component {
	render() {
		return (
			<div className="inner-container" id="drum-machine">
				<Logo />
				<DrumpMachine />
				<Toggle css="f" />
			</div>
		);
	}
}

export default App;
