import { useState, useEffect } from "react";
//Cleanup function : 컴포넌트가 소멸될때 행동 지정, 자주 사용하지는 않음
//return () => {} 로 사용한다

function Hello() {
  useEffect(() => {
    console.log("created"); //컴포넌트가 생성될때
    return () => {
      console.log("destroyed"); //컴포넌트가 소멸될때
    };
  }, []); // []: 최초 1회 실행

  return <h1>Hello</h1>;
}

function App() {
  const [show, setShow] = useState(false);
  const onClick = () => setShow((prev) => !prev);

  return (
    <div>
      {show ? <Hello /> : null}
      {/* show가 true 일때 생성(create), false일때 소멸(destroy)된다 */}
      <button onClick={onClick}>{show ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
