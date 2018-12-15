import React from 'react';
import { getData } from '../utils/api';
import DrumPad from './DrumPad';

function playSound(id) {
	const ele = document.getElementById(id);
	ele.currentTime = 0;
	ele.play();
}

function animate(drumItemId) {
	const item = document.getElementById(`btn-${drumItemId}`);
	item.classList.add('active');
	setTimeout(function() {
		item.classList.remove('active');
	}, 100);
}
class DrumpMachine extends React.Component {
	state = {
		drumButtons: getData()
	};

	handleClick = item => {
		if (!this.props.power) return;

		playSound(item.id);
		animate(item.keyCode);
	};

	listen = () => {
		const data = this.state.drumButtons[0];
		const keyCodes = data.map(item => item.keyCode);
		window.addEventListener('keyup', event => {
			if (!this.props.power) return;
			if (keyCodes.includes(event.keyCode)) {
				const videoId = data.filter(item => item.keyCode === event.keyCode)[0].id;
				animate(event.keyCode);
				playSound(videoId);
			}
		});
	};
	componentDidMount() {
		this.setState({ power: this.props.power });
		this.listen(this.state.drumButtons[0]);
	}

	render() {
		const drumButtons = this.state.drumButtons[0];

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
