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
		<button className="drum-pad" onClick={onClick}>
			<audio id={id}>
				<source src={url} type="audio/mp3" />
			</audio>
			{keyTrigger}
		</button>
	);
};

export default DrumPad;
