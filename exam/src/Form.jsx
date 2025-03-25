import React from 'react'
import './Form.css'

const Form = () => {


    const handleInput = (e) => {
        let { name, value } = e.target;
        console.log(name, value);

    };


    return (

        <div>

            <form className='form-container'>
                <div className='form-row'>
                    <input type="text" name="name" placeholder='Enter The Name' onChange={handleInput} />
                    <input type="email" name="email" placeholder='Enter The Email' onChange={handleInput} />
                    <input type="number" name="price" placeholder='Enter The Price' onChange={handleInput} />
                    <input type="date" name="date" onChange={handleInput} />
                    <input type="submit" value={"Add"} />
                </div>
            </form>

        </div>

    )
}

export default Form