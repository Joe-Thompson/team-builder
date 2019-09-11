import React, { useState } from 'react';
import { PlayerPositions } from "./PlayerData";


function PlayerForm (props) {
    console.log(props);
    const [playerData, setPlayerData] = useState({
        name: '',
        primaryPosition: '',
        playerNotes: ''
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
        reset(props);
        props.addNewPlayerData(newPlayer);
    };

    function reset () {
        setPlayerData({
            name: '',
            primaryPosition: '',
            playerNotes: ''
        });
    }

    return(
        <form onSubmit={submitForm} className='playerForm'>
            <label className='nameFormField' htmlFor='Name'>Player Name</label>
            <input className='nameFormInput' type='text' id='name' name='name' value={playerData.name} onChange={changeHandler} />

            <label className='positionFormField' htmlFor='primaryPosition'>Primary Position</label>
            <select className='positionFormDropDown' id='Position' name='primaryPosition' onChange={changeHandler} >

                <option value={playerData.primaryPosition} name='primaryPosition' > - - Choose a Position - - </option>
                {PlayerPositions.map((item) => {
                    return (
                        <option key={item} value={item} name='primaryPosition' onChange={changeHandler} >{item}</option>
                    )
                })}
            </select>

            <label className='playerNoteFormField' htmlFor='playerNotes' >Player Notes</label>
            <textarea className='playerNoteFormInput' name='playerNotes' onChange={changeHandler} />

            <button type='submit' >Save Player</button>
        </form>
    )
}

export default PlayerForm;