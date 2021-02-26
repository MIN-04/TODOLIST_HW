import React from "react";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import cn from "classnames";
import "./TodoListItem.scss";

const TodoListItem = ({ todo, onToggle }: any) => {
  const { id, text, checked, complete } = todo;

  return (
    <div className="TodoListItem">
      <div
        className={cn("checkbox", { checked })}
        onClick={() => {
          onToggle(id);
        }}
      >
        {/* checked의 값에 따라 icon 변경 */}
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

        {/* complete의 값에 따라 중간 줄 css 적용 */}
        {complete ? (
          // *** props로 바꾸기 (리액트 책 참고)
          <div className="textComp">{text}</div>
        ) : (
          <div className="text">{text}</div>
        )}
      </div>
    </div>
  );
};

export default TodoListItem;
