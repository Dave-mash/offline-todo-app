import { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';

import { updateToDo, removeToDo, sortToDoList } from '../functions';
import '../styles/components/todo-item.css';

const ToDoItem = ({
        todo: { title, time, id, completed },
        todos,
        updateToDoStatus
    }) => {
    const [complete, setComplete] = useState(completed);

    const handleToggleToDoStatus = () => {
        const status = !complete;

        setComplete(status);
        updateToDoStatus(id, status);
    }

    return (
        <div className="todo-item">
            <div
                className={`todo-item__status ${complete ? 'todo-item__inactive' : ''}`}
                onClick={handleToggleToDoStatus}
            >
                <p>
                    <input type="checkbox" value={complete} checked={complete} onChange={(e) => console.log(e.target.value)} />
                    {title}
                </p>
                <small>{time}</small>
            </div>
            <RiDeleteBin6Line
                style={{
                    color: 'tomato'
                }}
                onClick={() => removeToDo(id)}
            />
        </div>
    )
}

export default ToDoItem;