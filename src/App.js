import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  //router rendering :
  // *강의시점의 버전보다 높아져서 강의랑 코드가 다르다.
  // direct url(url에 변수추가) 지원
  return (
    <Router>
      <Routes>
        {/* Routes안에 있으면 하나의 렌더링만 진행한다 */}
        <Route
          basename={process.env.PUBLIC_URL}
          path={`${process.env.PUBLIC_URL}/`}
          element={<Home />}
        />
        <Route path="/" element={<Home />} />
        {/* 변수 사용 시 : 필수, 놓치지않게 주의 */}
        <Route
          path={`${process.env.PUBLIC_URL}/movie/:id`}
          element={<Detail />}
        />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
