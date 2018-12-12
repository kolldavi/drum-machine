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
		power: true,
		currentSound: null
	};
	handleClick = item => {
		playSound(item);
	};

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
