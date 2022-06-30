import ToDoItem from "./ToDoItem";
import { sortToDoList } from '../functions';
import '../styles/components/todo-list.css';

const ToDoList = ({ todos, updateToDoStatus }) => {
    const todoList = sortToDoList(todos);

    return (
        <>
            <div className="todo-list">
                <div className="todo-list__content">
                    {
                        !!todoList?.length ? todoList.map((todo) => (
                            <ToDoItem
                                key={todo.id}
                                todo={todo}
                                todos={todos}
                                updateToDoStatus={updateToDoStatus}
                            />
                        )) : <p>Nothing here yet! Add a ToDo?</p>
                    }
                </div>
            </div>
        </>
    )
}

export default ToDoList;