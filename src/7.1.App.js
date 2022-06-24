import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    //state를 직접 수정 하지 않는다. 1. 고정값 입력 2. 함수 사용
    //react에서 함수를 전달할때 인자값에 state를 전송

    //배열에 요소 추가  //current or previous 상관없음
    // 반드시 빈 배열에 값을 받아야한다.
    // 배열에 배열 요소들을 추가하려면 ...arrayName
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  return (
    <div>
      <h1>my ToDos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        {/* submit 설정이 없다면 새로고침 된다 */}
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {/*  map() : 
      배열의 모든 요소에 반영되고, 새로운 array에 return 된다
      첫번째 인자 = 배열의 현재 요소
      두번째 인자 = index(number)
      */}
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
