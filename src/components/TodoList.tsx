import React, { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";
import TodoButton from "./TodoButton";

const TodoList = ({ onUpdate, compleFunc, todos, onRemove, onToggle }: any) => {
  // ** checkBox 클릭 시 TodoButton 보이기 Start **
  const [checked, setChecked] = useState<boolean>(false);
  useEffect(() => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].checked === true) {
        setChecked(true);
        return;
      }
      setChecked(false);
    }
  }, [todos]);
  // ** checkBox 클릭 시 TodoButton 보이기 End **
  return (
    <div>
      <div className="TodoList">
        {todos.length !== 0 &&
          todos.map((todo: any) => (
            <TodoListItem
              todo={todo}
              key={todo.id}
              onToggle={onToggle}
              compleFunc={compleFunc}
            />
          ))}
        {todos.length === 0 && (
          <div className="NoList">해야 할 일이 없습니다.</div>
        )}
      </div>
      {/* CheckBox 체크시 TodoButton 컴포넌트 불러오기 */}
      {checked ? (
        <TodoButton
          onUpdate={onUpdate}
          compleFunc={compleFunc}
          onRemove={onRemove}
        />
      ) : null}
    </div>
  );
};

export default TodoList;
