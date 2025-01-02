import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0)

    const dec = () => {
        setCount(count - 1)
    }

    const inc = () => {
        setCount(count + 1)
    }


    return (


        <div>


            <h1 style={{
                fontSize: "45px",
                textAlign: "center",
            }}>Counter : {count}</h1>


            <div style={{
                width: "100%",
                display: 'flex',
                justifyContent: 'space-around',
            }}>


                <button style={{
                    border: "0px",
                    height: "60px",
                    width: "60px",
                    fontSize: "30px",
                    backgroundColor: "blue",
                    color: "yellow"
                }} onClick={dec}>-</button>


                <button style={{
                    border: "0px",
                    height: "60px",
                    width: "60px",
                    fontSize: "30px",
                    backgroundColor: "blue",
                    color: "yellow"
                }} onClick={inc}>+</button>


            </div>


        </div>
    )
}

export default Counter