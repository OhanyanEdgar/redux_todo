import TodoItem from "./TodoItem"

import { useSelector } from 'react-redux';



const TodoList = () => {

    const todos = useSelector(state => state.todoApp.todos)
    
    return (
        <div className="todo_list">
            {
                todos.map(todo => {
                    return (<div key={todo.id}>
                        <TodoItem todo={todo} />
                    </div>)
                })
            }
        </div>
    )
}

export default TodoList;