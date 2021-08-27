import './App.css';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoFooter from "./components/TodoFooter";
import { useDispatch, useSelector } from 'react-redux';

function App() {

  return (
    <div className="App">
      Hello Armenia
      <TodoForm/>
      <TodoList/>
      <TodoFooter/>
    </div>
  );
}

export default App;
