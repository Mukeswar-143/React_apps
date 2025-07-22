import React from 'react';
import { TodoProvider } from './context/TodoContext';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <TodoProvider>
      <h2>Todo App with Context API</h2>
      <AddTodo />
      <TodoList />
    </TodoProvider>
  );
}

export default App;