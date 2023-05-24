// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/loginform";
import HomePage from "./components/homepage";

function App() {
  return (
    <>
      {/* <LoginForm /> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route exact path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
