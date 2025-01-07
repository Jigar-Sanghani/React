import React from 'react'
import Form from './Form'
import Timer from './Counter'
import Map from './Map'

const Final = () => {
    return (
        <div>
            <Form />
            <Timer value={30} />
            <Timer value={60} />
            <Map />
        </div>
    )
}

export default Final