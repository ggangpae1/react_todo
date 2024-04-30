import React from 'react';
import { MdAdd } from 'react-icons/md';
import './ToDoInsert.scss';

import {useState, useEffect, useCallback} from 'react';

const ToDoInsert = ({onInsert} ) => {
    //입력이 있을 때 입력의 내용을 저장할 state
    const [value, setValue] = useState('');

    //입력의 변경이 생길 때 호출되는 함수
    const onChange = useCallback(e => {
        setValue(e.target.value);
    })

    //버튼 눌렀을 때 호출되는 함수
    const onSubmit =  e => {
        onInsert(value);
        setValue("");
        e.preventDefault(); 
        //submit 이나 button 그리고 a 태그에서 기존에 존재하는 기본 이벤트 핸들러를 제거 
    };

  return (
    <div>
    <form className="ToDoInsert" onSubmit = {onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
    </div>
  );
};

export default ToDoInsert;

