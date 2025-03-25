import React from 'react'
import './Usercard.css';

const Usercard = ({ name, email, password, age, onDelete, onupdate, id }) => {
    return (
        <div className='user-card'>
            <h1>{`Name : ${name}`}</h1>
            <h2>{`Email : ${email}`}</h2>
            <h3>{`Password : ${password}`}</h3>
            <h4>{`Age : ${age}`}</h4>
            <button onClick={() => onDelete(id)}>Delete</button>
            <button onClick={() => onupdate(id)}>Update</button>
        </div>
    );
}

export default Usercard