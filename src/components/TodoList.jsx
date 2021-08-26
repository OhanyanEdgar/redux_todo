import TodoItem from "./TodoItem"


const TodoList = ({todos, onDelTodo, onCheckedTodo}) => {
    return (
        <div className="todo_list">
            {
                todos.map(todo => {
                    return (<div key={todo.id}>
                        <TodoItem onCheckedTodo={onCheckedTodo} onDelTodo={onDelTodo} todo={todo} />
                    </div>)
                })
            }
        </div>
    )
}

export default TodoList;