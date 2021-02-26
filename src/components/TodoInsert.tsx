import React, { useCallback, useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

type TodoInsertProps = {
  onInsert: (text: string) => void;
};

const TodoInsert = ({ onInsert }: TodoInsertProps) => {
  //컴포넌트에서 인풋에 입력하는 값을 관리할 수 있도록 useState를 사용하여 value라는 상태 정의
  const [value, setValue] = useState("");

  //인풋에 넣어 줄 onChange 함수
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue(""); //value값 초기화

      //submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      //이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
