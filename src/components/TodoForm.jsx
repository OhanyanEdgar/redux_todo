import { useState } from "react";


const TodoForm = ({onAdd}) => {

    const [text, setText] = useState('')

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                onAdd(text)
                setText('')
            }}>
                <input type="text" value={text} onChange={e => setText(e.target.value)} />
                <button>Add</button>
            </form> 
        </div>
    )
}

export default TodoForm;