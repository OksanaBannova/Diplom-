

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
      <BrowserRouter basename="/Diplom-">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="trains/" element={<SelectionTrain />} />
          <Route path="seats/:id" element={<SelectionWagons />} />
          <Route path="passengers/:id/" element={<PassengersInfo />} />
          <Route path="personal_information/:id/" element={<PersonalData />} />
          <Route path="screening/:id/" element={<Screening />} />
          <Route path="order-result/:id/" element={<OrderResult/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
  );
}

export default App;

