import React from "react";

function Task(props) {
  const [isCompleted, setisCompleted] = React.useState(false);

  function handleClick() {
    setisCompleted((previous) => (previous ? false : true));
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isCompleted ? "line-through" : null }}
    >
      {props.value}
    </li>
  );
}
export default Task;
