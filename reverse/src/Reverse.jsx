import { useEffect, useState } from "react";

const Reverse = () => {
    let [flag, setFlag] = useState(false);
    let [hour, setHour] = useState(0);
    let [minute, setMinute] = useState(0);
    let [second, setSecond] = useState(0);

    let [time, setTime] = useState(0);

    let id;
    useEffect(() => {
        id = setInterval(() => {
            if (flag) {
                if (hour == 0 && minute == 0 && second == 0) {
                    setFlag(false);
                } else {
                    setSecond(second - 1);
                    if (second == 0) {
                        setSecond(59);
                        setMinute(minute - 1);
                    }
                    if (minute == 0) {
                        setMinute(59);
                        setHour(hour - 1);
                    }
                }
            }
        }, 10);

        return () => {
            clearInterval(id);
        };
    },[flag, second]);

    const divide = () => {
        if (time > 0) {
            let newTime = time / 60;
            setHour(Math.floor(newTime));
            setMinute(Math.floor((newTime - Math.floor(newTime)) * 60 - 1));
            setSecond(59);
        }
    };

    return (
        <div>
            <h1>{hour}:{minute}:{second}</h1>
            <input type="number" placeholder="Enter A Minute :" onChange={(e) => setTime(e.target.value)} />
            <button onClick={divide}>{flag ? "Stop" : "Start"}</button>
        </div>
    );
};

export default Reverse;