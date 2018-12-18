import React, { Component } from 'react';
import Logo from './components/Logo.js';
import DrumpMachine from './components/DrumpMachine';
import ToggleButton from 'react-toggle-button';
import LableText from './components/LableText';
import './App.css';

class App extends Component {
	state = {
		power: true,
		soundTrack: false
	};
	render() {
		const borderRadiusStyle = { borderRadius: 5, fontSize: '2.5em' };
		const { power, soundTrack } = this.state;

		return (
			<div className="inner-container" id="drum-machine">
				<Logo />
				<DrumpMachine power={power} soundTrack={soundTrack} />
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
					<ToggleButton
						inactiveLabel={<LableText textLable="1" />}
						activeLabel={<LableText textLable="2" />}
						value={this.state.soundTrack}
						colors={{
							active: {
								base: 'rgb(42, 69, 140))'
							},
							inactive: {
								base: 'rgb(244, 155, 66)'
							}
						}}
						thumbStyle={borderRadiusStyle}
						trackStyle={borderRadiusStyle}
						onToggle={() => {
							this.setState({
								soundTrack: !this.state.soundTrack
							});
						}}
					/>
				</div>
			</div>
		);
	}
}

export default App;
