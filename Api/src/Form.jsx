import React from 'react'

const Form = () => {
    return (
        <div>
            <form>
                <input type="text" id="Name" name="Name" placeholder='Enter Course Name :' required /><br /><br />
                <input type="text" id="Name" name="Name" placeholder='Enter Course Fee :' required /><br /><br />
                <input type="text" id="Name" name="Name" placeholder='Enter Course Duration :' required /><br /><br />
                <input type="submit" value="Add" />
            </form>
        </div>
    )
}

export default Form