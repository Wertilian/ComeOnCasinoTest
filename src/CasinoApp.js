import React, { useState } from 'react';
import GameList from './GameList';
import CategoryList from './CategoryList';
import PlayerItem from './PlayerItem';
import SearchField from './SearchField';

export default function CasinoApp(props) {
	
  const [showCategory, setShowCategory] = useState(0);
  const [searchValue, setSearchValue] = useState("");
	
  function handleLogOut(e) {
	fetch('http://localhost:3001/logout', {
			method: 'post',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: props.username
			})
		})
		.then((response) => {
		  if (response.status !== 200) {
			throw new Error(response.statusText);
		  }
		  return response.json();
		})
		.then(() => {
			props.onLogOut()
		})
		.catch((err) => {
		});
  }
  
  return (
	  <>
		<div className="ui grid centered">
			<div className="twelve wide column">
				<div className="ui list">
					<PlayerItem user={props.user}/>
				</div>
				<div onClick={handleLogOut} className="logout ui left floated secondary button inverted">
					<i className="left chevron icon"></i>Log Out
				</div>
			</div>
			<div className="four wide column">
				<SearchField handleSearch={(i) => {
					setSearchValue(i)
					}} 
				/>
			</div>
		</div>
		<div className="ui grid">
			<div className="twelve wide column">
				<h3 className="ui header">Games</h3>
				<GameList showCategory={showCategory} showByFilter={searchValue} onGameStart={props.onGameStart}/>
			</div>
			<div className="four wide column">
				<h3 className="ui header">Categories</h3>
				<div className="ui selection animated list category items">
					<CategoryList 
						handleCategoryChange={(i) => {
						setShowCategory(i)
						}}
					/>
				</div>
			</div>
		</div>
	</>
  )
}
