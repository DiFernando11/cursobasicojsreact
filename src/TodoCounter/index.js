import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

/**
 * It returns a `h2` element with the class `TodoCounter` and the text `Has completado 2 de 3 TODOs`.
 * @returns A React element.
 */
function TodoCounter() {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);
  return (
    <div className="containerTodoCounter">
      {" "}
      <h2 className="TodoCounter">
        Has completado {completedTodos} de {totalTodos} Tareas
      </h2>
    </div>
  );
}

export { TodoCounter };
