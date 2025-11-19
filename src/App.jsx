/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Убрал target="_blank" для внутренней ссылки */}
        <a href="/Diplom-/">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */

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

