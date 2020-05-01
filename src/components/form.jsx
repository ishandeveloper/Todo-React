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
    settask("");
  }
  function deleteTask(id) {
    setitems((prevItems) => prevItems.filter((item, index) => index !== id));
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
          <Task
            key={items.indexOf(item)}
            id={items.indexOf(item)}
            value={item}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default Form;
