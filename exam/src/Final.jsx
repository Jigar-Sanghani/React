import React from 'react'
import Form from './Form'
import Timer from './Counter'

const Final = () => {
    return (
        <div>
            <Form />
            <Timer value= {30}/>
            <Timer value= {60}/>
        </div>
    )
}

export default Final