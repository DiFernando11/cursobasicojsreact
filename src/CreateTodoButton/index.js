import React from "react";
import "./CreatTodoButton.css";

function CreateTodoButton(props) {
  const onClickButtonOpen = () => {
    props.setOpenModal(prevState => !prevState);
  };

  return (
    <>
      <button
        className="CreateTodoButton"
        onClick={onClickButtonOpen}
      >
        +
      </button>
      <button className="CreateTodoButton" onClick={onClickButtonOpen}>
        +
      </button>
    </>
  );
}

export { CreateTodoButton };
