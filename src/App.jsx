

  import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/Diplom-">
      <div style={{ padding: '20px' }}>
        <h1>✅ Аналитическая панель</h1>
        <p>React + React Router работают корректно</p>
        
        <Routes>
          <Route path="/" element={
            <div>
              <h2>Главная страница</h2>
              <a href="/Diplom-/trains/">Перейти к поездам</a>
            </div>
          } />
          <Route path="/trains/" element={
            <div>
              <h2>Выбор поездов</h2>
              <a href="/Diplom-/">Вернуться на главную</a>
            </div>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

