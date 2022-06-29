import React, { useState } from 'react';
import { RiPlayListAddLine } from 'react-icons/ri';
import { v4 as uuidv4 } from 'uuid';

import { clearAllToDos, addToDo } from '../functions';
import '../styles/App.css';
import '../styles/components/header.css';


const Header = ({ updateToDoList }) => {
    const [todo, setToDo] = useState('');
    const [error, setError] = useState('');

    const handleOnChange = (e) => {
        const target = e.target.value;
        setToDo(target);
        setError('');
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!!parseInt(todo)) return setError('Please enter a valid title'); // revisit this part

        const id = uuidv4();
        const payload = {
            id,
            title: todo,
            time: new Date().toISOString(),
            completed: false
        }

        updateToDoList(payload);
        setToDo('');
    }

    return (
        <header className="App-header">
            <h1>TODO Manager</h1>
            <form onSubmit={handleSubmit} className='App-header__form'>
                <input
                    type="text"
                    placeholder='Add todo here...'
                    onChange={handleOnChange}
                    value={todo}
                    className='input'
                />
                <button className='App-header__del-btn' onClick={() => clearAllToDos()}>clear all</button>
            </form>
            {!!error && <p className='error'>{error}</p>}
        </header>
    )
}

export default Header;