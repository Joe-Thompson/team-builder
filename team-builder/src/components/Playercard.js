import React from 'react';

function PlayerCard ({props}) {
    console.log(props.name);
    return (
        <div className='playerCard'>
            <h3>{props.name}</h3>
            <h4>Primary Position - {props.primaryPosition} </h4>
            <p>Secondary Position - {props.secondaryPosition.map((item) => item )}</p>
        </div>
    )
};

export default PlayerCard;