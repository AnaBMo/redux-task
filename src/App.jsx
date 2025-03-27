import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, delTodo } from './redux/todosSlice'
import './App.css';

function App() {
  const todos = useSelector(state => state.todos.todos); // Obtenemos la lista de tareas desde Redux
  const dispatch = useDispatch();
  const [task, setTask] = useState('');

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      dispatch(addTodo(task)); 
      setTask('');
    }
  };

  const handleRemoveTodo = (index) => {
    dispatch(delTodo(index)); 
  };


  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Agregar tarea"
      />
      <button onClick={handleAddTodo}>Agregar</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} 
            <button onClick={() => handleRemoveTodo(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );

};

export default App;