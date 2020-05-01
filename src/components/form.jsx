import React, { useState } from "react";
import Task from "./listtask";

function Form() {
  const [task, settask] = useState("");
  const [items, setitems] = useState(['Test','Debug']);

  function handleChange(e) {
    const newVal = e.target.value;
    settask(newVal);
  }
  function addTask() {
    setitems((prevItems) => [...prevItems, task]);
    settask("");
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
        <button onClick={addTask}>+</button>
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
