import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input class="input" value={userInput} type="text" onChange={handleChange} placeholder="Add New Task..."/>
            <button class="submit-button">Add</button>
        </form>
    );
};

export default ToDoForm;