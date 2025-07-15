import React, {useState} from "react";

function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (title.trim() === "") {
      alert("Task title cannot be empty!");
      return;
    }
        const newTask = { title, done: false };
        onAddTask(newTask);
        setTitle("");
    }


    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="New Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            ></input>
            <button type="submit">Add</button>
        </form>
    );
}


export default TaskForm;