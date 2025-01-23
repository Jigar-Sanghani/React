import React from 'react';

const Coursecard = ({ id, ele, onDelete }) => {
    return (
        <div>
            <h1>{ele.Name}</h1>
            <h2>{ele.Fee}</h2>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
};

export default Coursecard;