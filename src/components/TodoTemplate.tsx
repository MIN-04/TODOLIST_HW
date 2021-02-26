import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoTemplate.scss";
import TodoInsertModal from "./TodoInsertModal"; //모달

const TodoTemplate = ({ onInsert, children }: any) => {
  // ** Modal Part 시작 **
  //useState를 사용하여 open 상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // ** Modal Part 끝 **

  return (
    <div className="TodoTemplate">
      <div>
        <label className="app-title">
          TODO LIST
          <button className="button" onClick={openModal}>
            <MdAdd />
          </button>
        </label>
        <React.Fragment>
          <TodoInsertModal
            onInsert={onInsert}
            open={modalOpen}
            close={closeModal}
            header="TODO LIST 추가"
          >
            {/* 리액트 모달 팝업창 */}
          </TodoInsertModal>
        </React.Fragment>
      </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
