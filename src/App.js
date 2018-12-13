import React, { Component } from 'react';
import Logo from './components/Logo.js';
import DrumpMachine from './components/DrumpMachine';

import ToggleButton from 'react-toggle-button';

import './App.css';

class App extends Component {
	state = {
		power: true
	};
	render() {
		const borderRadiusStyle = { borderRadius: 2 };

		return (
			<div className="inner-container" id="drum-machine">
				<Logo />
				<DrumpMachine />
				<ToggleButton
					value={this.state.power}
					thumbStyle={borderRadiusStyle}
					trackStyle={borderRadiusStyle}
					onToggle={state => {
						console.log(state);
						console.log(this.state);
						this.setState({
							power: !this.state.power
						});
					}}
				/>
			</div>
		);
	}
}

export default App;
