import React, { useState, useEffect } from 'react';
import './App.css';
import PlayerData from "./components/PlayerData";
import PlayerCard from "./components/Playercard";
import PlayerForm from "./components/PlayerForm";

function App() {
  const [player, setPlayer] = useState([]);

    useEffect(() => {
      setPlayer(PlayerData);
    },[]);

    const addNewPlayerData = playerNew => {
      setPlayer([...player, playerNew]);
    };

  return (
    <div className="App">
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
