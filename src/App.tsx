import { BrowserRouter, Routes, Route } from "react-router-dom";

import Send from "./components/send/Send";
import Haha from "./components/haha/Haha";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/generate" element= {<Send />} ></Route>
        <Route path="/haha" element={<Haha />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
