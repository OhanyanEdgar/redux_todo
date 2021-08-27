

import { useDispatch, useSelector } from 'react-redux';
import { delCompletedTodos } from '../store/todos/actions';



const TodoFooter = () => {
    
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todoApp.todos);
    const completedTodos = todos.filter(todo => todo.isCompleted === true).length;

    const handleOnDelCompleted = () => {
        dispatch(delCompletedTodos());
      } 

    return(
        <div>
            <span>{`${completedTodos}/${todos.length}`}</span>
            <button onClick={handleOnDelCompleted}>Del Completed</button>
        </div>
    )
}

export default TodoFooter;