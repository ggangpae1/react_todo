
import ToDoTemplate from "./components/ToDoTemplate";

import ToDoInsert from "./components/ToDoInsert";
import ToDoList from "./components/ToDoList";

//useRef는 화면을 갱신하지 않는 변수를 만들거나 컴포넌트를 가리키기 위해서 사용
//useCallback은 함수를 다시 생성하지 않기 위해서 사용
import { useState, useRef, useCallback } from "react";
function App() {
  const [todos, setToDos] = useState([
    {
        id:1,
        text: "Python",
        checked: true
    },
    {
        id:2,
        text: "Django",
        checked: false
    },
])

//삽입할 때 id를 설정하기 위한 변수
const nextId = useRef(3);

//삽입을 처리하는 함수
const onInsert = useCallback(
  text => {
    const todo = {
      id:nextId.current,
      text,
      checked:false
    }
    setToDos([todo, ...todos]);
    nextId.current += 1;
  }, [todos]
)

//삭제를 위한 함수
const onRemove = useCallback((id) => {
  //매개변수로 받은 id가 아닌 데이터만 골라서 다시 삽입
  setToDos(todos.filter(todo => todo.id !== id));
}, [todos])

//수정을 위한 함수
const onToggle = useCallback((id) => {
  //id가 동일한 데이터를 찾으면 checked를 반전시키고 그렇지 않으면 기존의 값을 추가
  setToDos(todos.map(todo => todo.id === id ? {...todo, checked:!todo.checked} : todo));
}, [todos])

  return (
    <ToDoTemplate>
      <ToDoInsert onInsert={onInsert}/>
      <ToDoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </ToDoTemplate>
  );
}

export default App;
