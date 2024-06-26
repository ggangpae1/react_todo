import React from 'react';
import ToDoListItem from './ToDoListItem';
import './ToDoList.scss';


const ToDoList = ({todos, onRemove, onToggle}) => {


  return (
    <div className="ToDoList">
        {todos.map(todo => (<ToDoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />))}
    </div>
  );
};

export default ToDoList;

