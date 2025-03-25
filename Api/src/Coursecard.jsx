import React from 'react';
import './Coursecard.css';

const Coursecard = ({ title, fee, duration, onDelete, id, onupdate }) => {

    return (
        <div className='course-card'>
            <h1>{`Title : ${title}`}</h1>
            <h2>{`Fee : ${fee}`}</h2>
            <h3>{`Time : ${duration}`}</h3>
            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={() => onupdate(id)}>Update</button>
        </div>
    );
};

export default Coursecard;