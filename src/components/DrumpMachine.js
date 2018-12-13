import React from 'react';
import { getData } from '../utils/api';
import DrumPad from './DrumPad';

function playSound(id) {
	const ele = document.getElementById(id);
	ele.currentTime = 0;
	ele.play();
}

class DrumpMachine extends React.Component {
	state = {
		drumButtons: getData(),
		currentSound: null
	};

	handleClick = item => {
		playSound(item);
	};

	listen = () => {
		const data = this.state.drumButtons[0];
		const keyCodes = data.map(item => item.keyCode);
		window.addEventListener('keyup', event => {
			if (keyCodes.includes(event.keyCode)) {
				const i = data.filter(item => item.keyCode === event.keyCode)[0].id;
				playSound(i);
			}
		});
	};
	componentDidMount() {
		this.listen(this.state.drumButtons[0]);
	}

	render() {
		const drumButtons = this.state.drumButtons[0];

		return (
			<div>
				{drumButtons.map(item => {
					return (
						<DrumPad
							id={item.keyCode}
							key={item.keyCode}
							props={item}
							onClick={() => this.handleClick(item.id)}
						/>
					);
				})}
			</div>
		);
	}
}

export default DrumpMachine;
