import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Search from "./components/Search";

function App() {
  return (
    <>
      <Router>
        <header>
          <h1>GitHub User Search</h1>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      <Search />
    </>
  )
}

export default App
