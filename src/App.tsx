import React, { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoList from "./components/TodoList";
import TodoButton from "./components/TodoButton";

function App() {
  // ** 화면에 보여줄 List Part 시작 **

  //todos 타입 지정
  type todosType = {
    id: number;
    text: string;
    checked: boolean;
    complete: boolean;
  };

  const [todos, setTodos] = useState<todosType[]>([
    // {
    //   id: 1,
    //   text: "리액트의 기초 알아보기",
    //   checked: true,
    // },
    // {
    //   id: 2,
    //   text: "컴포넌트 스타일링해 보기",
    //   checked: true,
    // },
    // {
    //   id: 3,
    //   text: "일정 관리 앱 만들어 보기",
    //   checked: false,
    // },
  ]);

  //고윳값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(0);

  //할 일을 Insert 해주는 함수
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
        complete: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1; //nextId 1씩 더하기
    },
    [todos]
  );

  //할 일을 Remove 해주는 함수
  // const onRemove = useCallback(
  //   (id) => {
  //     setTodos(todos.filter((todo) => todo.id !== id));
  //   },
  //   [todos]
  // );
  const onRemove = useCallback(() => {
    const nextTodos = [];

    for (let i = 0; i < todos.length; i++) {
      //checked가 true일때 새 배열 nextTodos에 todos[i]값 추가 X
      todos[i].checked === false ? nextTodos.push(todos[i]) : nextTodos.push();
    }
    setTodos(nextTodos);
  }, [todos]);

  //완료 button 함수
  const compleFunc = useCallback(() => {
    const nextTodos = [];

    for (let i = 0; i < todos.length; i++) {
      todos[i].checked === false
        ? nextTodos.push(todos[i])
        : nextTodos.push({
            ...todos[i],
            complete: true,
          });
    }
    setTodos(nextTodos);
  }, [todos]);

  //수정 button 함수
  const onUpdate = useCallback(() => {
    let cnt = 0;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].checked === true) cnt++;
    }
    if (cnt > 1) alert("하나의 항목만 수정할 수 있습니다.");
  }, [todos]);

  //checkbox
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  // ** 화면에 보여줄 List Part 끝 **

  return (
    <TodoTemplate onInsert={onInsert}>
      {/* <TodoInsert onInsert={onInsert} /> */}
      <TodoList
        setTodos={setTodos}
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        compleFunc={compleFunc}
        onUpdate={onUpdate}
      />
    </TodoTemplate>
  );
}

export default App;
