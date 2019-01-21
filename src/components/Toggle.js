import React from 'react';

const styles = {
	toggleOff: {
		width: '33%',
		height: '100%',
		borderRadius: '5px',
		marginLeft: '67%',
		backgroundColor: 'red'
	},
	toggleOn: { width: '33%', height: '100%', borderRadius: '5px', backgroundColor: 'green' },
	toggle: {
		border: '1px solid black',
		borderRadius: '5px',
		width: '75px',
		height: '30px'
	}
};

const Toggle = ({ toggleSwitch, data, enabled }) => {
	return (
		<div style={styles.toggle} onClick={toggleSwitch}>
			<div style={enabled ? styles.toggleOn : styles.toggleOff}>{data}</div>
		</div>
	);
};

export default Toggle;
