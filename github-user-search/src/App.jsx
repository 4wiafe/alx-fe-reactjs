import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <header>
          <h1>GitHub User Search</h1>
        </header>

        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
