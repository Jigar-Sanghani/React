import React from 'react';
import './Food.css';

const Food = ({ img, price, name }) => {
    return (
        <div>
            <div id='foodlist'>
                <div id='main'>
                    <img id='img'
                        src={img}
                        alt={name}
                    />
                    <h1 id='h3'>
                        {name}
                    </h1>
                    <h5 id='price'>
                        ${price}
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default Food;