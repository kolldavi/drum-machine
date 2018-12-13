import React from 'react';
/*
	keyCode: 68,
    keyTrigger: 'D',
	id: 'Closed-HH',
	url
*/
const DrumPad = ({ props, onClick }) => {
	const { keyCode, keyTrigger, id, url } = props;

	return (
		<div className="drum-item" onClick={onClick} id={`btn-${keyCode}`}>
			<audio id={id}>
				<source src={url} type="audio/mp3" />
			</audio>
			{keyTrigger}
		</div>
	);
};

export default DrumPad;
