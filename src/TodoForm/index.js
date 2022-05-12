import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue.length >= 1) {
      addTodo(newTodoValue); //Envio los caracteres escritos
      setOpenModal(false);
    } else {
     alert("No puedes añadir una tarea vacia");
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe una nueva tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Crea tus nuevas tareas"
      />
      <div className="TodoForm-buttonContainer">
        <button
          className="TodoForm-button TodoForm-button-cancel "
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>

        <button className="TodoForm-button TodoForm-button-add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
