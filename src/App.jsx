import React from "react";

function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f5f5f5',
      padding: '20px'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <h1 style={{ color: '#333', marginBottom: '10px' }}>
          🚂 Система бронирования ж/д билетов
        </h1>
        <p style={{ color: '#666', marginBottom: '40px' }}>
          Дипломный проект Frontend-разработчика
        </p>
        
        {/* Форма поиска */}
        <div style={{ 
          maxWidth: '500px', 
          margin: '0 auto 40px auto', 
          padding: '30px', 
          border: '1px solid #ddd', 
          borderRadius: '8px',
          background: 'white'
        }}>
          <h2 style={{ marginBottom: '20px' }}>Поиск билетов</h2>
          
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Откуда</label>
            <input 
              type="text" 
              placeholder="Например: Москва"
              style={{ 
                padding: '10px', 
                width: '100%', 
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '15px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Куда</label>
            <input 
              type="text" 
              placeholder="Например: Санкт-Петербург"
              style={{ 
                padding: '10px', 
                width: '100%', 
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
          
          <div style={{ marginBottom: '20px', textAlign: 'left' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Дата</label>
            <input 
              type="date" 
              style={{ 
                padding: '10px', 
                width: '100%', 
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
          </div>
          
          <button style={{ 
            padding: '12px 24px', 
            background: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px',
            width: '100%',
            fontSize: '16px',
            cursor: 'pointer'
          }}>
            🔍 Найти билеты
          </button>
        </div>
        
        <footer style={{ color: '#666' }}>
          Дипломная работа &copy; 2024
        </footer>
      </div>
    </div>
  );
}

export default App;

