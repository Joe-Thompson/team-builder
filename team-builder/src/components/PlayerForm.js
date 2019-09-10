import React, { useState } from 'react';
import { PlayerPositions } from "./PlayerData";


function PlayerForm (props) {
    const [playerData, setPlayerData] = useState({
        name: '',
        primaryPosition: '',
        secondaryPosition: ['']
    });

    const changeHandler = event => {
        setPlayerData({...playerData, [event.target.name]: event.target.value })
    };

    const submitForm = event => {
        event.preventDefault();
        const newPlayer = {
            ...playerData,
            id: Date.now()
        };
        console.log(newPlayer);
        props.addNewPlayerData(newPlayer);
    };

    return(
        <form onSubmit={submitForm} className='playerForm'>
            <label htmlFor='Name'>Player Name</label>
            <input type='text' id='name' name='name' value={playerData.name} onChange={changeHandler} />

            <label htmlFor='Position'>Primary Position</label>
            <select id='Position'>

                <option value={playerData.primaryPosition['']} name='primaryPosition' onChange={changeHandler} > - - Choose a Position - - </option>
                {PlayerPositions.map((item) => {
                    return (
                        <option key={item} value={item} name='primaryPosition' onChange={changeHandler} >{item}</option>
                    )
                })}
            </select>

            {PlayerPositions.map((item) => {
                return (
                    <div>
                        <input key={item} value={playerData.secondaryPosition['']} type='checkbox' name='secondaryPosition' onChange={changeHandler} />
                        <label htmlFor={item} onChange={changeHandler} >{item}</label>
                    </div>
            )
            })}


            <button type='submit' >Save Player</button>
        </form>
    )
};

export default PlayerForm;