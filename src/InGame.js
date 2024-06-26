import React from 'react';

export default function InGame(props) {
	
  function goBack() {
	  props.onGoBack();
  }
	
  return (
	<div className="ui grid centered">
		<div className="three wide column">
			<div className="ui right floated secondary button inverted" onClick={goBack}>
				<i className="left chevron icon"></i>Back
			</div>
		</div>
		<div className="ten wide column">
			<div id="game-launch">
			</div>
		</div>
		<div className="three wide column"></div>
	</div>
  )
}
