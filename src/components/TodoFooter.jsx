

const TodoFooter = ({todos, onDelCompleted}) => {

    console.log(todos);

    const completedTodos = todos.filter(todo => todo.isCompleted === true).length
    return(
        <div>
            <span>{`${completedTodos}/${todos.length}`}</span>
            <button onClick={onDelCompleted}>Del Completed</button>
        </div>
    )
}

export default TodoFooter;