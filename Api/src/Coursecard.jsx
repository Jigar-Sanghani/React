import React from 'react';

const Coursecard = ({ title, fee, duration, onDelete, id }) => {

    return (
        <div>
            <h1>{`Title : ${title}`}</h1>
            <h2>{`Fee : ${fee}`}</h2>
            <h3>{`Time : ${duration}`}</h3>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

export default Coursecard;