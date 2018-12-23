import React from 'react';

const Toggle = ({ toggleSwitch, data, enabled }) => {
	return <div onClick={toggleSwitch}>{data}</div>;
};

export default Toggle;
