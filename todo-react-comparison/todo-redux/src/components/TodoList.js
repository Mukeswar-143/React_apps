import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/todoSlice';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.title}
          <button onClick={() => dispatch(deleteTodo(todo.id))}>❌</button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;