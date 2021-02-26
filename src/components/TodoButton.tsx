import React from "react";
import "./TodoButton.scss";

const TodoButton = ({ onUpdate, compleFunc, onRemove }: any) => {
  return (
    <div className="TodoButton">
      <button onClick={() => compleFunc()}>완료</button>
      <button onClick={() => onUpdate()}>수정</button>
      <button onClick={() => onRemove()}>삭제</button>
    </div>
  );
};

export default TodoButton;
