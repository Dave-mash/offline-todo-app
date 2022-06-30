/**
 * This file contains utility functions for manipulating session storage
 */

const store = localStorage.getItem('todos');

// fetch single todo
const fetchOneTodo = (id) => {
    const todos = !store ? [] : JSON.parse(store);
    const todo = todos.filter(_todo => _todo.id === id);

    return todo[0];
}

// fetch available todos
export const fetchOfflineToDos = () => {
    const store = localStorage.getItem('todos');
    const todos = !store ? [] : JSON.parse(store);
    
    return !todos ? [] : todos;
};

// add todo
export const addToDo = (payload) => {
    const store = localStorage.getItem('todos');
    const todos = !store ? [] : JSON.parse(store);
    
    todos.unshift(payload);
    const updatedToDos = JSON.stringify(todos);
    
    localStorage.setItem('todos', JSON.stringify(updatedToDos));
    
    return sortToDoList(todos);
}

// update todo
export const updateToDo = (id, update) => {
    const store = localStorage.getItem('todos');
    const todos = !store ? [] : JSON.parse(store);

    todos.forEach(todo => {
        if (todo.id === id) todo.completed = update
    });

    console.log('here we are')

    localStorage.setItem('todos', JSON.stringify(todos));

    return todos
}

// remove todo
export const removeToDo = (id) => {
    const todos = !store ? [] : JSON.parse(store);
    const updatedToDo = todos.filter(todo => todo.id !== id);
    const serializedToDos = JSON.stringify(updatedToDo);

    localStorage.setItem('todos', serializedToDos);
}

// clear all todos 
export const clearAllToDos = () => localStorage.removeItem('todos')

// sort todo list
export const sortToDoList = (todoList) => {
    const completedToDos = [];
    const pendingToDos = [];

    for(let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];

        if (!todo.completed) {
            completedToDos.unshift(todo);
        } else {
            pendingToDos.unshift(todo);
        }
    }

    const sortedToDos = !!todoList?.length && completedToDos.concat(pendingToDos);
    const serializedToDos = !sortedToDos ? JSON.stringify([]) : JSON.stringify(sortedToDos);

    localStorage.setItem('todos', serializedToDos);

    return sortedToDos;
}