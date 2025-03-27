import { createSlice } from "@reduxjs/toolkit";

// estado inicial -> lista vacía de tareas
const initialState = {
  todos: [] 
};

// reducer que actualiza el estado en función de las acciones recibidas.
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload); //action.playload es el dato enviado al ejecutar la acción,
                                        // en este caso, es la nueva tarea que se agrega a la lista.
                                        // esta info es la que va a la función que maneja el botón en App.jsx
    },
    delTodo: (state, action) => {
      state.todos = state.todos.filter((todo, index) => index !== action.payload);
      // action.playload en este caso es el índice de la tarea a eliminar
      // con .filter() se crea un nuevo array con todas las tareas menos la eliminada.
      // esta info es la que va a la función que maneja el botón en App.jsx
    }
  }
});

export const { addTodo, delTodo } = todosSlice.actions;
export default todosSlice.reducer;