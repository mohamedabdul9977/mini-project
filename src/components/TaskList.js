import React from "react";
import TaskItem from "./TaskItem";

function TaskList({tasks, onUpdateTask}) {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onUpdateTask={onUpdateTask} />
            ))}
        </ul>
    )
}

export default TaskList;