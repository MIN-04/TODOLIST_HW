import React, { useState, useCallback, useRef } from "react";
import "./TodoInsertModal.scss";

const TodoInsertModal = (props: any) => {
  //열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, onInsert } = props;

  const [input, setInput] = useState<string>("");

  const onChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  }, []);

  return (
    //모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <div className="TodoOnChange">
              <textarea onChange={onChange} placeholder="할 일을 입력하세요" />
              <button
                onClick={() => {
                  if (input !== "") {
                    onInsert(input);
                    close();
                    setInput("");
                  } else {
                    alert("할 일을 입력하세요.");
                  }
                }}
              >
                save
              </button>
            </div>
          </main>
          <footer>
            <button className="close" onClick={() => close()}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default TodoInsertModal;
