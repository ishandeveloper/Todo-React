import React from "react";

function Task(props) {
  return <li onClick={() => props.onDelete(props.id)}>{props.value}</li>;
}
export default Task;
