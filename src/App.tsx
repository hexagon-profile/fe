import React, { ReactElement } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/login/LoginPage";
import BoardPage from "./pages/board/BoardPage";
import BoardContainer from "./pages/board/BoardContainer";
import RegisterPointPage from "./pages/register-point/RegisterPointPage";

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/board" element={<BoardPage />}></Route>
        <Route path="/boards/:id" element={<BoardContainer />} />
        <Route path="/register-point" element={<RegisterPointPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
