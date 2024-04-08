import React from 'react';

export default function PlayerItem(props) {
  
  function startGame() {
	const gamesource = props.gameList[props.gameCode].src;
	const launchLocation = document.getElementById("game-launch");
	launchLocation.innerHTML="";
	const gameElement = document.createElement("iframe");
	gameElement.frameBorder=0;
	gameElement.width="640px";
	gameElement.height="480px";
	gameElement.scrolling="no";
	gameElement.id="game";
	gameElement.setAttribute("src",gamesource);
	launchLocation.appendChild(gameElement);
	props.onGameStart();
  }
	
  return (
	<div className="play ui right floated secondary button inverted" onClick={startGame}>
		Play
		<i className="right chevron icon"></i>
	</div>
  )
}