import React from 'react';
import './toggle.css';
const toggleOff = {
	width: '33%',
	height: '100%',
	borderRadius: '5px',
	marginLeft: '67%',
	backgroundColor: 'red'
};
const toggleOn = { width: '33%', height: '100%', borderRadius: '5px', backgroundColor: 'green' };
const Toggle = ({ toggleSwitch, data, enabled }) => {
	return (
		<div className="toggle" onClick={toggleSwitch}>
			<div style={enabled ? toggleOn : toggleOff}>{data}</div>
		</div>
	);
};

export default Toggle;
