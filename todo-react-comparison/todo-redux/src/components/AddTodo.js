import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

function AddTodo() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleAdd}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button>Add</button>
    </form>
  );
}

export default AddTodo;