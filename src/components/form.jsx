import React, { useState } from "react";
import Task from "./listtask";

function Form() {
  const [task, settask] = useState("");
  const [items, setitems] = useState([]);

  function handleChange(e) {
    const newVal = e.target.value;
    settask(newVal);
  }
  function addTask() {
    setitems((prevItems) => [...prevItems, task]);
  }
  return (
    <div>
      <div className="form">
        <input
          type="text"
          onChange={handleChange}
          name="item"
          value={task}
          placeholder="Add New Task..."
          spellCheck="false"
          required
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {items.map((item) => (
          <Task value={item} />
        ))}
      </ul>
    </div>
  );
}

export default Form;
