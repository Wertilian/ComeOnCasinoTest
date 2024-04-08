import React from 'react';

export default function PlayerItem(props) {
	
  return (
	<div className="player item">
		<img className="ui avatar image" src={props.user.avatar} alt="avatar"/>
		<div className="content">
			<div className="header"><b className="name">{props.user.name}</b></div>
			<div className="description event">{props.user.event}</div>
		</div>
	</div>
  )
}
