import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { updateToDo } from '../functions';
import '../styles/components/todo-item.css';

const ToDoItem = ({ todo: { title, time, id } }) => {
    const [complete, setComplete] = useState(false);
    const handleRemoveTodo = (e) => {
        const target = e.target.parentElement;

        console.log(target);
    }

    const handleCompleteToDo = () => {
        setComplete(complete);
        updateToDo(id, complete);
    }

    return (
        <div
            className="todo-item"
            onClick={handleCompleteToDo}
        >
            <p>
                <input type="checkbox" value={complete} checked={complete} onChange={(e) => console.log(e.target.value)} />
                {title}
            </p>
            <small>{time}</small>
            <RiDeleteBin6Line
                style={{
                    color: 'tomato'
                }}
                onClick={handleRemoveTodo}
            />
        </div>
    )
}

export default ToDoItem;