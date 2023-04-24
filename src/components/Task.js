import React from "react";
// import { TASKS } from "../data";
// import { CATEGORIES } from "../data";

function Task({task}) {
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
