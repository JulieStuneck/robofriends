import React from 'react';

//const Card = (props) => { //original code, changed with 2nd Destructuring:
const Card = ({name, email, id}) => {
	//const { name, email, id } = props; //1st destructring, so don't have to list props.name, props.email
	return (
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img alt='robot' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
		);
}

export default Card;