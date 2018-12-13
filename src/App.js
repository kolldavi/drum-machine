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
		const borderRadiusStyle = { borderRadius: 5, fontSize: '2.5em' };
		const { power } = this.state;
		console.log(power);
		return (
			<div className="inner-container" id="drum-machine">
				<Logo />
				<DrumpMachine power={power} />
				<div className="power">
					<ToggleButton
						style={{ gridArea: 'power' }}
						value={this.state.power}
						thumbStyle={borderRadiusStyle}
						trackStyle={borderRadiusStyle}
						onToggle={() => {
							this.setState({
								power: !this.state.power
							});
						}}
					/>
				</div>
			</div>
		);
	}
}

export default App;
