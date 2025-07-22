import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <h2>Todo App with Redux Toolkit</h2>
      <AddTodo />
      <TodoList />
    </>
  );
}

export default App;