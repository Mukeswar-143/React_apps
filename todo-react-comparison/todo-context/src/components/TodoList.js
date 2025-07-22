import React from 'react';
import { useTodos } from '../context/TodoContext';

function TodoList() {
  const { todos, deleteTodo } = useTodos();

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.title}
          <button onClick={() => deleteTodo(todo.id)}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;