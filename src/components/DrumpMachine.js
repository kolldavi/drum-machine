import React from 'react';
import { getData } from '../utils/api';
class DrumpMachine extends React.Component {
	state = {
		drumButtons: getData()
	};
	render() {
		const drumButtons = this.state.drumButtons[0];
		return (
			<div>
				{drumButtons.map(button => {
					return (
						<div key={button.id}>
							<p>{button.keyTrigger}</p>
						</div>
					);
				})}
			</div>
		);
	}
}

export default DrumpMachine;
