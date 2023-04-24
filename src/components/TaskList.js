import React from "react";
import { TASKS } from "../data";
import Task from "./Task";


function TaskList() {
  return (
    <div className="tasks">
     {TASKS.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
