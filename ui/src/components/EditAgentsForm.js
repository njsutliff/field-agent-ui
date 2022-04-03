import React, { useState } from "react";

export const EditAgentsForm = (props) => {
  const [todo, setTodo] = useState(props.currentTodo);

  const handleInputChange = event => {
      const { name, value } = event.target;
      setTodo({...todo, [name]: value});
  }

  const handleSubmit = event => {
      event.preventDefault();
      props.updateTodo(todo);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          name="description"
          value={todo.description}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Update todo
      </button>
      <button className="btn btn-danger" onClick={() => props.setEditing(false)}>
        Cancel
      </button>
    </form>
  );
};