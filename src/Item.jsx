import React, { useState } from "react";

const Item = ({
  text,
  completed,
  id,
  handleCompleted,
  deleteTodo,
  editTodo,
}) => {
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(text);

  return (
    <div className="item">
      <div onClick={() => handleCompleted(id)} className="circle">
        {completed ? <span>&#10003;</span> : ""}
      </div>
      <div
        className={completed ? "strike" : ""}
        onDoubleClick={() => {
          if (!completed) {
            setEdit(true);
          }
        }}
      >
        {edit ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={() => {
              setEdit(false);
              editTodo(id, editText);
            }}
          />
        ) : (
          text
        )}
      </div>
      <div onClick={() => deleteTodo(id)} className="close">
        X
      </div>
    </div>
  );
};

export default Item;
