import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";

// agregamos aquí el reducer que hemos creado en todosSlice.jsx
export const store = configureStore(
  {
    reducer: {
      todos: todosReducer
    }
  }
);