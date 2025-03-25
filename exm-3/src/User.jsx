import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Usercard from './Usercard';

const Users = () => {

    let [data, setdata] = useState([])

    const getusers = async () => {
        try {
            let res = await axios.get("http://localhost:3000/users");
            setdata(res.data);
        } catch (error) {
            console.log("Not Found", error);
        }
    };

    const handledelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/users/${id}`);
        } catch (error) {
            console.log("Not Found", error);
        }
    }

    const handleupdate = async (id) => {
        try {
            let update = await axios.get(`http://localhost:3000/users/${id}`);
            setdata([update.data])
            console.log(data);


        } catch (error) {
            console.log("Not Found", error);
        }
    }

    useEffect(() => {
        getusers()
    }, [handledelete]);


    return (
        <div>
            {data?.map((ele) => (
                <Usercard key={ele.id} {...ele} onDelete={handledelete} onupdate={handleupdate} />
            ))}
        </div>
    )
}

export default Users