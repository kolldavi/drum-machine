import React from 'react';

function Toggle(props) {
	return (
		<div id="onOff">
			<a id="off">off</a>
			<a className={'toggler ' + props.css} />
			<a id="on">on</a>
		</div>
	);
}

export default Toggle;
