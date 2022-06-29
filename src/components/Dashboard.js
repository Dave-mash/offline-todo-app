import { useState } from 'react';

import { fetchOfflineToDos, addToDo } from '../functions';
import Header from './Header';
import ToDoList from './ToDoList';

const Dashboard = () => {
    const storedToDos = fetchOfflineToDos();
    const [todos, setToDos] = useState(storedToDos);

    const updateToDoList = updates => {
        addToDo(updates);
        setToDos([
            updates,
            ...todos
        ]);
    };

    return (
        <>
            <Header updateToDoList={updateToDoList} setToDos={setToDos} />
            <ToDoList todos={todos} setToDos={setToDos} />
        </>
    );
}

export default Dashboard;