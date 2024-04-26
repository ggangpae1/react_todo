import React, {useCallback} from 'react';

import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';

import './ToDoListItem.scss';
import cn from 'classnames';

const ToDoListItem = ({todo, onRemove, onToggle}) => {
    const {id, text, checked} = todo;

    //삭제 함수
    const onDelete = useCallback((e)=>{
        //대화상자로 확인
        const result = window.confirm(text + '을 정말로 삭제?');
        if(result){
            onRemove(id)
        }
    }, [onRemove, id, text]);

    return (
      <div className="ToDoListItem">
        <div className={cn('checkbox', {checked})} onClick={(e)=> onToggle(id)}>
            {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={onDelete}>
          <MdRemoveCircleOutline />
        </div>
      </div>
    );
  };
  export default ToDoListItem;
  
  