import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainForm from "./components/Forms/MainForm";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/Diplom-">
      <div style={{ minHeight: '100vh', background: '#f5f5f5' }}>
        {/* Шапка */}
        <header style={{ 
          background: 'white', 
          padding: '20px', 
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ margin: 0, color: '#333' }}>🚂 Система бронирования ж/д билетов</h1>
            <p style={{ margin: '5px 0 0 0', color: '#666' }}>
              Дипломный проект Frontend-разработчика
            </p>
          </div>
        </header>

        {/* Основной контент */}
        <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trains/" element={<TrainsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Подвал */}
        <footer style={{ 
          background: '#333', 
          color: 'white', 
          padding: '20px', 
          marginTop: '40px',
          textAlign: 'center'
        }}>
          <p>Дипломная работа &copy; 2024</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

// Простые компоненты страниц
function HomePage() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2>Найдите подходящий поезд</h2>
        <p>Поиск и бронирование железнодорожных билетов</p>
      </div>
      
      <MainForm className="main-form" />
      
      <div style={{ marginTop: '40px', textAlign: 'center' }}>
        <Link to="/trains/" style={{
          padding: '10px 20px',
          background: '#28a745',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}>
          Посмотреть все поезда →
        </Link>
      </div>
    </div>
  );
}

function TrainsPage() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Доступные поезда</h2>
        <Link to="/" style={{ textDecoration: 'none', color: '#007bff' }}>
          ← Назад к поиску
        </Link>
      </div>
      
      <div style={{ 
        padding: '40px', 
        background: 'white', 
        borderRadius: '8px',
        textAlign: 'center',
        border: '2px dashed #ddd'
      }}>
        <h3 style={{ color: '#666' }}>Список поездов</h3>
        <p>Здесь будет отображаться список найденных поездов</p>
        <div style={{ marginTop: '20px' }}>
          <div style={{ 
            padding: '15px', 
            border: '1px solid #eee', 
            margin: '10px 0',
            borderRadius: '4px'
          }}>
            <strong>Москва → Санкт-Петербург</strong>
            <br />
            <span>Дата: 20.12.2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2 style={{ color: '#dc354function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h2 style={{ color: '#dc3545' }}>❌ Страница не найдена</h2>
      <p>Запрашиваемая страница не существует</p>
      <Link to="/" style={{
        padding: '10px 20px',
        background: '#007bff',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '4px',
        display: 'inline-block',
        marginTop: '20px'
      }}>
        Вернуться на главную
      </Link>
    </div>
  );
}

export default App;
