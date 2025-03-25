import React, { useEffect, useState } from 'react'
import Coursecard from './Coursecard';
import axios from 'axios';

const Course = () => {

    let [data, setdata] = useState([])

    const getCourse = async () => {
        try {
            let res = await axios.get("http://localhost:3000/course");
            setdata(res.data);
        } catch (error) {
            console.log("Not Found", error);
        }
    };

    const handledelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/course/${id}`);
        } catch (error) {
            console.log("Not Found", error);
        }
    }

    const handleupdate = async (id) => {
        try {
            let update = await axios.get(`http://localhost:3000/course/${id}`);
            setdata([update.data])
            console.log(data);
            

        } catch (error) {
            console.log("Not Found", error);
        }
    }

    useEffect(() => {
        getCourse()
    }, [handledelete]);


    return (
        <div>
            {data?.map((ele) => (
                <Coursecard key={ele.id} {...ele} onDelete={handledelete} onupdate={handleupdate} />
            ))}
        </div>
    )
}

export default Course