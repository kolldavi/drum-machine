import React from 'react';

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
	handleClick = item => {
		if (!this.props.power) return;
		animate(item.keyCode);
		playSound(item.id);
		this.props.onClick(item.id);
	};

	listen = () => {
		const keyCodes = this.props.drumButtons.map(item => item.keyCode);
		window.addEventListener('keyup', event => {
			if (!this.props.power) return;
			if (keyCodes.includes(event.keyCode)) {
				const videoId = this.props.drumButtons.filter(item => item.keyCode === event.keyCode)[0].id;

				animate(event.keyCode);
				playSound(videoId);
			}
		});
	};

	componentDidMount() {
		this.listen(this.props.drumButtons);
	}

	render() {
		const drumButtons = this.props.drumButtons;

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
