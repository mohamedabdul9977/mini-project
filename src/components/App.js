import React, {useState, useEffect} from "react";
import '../App.css';
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/tasks")
        .then((res) => res.json())
        .then(setTasks);
    }, []);

    function addTask(newTask) {
        fetch("http://localhost:3000/tasks", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask),
        })
        .then((res) => res.json())
        .then((data) => setTasks([...tasks, data]));
    }

    function updateTask(updatedTask) {
        fetch(`http://localhost:3000/tasks/${updatedTask.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTask),
        })
        .then((res) => res.json())
        .then((data) =>
            setTasks(tasks.map((task) => (task.id === data.id ? data : task)))
        );
    }

    return (
        <div>
            <h1>Task Tracker</h1>
            <TaskForm onAddTask={addTask} />
            <TaskList tasks={tasks} onUpdateTask={updateTask} />
        </div>
    )

}

export default App;