import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return; // Avoid adding empty todos
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;