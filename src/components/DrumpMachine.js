import React from 'react';
import { getData } from '../utils/api';
import DrumPad from './DrumPad';

function playSound(id) {
	const sound = document.getElementById(id);
	sound.load();
	sound.currentTime = 0;
	sound.play();
}

function animate(drumItemId) {
	const item = document.getElementById(`btn-${drumItemId}`);
	item.classList.add('active');
	setTimeout(function() {
		item.classList.remove('active');
	}, 200);
}
class DrumpMachine extends React.Component {
	state = {
		drumButtons: getData()
	};

	handleClick = item => {
		if (!this.props.power) return;
		animate(item.keyCode);
		playSound(item.id);
	};

	listen = () => {
		const keyCodes = this.state.drumButtons[0].map(item => item.keyCode);
		window.addEventListener('keyup', event => {
			if (!this.props.power) return;
			if (keyCodes.includes(event.keyCode)) {
				const videoId = this.state.drumButtons[this.props.soundTrack ? 0 : 1].filter(
					item => item.keyCode === event.keyCode
				)[0].id;

				animate(event.keyCode);
				playSound(videoId);
			}
		});
	};

	componentDidMount() {
		this.setState({ power: this.props.power });
		this.listen(this.state.drumButtons);
	}

	render() {
		const drumButtons = this.state.drumButtons[this.props.soundTrack ? 0 : 1];

		return (
			<div className="drum-machine">
				{drumButtons.map(item => {
					return (
						<DrumPad
							id={item.keyCode}
							key={item.keyCode}
							props={item}
							onClick={() => this.handleClick(item)}
						/>
					);
				})}
			</div>
		);
	}
}

export default DrumpMachine;
