import React, { useState } from 'react';
import './Qustion.css';
import axios from 'axios';

const Qustion = () => {
    const [question, setQuestion] = useState({
        question: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctAnswer: ''
    });
    const [message, setMessage] = useState('');

    const handleInput = (e) => {
        const { name, value } = e.target;
        setQuestion((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:4454/qustions/create_qustion', question);
            setMessage('Question added successfully!');
            setQuestion({
                question: '',
                optionA: '',
                optionB: '',
                optionC: '',
                optionD: '',
                correctAnswer: ''
            });
            console.log(res.data);
            window.location.reload();
        } catch (error) {
            console.error(error);
            setMessage('Failed to add question.');
        }
    };

    return (
        <div className="container">
            <h1>Add a New Question : </h1>
            {message && <p>{message}</p>}
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="Enter Question :"
                    value={question.question}
                    onChange={handleInput}
                    name="question"
                /><br/>
                <input
                    type="text"
                    placeholder="Enter Option A :"
                    value={question.optionA}
                    onChange={handleInput}
                    name="optionA"
                /><br/>
                <input
                    type="text"
                    placeholder="Enter Option B :"
                    value={question.optionB}
                    onChange={handleInput}
                    name="optionB"
                /><br/>
                <input
                    type="text"
                    placeholder="Enter Option C :"
                    value={question.optionC}
                    onChange={handleInput}
                    name="optionC"
                /><br/>
                <input
                    type="text"
                    placeholder="Enter Option D :"
                    value={question.optionD}
                    onChange={handleInput}
                    name="optionD"
                /><br/>
                <input
                    type="text"
                    placeholder="Enter Answer :"
                    value={question.correctAnswer}
                    onChange={handleInput}
                    name="correctAnswer"
                /><br/><br/>
                <input type="submit" value="Add Question" /><br/>
                <br/>
            </form>
        </div>
    );
}

export default Qustion