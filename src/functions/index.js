/**
 * This file contains utility functions for manipulating session storage
 */

const store = localStorage.getItem('todos');
const todos = !store ? [] : JSON.parse(store);

// fetch single todo
const fetchOneTodo = (id) => {
    const todo = todos.filter(_todo => _todo.id === id);

    return todo;
}

// fetch available todos
export const fetchOfflineToDos = () => todos;

// add todo
export const addToDo = (payload) => {
    const store = localStorage.getItem('todos');
    const todos = !store ? [] : JSON.parse(store);
    
    todos.push(payload);
    const updatedToDos = JSON.stringify(todos);
    localStorage.setItem('todos', updatedToDos);
}

// update todo
export const updateToDo = (id, update) => {
    const completedToDo = fetchOneTodo(id);

    todos.forEach(todo => {
        if (todo.id === id) completedToDo.completed = update
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}

// remove todo
export const removeToDo = (id) => {
    const updatedToDo = todos.filter(todo => todo.id !== id);
    const serializedToDos = JSON.stringify(updatedToDo);

    localStorage.setItem('todos', serializedToDos);
}

// clear all todos 
export const clearAllToDos = () => {
    localStorage.setItem('todos', JSON.stringify([]));
}