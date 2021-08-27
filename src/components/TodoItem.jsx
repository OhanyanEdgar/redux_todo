
import { useDispatch } from 'react-redux';

import { delTodo } from '../store/todos/actions';
import { checkTodo } from '../store/todos/actions';



const TodoItem = ({todo}) => {

    const dispatch = useDispatch();

    const handleOnDelTodo = id => {
        dispatch(delTodo(id))
    };

    const handleOnCheckedTodo = newTodo => {
        dispatch(checkTodo(newTodo))
    }

    return (
        <div>
            <input type="checkbox" defaultChecked={false} onChange={e => {
                const newTodo = {
                    ...todo,
                    isCompleted: e.target.checked
                };
                handleOnCheckedTodo(newTodo)
            }}/>
            {todo.text}
            <button onClick={() => {
                handleOnDelTodo(todo.id)
            }}>Del</button>
        </div>
    )
}

export default TodoItem;