import React, { useState, useEffect } from 'react';
import './App.css';
import PlayerData from "./components/PlayerData";
import PlayerCard from "./components/Playercard";
import PlayerForm from "./components/PlayerForm";

function App() {
  const [player, setPlayer] = useState([{
    name: '',
    primaryPosition: '',
    playerNotes: ''
  }]);

    useEffect(() => {
      setPlayer(PlayerData);
    },[]);

    const addNewPlayerData = playerNew => {
      setPlayer([...player, playerNew]);
    };
console.log(player);
  return (
    <div className="App">
      <img className='neganLogo' src='https://i.pinimg.com/originals/41/5e/2a/415e2ad3ce963b65721716044b724706.jpg' alt='missing' />
      {player.map((item, index) => {
        return (
            <PlayerCard key={index} props={item}  />
        )
      })}
      <PlayerForm addNewPlayerData={addNewPlayerData}/>
    </div>
  );
}

export default App;
