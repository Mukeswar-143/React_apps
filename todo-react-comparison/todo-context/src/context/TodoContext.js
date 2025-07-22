import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const useTodos = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos([...todos, { id: Date.now(), title }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};