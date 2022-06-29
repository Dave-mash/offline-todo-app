import { useEffect, useState } from "react";

import ToDoItem from "./ToDoItem";
import '../styles/components/todo-list.css';

const ToDoList = ({ todos }) => {
    return (
        <>
            <div className="todo-list">
                <div className="todo-list__content">
                    {
                        !!todos?.length ? todos.map((todo, idx) => (
                            <ToDoItem key={idx} todo={todo} />
                        )) : <p>Nothing here yet! Add a ToDo?</p>
                    }
                </div>
            </div>
        </>
    )
}

export default ToDoList;