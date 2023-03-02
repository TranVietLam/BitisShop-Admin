import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/index";
import DefaultLayout from './Container/DefaultLayout/index';
import Register from './pages/register/index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/*" element={<DefaultLayout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
