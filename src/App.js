import React, { Component } from 'react';
import Logo from './components/Logo.js';
import DrumpMachine from './components/DrumpMachine';
import ToggleButton from 'react-toggle-button';
import LableText from './components/LableText';
import LastClickedButtonView from './components/LastClickedButtonView';
import { getData } from './utils/api';
import Toggle from './components/Toggle';
import './App.css';

class App extends Component {
	state = {
		power: true,
		soundTrack: false,
		data: getData(),
		LastClickedButton: 'piano'
	};
	render() {
		const borderRadiusStyle = { borderRadius: 5, fontSize: '2.5em' };
		const { power, soundTrack } = this.state;

		return (
			<div className="inner-container" id="drum-machine">
				<Logo />
				<DrumpMachine
					power={power}
					soundTrack={soundTrack}
					drumButtons={this.state.data[soundTrack ? 0 : 1]}
					onClick={d => {
						this.setState({
							LastClickedButton: d
						});
					}}
				/>
				<div className="power">
					<h5 className="power-header">Power</h5>
					<Toggle
						enabled={this.state.power}
						data={this.state.power ? 'on' : 'off'}
						toggleSwitch={() => {
							this.setState({
								power: !this.state.power
							});
						}}
					/>
				</div>
				<div className="LastClickedButtonView">
					<LastClickedButtonView info={this.state.LastClickedButton} />
				</div>
				<div className="toggle-song">
					<h5 className="toggl-song-header">Change Beat</h5>

					<Toggle
						enabled={this.state.soundTrack}
						data={this.state.soundTrack ? '1' : '2'}
						toggleSwitch={() => {
							const LastClickedButton = this.state.soundTrack ? 'piano' : 'heater';
							this.setState({
								soundTrack: !this.state.soundTrack,
								LastClickedButton
							});
						}}
					/>
				</div>
			</div>
		);
	}
}

export default App;
