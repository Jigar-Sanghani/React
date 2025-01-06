import React, { useEffect, useState } from "react";
import './Counter.css'


const Timer = ({value}) => {
    const [minute, setMinute] = useState(value);
    const [second, setSecond] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            if (minute === 0 && second === 0) {
                clearInterval(timerId);
            } else if (second === 0) {
                setSecond(59);
                setMinute(minute - 1);
            } else {
                setSecond(second - 1);
            }
        }, 1000);

        return () => clearInterval(timerId);
    }, [minute, second]);

    return (

        <div className="timer-container">
            <h2 className="timer-label">Time Left :</h2>

            <h3  className="timer">
                00:{minute}:{second}
            </h3>
        </div>
    );
}



export default Timer