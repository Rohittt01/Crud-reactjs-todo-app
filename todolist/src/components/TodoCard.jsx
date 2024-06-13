import React, { Children } from 'react'

export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo} = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer"></div>
      <button className="icon-button" onClick={() =>
        handleEditTodo(index)
      }>
        <i className="fa-solid fa-pen-to-square"></i>
      </button>
      <button className="icon-button" onClick={() => handleDeleteTodo(index)}>
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </li>
  );
}