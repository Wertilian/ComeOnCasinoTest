import React from 'react';
import PlayGame from './PlayGame';

export default function GameItem(props) {
	
  return (
	  <div className="game item" style={{ 
		  display: props.categories.includes(props.showCategory) && 
		  props.name.toLowerCase().includes(props.showByFilter.toLowerCase()) ? "" : "none" 
	  }}>
		<div className="ui small image">
			<img src={props.imgsrc} alt="game-icon"/>
		</div>
		<div className="content">
			<div className="header"><b className="name">{props.name}</b></div>
			<div className="description">
				{props.description}
			</div>
			<div className="extra">
				<PlayGame gameCode={props.code} gameList={props.gameList} onGameStart={props.onGameStart}/>
			</div>
		</div>
	</div>
  )
}


	
	

	
	
	
	
