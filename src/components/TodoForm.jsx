import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todos/actions';


const TodoForm = () => {

    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const handleOnAdd = text => {
        if (text) {
          dispatch(addTodo({
              text,
              id: Math.random(),
              isCompleted: false,
            }
          )
        )
      }
    }

    return (
        <div>
          <form onSubmit={e => {
              e.preventDefault();
              handleOnAdd(text)
              setText('')
          }}>
              <input type="text" value={text} onChange={e => setText(e.target.value)} />
              <button>Add</button>
          </form> 
        </div>
    )
}

export default TodoForm;