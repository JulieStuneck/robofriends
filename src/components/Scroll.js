import React from 'react';

const Scroll = (props) => {//will use child (Cardlist) as "return"
	return (	//double{} = JS expression, returning an object, which can have CSS styles
		<div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px' }}>
			{props.children}
		</div>
	);
};

export default Scroll;