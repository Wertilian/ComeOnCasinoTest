import React, {useEffect, useState} from 'react';
import GameItem from './GameItem';

 function InitGameList(props) {
  const [gameData, setGameData] = useState([]);
  const listOfGames = {
	feastingfox:{src:"https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/feastingfox/index.html?moneymode=fun"},
	bookofinferno94:{src:"https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/bookofinferno/index.html?moneymode=fun"},
	warpwreckers:{src:"https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/warpwreckers/index.html?moneymode=fun"},
	renosevens:{src:"https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/renosevens/index.html?moneymode=fun"},
	scattermonsters:{src:"https://d2k3wptpwv4u4d.cloudfront.net/mcasino/quickspin/scattermonsters/index.html?moneymode=fun"}
  };

  

  useEffect(() => {
    fetch(props.url, { method: 'get' })
	  .then((response) => {
		  if (response.status !== 200) {
			throw new Error(response.statusText);
		  }
		  return response.json();
		}).then(data => setGameData(data));
  },[props.url]);
  
  return (
    <>
	{gameData.map((item) => (
        <GameItem
			key={item.name}
			name={item.name}
			description={item.description}
			code={item.code}
			imgsrc={item.icon}
			categories={item.categoryIds}
			showCategory={props.showCategory}
			showByFilter={props.showByFilter}
			gameList={listOfGames}
			onGameStart={props.onGameStart}
		/>
      ))}
    </>
  )
	 
 }
					
export default function GameList(props) {
	
  return (
	<div className="ui relaxed divided game items links">
		<InitGameList url="http://localhost:3001/games" showCategory={props.showCategory} showByFilter={props.showByFilter} onGameStart={props.onGameStart}/>
	</div>
  )
}