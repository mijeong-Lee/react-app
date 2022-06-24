import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  //state가 변경될때 컴포넌트는 전부 재실행 된다.
  // 특정 부분은 재실행 되지 않고 최초 1번만 실행되길 원할때 useEffect()를 사용한다.
  //useEffect(한번만 실행될 내용, ???)
  //useEffect의 두번째 인자가 빈 배열 일때는 state가 변경되더라도 단 한번만 실행된다.
  useEffect(() => {
    console.log("i run only once");
  }, []); // 단 한번만 실행

  //state가 여러개일때 특정한 state가 변할때만 실행되려면 useEffect의 두번째 인자에 특정state를 입력한다.
  useEffect(() => {
    //키워드가 작동해도 조건문을 통해 제어 가능
    //if (keyword !== "" && keyword.length > 5)
    console.log("i run when 'keyword' changes");
  }, [keyword]); //keyword가 변경될때만 실행

  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]); //counter가 변경될때만 실행

  /*useEffect(() => {
    console.log("i run when 'keyword & counter' changes");
  }, [keyword, counter]); //두개 이상도 가능하다 */

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search"
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click!</button>
    </div>
  );
}

export default App;
