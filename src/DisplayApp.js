import React, { useState } from 'react';
import LoginApp from './LoginApp';
import CasinoApp from './CasinoApp';
import InGame from './InGame';

export default function DisplayApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCounter, setGameCounter] = useState(0);

  return (
  <>
		{!isLoggedIn ? (
			<div className="login" style={{ display: "block" }}>
				<LoginApp
					onLogIn={(e) => {
						setIsLoggedIn(true)
						setUsername(e)
						}}
					sendUser={(e) => {
						setUser(e)
					}}
				/>
			</div>
		) : (
			<>
				<div className="casino" style={{ display: gameStarted ? "none" : "block" }}>
					<CasinoApp
						user = {user}
						username = {username}
						onLogOut={() => setIsLoggedIn(false)}
						onGameStart={() => setGameStarted(true)}
					/>
				</div>
				<div className="ingame" style={{ display: gameStarted ? "block" : "none" }}>
					<InGame key={gameCounter} onGoBack={() => {
						setGameStarted(false)
						setGameCounter(gameCounter+1)
					}}/>
				</div>
			</>
		)}
	</>
  )
}
