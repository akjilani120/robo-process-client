
import { Routes, Route, Link } from "react-router-dom";
import Dilwale from "./Page/Dilwale";
import Home from "./Page/Home";
import Idiots from "./Page/Idiots";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route index element={<Dilwale></Dilwale>}></Route>
          <Route path="idiots" element={<Idiots></Idiots>}></Route>
        </Route>
      </Routes>
        </div>
        );
}

        export default App;
