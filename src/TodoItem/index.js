import React from "react";
import "./TodoItem.css";

function TodoItem(props) {

  return (
    <li className="TodoItem">
      <span
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      >
        <i class="bi bi-check-lg"></i>
      </span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <span className="Icon Icon-delete" onClick={props.onDelete}>
      <i class="bi bi-clipboard-x-fill"></i>
      </span>
    </li>
  );
}

// function TodoItem(props) {
//   const onComplete = () => {
//     alert("Ya completaste el todo " + props.text);
//   };
//   const onDelete = () => {
//     alert("Borraste el todo " + props.text);
//   };
//   return (
//     <div className="containerTodoItem">
//       <li className="TodoItem">
//         <span
//           className={`Icon Icon-check ${
//             props.completed && "Icon-check--active"
//           }`}
//           onClick={onComplete}
//         >
//           √
//         </span>
//         <p
//           className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}
//         >
//           {props.text}
//         </p>
//         <span className="Icon Icon-delete"
//         onClick={onDelete}
//         >X</span>
//       </li>
//     </div>
//   );
// }

export { TodoItem };
