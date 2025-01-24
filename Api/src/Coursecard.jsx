import React from 'react';

const Coursecard = ({ title, fee, duration, onDelete, id }) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>{fee}</h2>
            <p>{duration} : months</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );``
};

export default Coursecard;