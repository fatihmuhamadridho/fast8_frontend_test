import "./styles/App.css";
import "antd/dist/antd.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ErrorPage from "./containers/error";
import HomePage from "./containers/homepage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route path="/" element={<HomePage params={"/"} />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;