import React from 'react';
import './toggle.css';
const Toggle = ({ toggleSwitch, data, enabled }) => {
	return (
		<div class="toggle" onClick={toggleSwitch}>
			{data}
		</div>
	);
};

export default Toggle;
