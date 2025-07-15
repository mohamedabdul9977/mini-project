import React, { useState } from "react";

function TaskItem({ task, onUpdateTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  function handleToggleDone() {
    const updatedTask = { ...task, done: !task.done };
    onUpdateTask(updatedTask);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleSaveClick() {
    const updatedTask = { ...task, title: editedTitle };
    onUpdateTask(updatedTask);
    setIsEditing(false);
  }

  return (
    <li>
      <input type="checkbox" checked={task.done} onChange={handleToggleDone} />
      
      {isEditing ? (
        <>
          <input 
            type="text" 
            value={editedTitle} 
            onChange={(e) => setEditedTitle(e.target.value)} 
          />
          <button onClick={handleSaveClick}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.done ? "line-through" : "none" }}>
            {task.title}
          </span>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </li>
  );
}

export default TaskItem;
