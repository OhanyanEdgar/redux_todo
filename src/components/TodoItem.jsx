

const TodoItem = ({todo, onDelTodo, onCheckedTodo}) => {
    return (
        <div>
            <input type="checkbox" defaultChecked={false} onChange={e => {
                console.log(e.target.checked)
                const newTodo = {
                    ...todo,
                    isCompleted: e.target.checked
                };
                onCheckedTodo(newTodo)
            }}/>
            {todo.text}
            <button onClick={() => {
                onDelTodo(todo.id)
            }}>Del</button>
        </div>
    )
}

export default TodoItem;