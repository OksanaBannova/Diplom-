import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainForm = ({ className }) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: ""
  });
  
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const clickReverse = () => {
    setFormData(prev => ({
      ...prev,
      from: prev.to,
      to: prev.from
    }));
  };

  const clickHandler = () => {
    if (formData.from && formData.to && formData.date) {
      const searchParams = new URLSearchParams({
        from: formData.from,
        to: formData.to,
        date: formData.date
      });
      navigate(`/trains/?${searchParams.toString()}`);
    } else {
      alert("Пожалуйста, заполните все поля формы");
    }
  };

  const isFormValid = formData.from && formData.to && formData.date;

  return (
    <div className={className} style={{ 
      maxWidth: '600px', 
      margin: '0 auto',
      padding: '30px', 
      border: '1px solid #ddd', 
      borderRadius: '12px',
      background: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        marginBottom: '25px', 
        color: '#333',
        textAlign: 'center'
      }}>🔍 Поиск ж/д билетов</h2>
      
      {/* Направление */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          fontWeight: 'bold',
          color: '#555'
        }}>
          Направление
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input
              type="text"
              placeholder="Откуда"
              value={formData.from}
              onChange={(e) => handleChange('from', e.target.value)}
              style={{ 
                padding: '12px 40px 12px 12px', 
                border: '1px solid #ccc', 
                borderRadius: '6px',
                width: '100%',
                fontSize: '16px'
              }}
            />
            <span style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#666',
              fontSize: '18px'
            }}>📍</span>
          </div>
          
          <button
            type="button"
            onClick={clickReverse}
            style={{
              background: '#f8f9fa',
              border: '1px solid #ddd',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '10px 14px',
              color: '#666',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#e9ecef';
              e.target.style.transform = 'rotate(180deg)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#f8f9fa';
              e.target.style.transform = 'rotate(0deg)';
            }}
            title="Поменять местами"
          >
            ⇄
          </button>
          
        import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainForm = ({ className }) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: ""
  });
  
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const clickReverse = () => {
    setFormData(prev => ({
      ...prev,
      from: prev.to,
      to: prev.from
    }));
  };

  const clickHandler = () => {
    if (formData.from && formData.to && formData.date) {
      const searchParams = new URLSearchParams({
        from: formData.from,
        to: formData.to,
        date: formData.date
      });
      navigate(`/trains/?${searchParams.toString()}`);
    } else {
      alert("Пожалуйста, заполните все поля формы");
    }
  };

  const isFormValid = formData.from && formData.to && formData.date;

  return (
    <div className={className} style={{ 
      maxWidth: '600px', 
      margin: '0 auto',
      padding: '30px', 
      border: '1px solid #ddd', 
      borderRadius: '12px',
      background: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        marginBottom: '25px', 
        color: '#333',
        textAlign: 'center'
      }}>🔍 Поиск ж/д билетов</h2>
      
      {/* Направление */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          fontWeight: 'bold',
          color: '#555'
        }}>
          Направление
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input
              type="text"
              placeholder="Откуда"
              value={formData.from}
              onChange={(e) => handleChange('from', e.target.value)}
              style={{ 
                padding: '12px 40px 12px 12px', 
                border: '1px solid #ccc', 
                borderRadius: '6px',
                width: '100%',
                fontSize: '16px'
              }}
            />
            <span style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#666',
              fontSize: '18px'
            }}>📍</span>
          </div>
          
          <button
            type="button"
            onClick={clickReverse}
            style={{
              background: '#f8f9fa',
              border: '1px solid #ddd',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '10px 14px',
              color: '#666',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#e9ecef';
              e.target.style.transform = 'rotate(180deg)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#f8f9fa';
              e.target.style.transform = 'rotate(0deg)';
            }}
            title="Поменять местами"
          >
            ⇄
          </button>
          
          import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainForm = ({ className }) => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: ""
  });
  
  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const clickReverse = () => {
    setFormData(prev => ({
      ...prev,
      from: prev.to,
      to: prev.from
    }));
  };

  const clickHandler = () => {
    if (formData.from && formData.to && formData.date) {
      const searchParams = new URLSearchParams({
        from: formData.from,
        to: formData.to,
        date: formData.date
      });
      navigate(`/trains/?${searchParams.toString()}`);
    } else {
      alert("Пожалуйста, заполните все поля формы");
    }
  };

  const isFormValid = formData.from && formData.to && formData.date;

  return (
    <div className={className} style={{ 
      maxWidth: '600px', 
      margin: '0 auto',
      padding: '30px', 
      border: '1px solid #ddd', 
      borderRadius: '12px',
      background: 'white',
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        marginBottom: '25px', 
        color: '#333',
        textAlign: 'center'
      }}>🔍 Поиск ж/д билетов</h2>
      
      {/* Направление */}
      <div style={{ marginBottom: '25px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          fontWeight: 'bold',
          color: '#555'
        }}>
          Направление
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <input
              type="text"
              placeholder="Откуда"
              value={formData.from}
              onChange={(e) => handleChange('from', e.target.value)}
              style={{ 
                padding: '12px 40px 12px 12px', 
                border: '1px solid #ccc', 
                borderRadius: '6px',
                width: '100%',
                fontSize: '16px'
              }}
            />
            <span style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#666',
              fontSize: '18px'
            }}>📍</span>
          </div>
          
          <button
            type="button"
            onClick={clickReverse}
            style={{
              background: '#f8f9fa',
              border: '1px solid #ddd',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '18px',
              padding: '10px 14px',
              color: '#666',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.background = '#e9ecef';
              e.target.style.transform = 'rotate(180deg)';
            }}
            onMouseOut={(e) => {
              e.target.style.background = '#f8f9fa';
              e.target.style.transform = 'rotate(0deg)';
            }}
            title="Поменять местами"
          >
            ⇄
          </button>
          
                    <div style={{ flex: 1, position: 'relative' }}>
            <input
              type="text"
              placeholder="Куда"
              value={formData.to}
              onChange={(e) => handleChange('to', e.target.value)}
              style={{ 
                padding: '12px 40px 12px 12px', 
                border: '1px solid #ccc', 
                borderRadius: '6px',
                width: '100%',
                fontSize: '16px'
              }}
            />
            <span style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: '#666',
              fontSize: '18px'
            }}>📍</span>
          </div>
        </div>
      </div>

      {/* Дата */}
      <div style={{ marginBottom: '30px' }}>
        <label style={{ 
          display: 'block', 
          marginBottom: '8px', 
          fontWeight: 'bold',
          color: '#555'
        }}>
          Дата поездки
        </label>
        <div style={{ position: 'relative' }}>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => handleChange('date', e.target.value)}
            style={{ 
              padding: '12px 40px 12px 12px', 
              border: '1px solid #ccc', 
              borderRadius: '6px',
              width: '100%',
              fontSize: '16px'
            }}
          />
          <span style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#666',
            fontSize: '18px'
          }}>📅</span>
        </div>
      </div>

      {/* Кнопка поиска */}
      <div>
        <button
          onClick={clickHandler}
          disabled={!isFormValid}
          style={{
            padding: '15px 30px',
            background: isFormValid ? '#ff6b35' : '#ccc',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: isFormValid ? 'pointer' : 'not-allowed',
            width: '100%',
            fontSize: '18px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            boxShadow: isFormValid ? '0 4px 8px rgba(255, 107, 53, 0.3)' : 'none'
          }}
          onMouseOver={(e) => {
            if (isFormValid) {
              e.target.style.background = '#e55a2b';
              e.target.style.transform = 'translateY(-2px)';
            }
          }}
          onMouseOut={(e) => {
            if (isFormValid) {
              e.target.style.background = '#ff6b35';
              e.target.style.transform = 'translateY(0)';
            }
          }}
        >
          🔍 Найти билеты
        </button>
      </div>

      {/* Информационное сообщение */}
      {!isFormValid && (
        <div style={{ 
          marginTop: '15px', 
          padding: '12px', 
          background: '#fff3cd', 
          border: '1px solid #ffeaa7',
          borderRadius: '6px',
          fontSize: '14px',
          color: '#856404',
          textAlign: 'center'
        }}>
          ⚠️ Заполните все поля для поиска билетов
        </div>
      )}
    </div>
  );
};

export default MainForm;
