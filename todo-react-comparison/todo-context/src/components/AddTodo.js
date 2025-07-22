import React, { useState } from 'react';
import { useTodos } from '../context/TodoContext';

function AddTodo() {
  const { addTodo } = useTodos();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button>Add</button>
    </form>
  );
}

export default AddTodo;