import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "./components/Tasks/Tasks";
import Employees from "./components/Employees/Employees";
import New from "./components/New/New";
function App() {
  return (
    <main className="main">
      <BrowserRouter>
        <Routes>
          <Route element={<Navbar />}>
            <Route path="/" element={<Tasks />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/new" element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
