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
      navigate("/trains/");
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
      background: 'white'
    }}>
      <h2 style={{ marginBottom: '25px', textAlign: 'center' }}>
        Поиск ж/д билетов
      </h2>
      
      <div style={{ marginBottom: '25px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>
          Направление
        </label>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <input
            type="text"
            placeholder="Откуда"
            value={formData.from}
            onChange={(e) => handleChange('from', e.target.value)}
            style={{ 
              padding: '12px', 
              border: '1px solid #ccc', 
              borderRadius: '6px',
              width: '100%'
            }}
          />
          
          <button
            type="button"
            onClick={clickReverse}
            style={{
              background: '#f8f9fa',
              border: '1px solid #ddd',
              borderRadius: '6px',
              cursor: 'pointer',
              padding: '10px 14px'
            }}
          >
            ⇄
          </button>
          
          <input
            type="text"
            placeholder="Куда"
            value={formData.to}
            onChange={(e) => handleChange('to', e.target.value)}
            style={{ 
              padding: '12px', 
              border: '1px solid #ccc', 
              borderRadius: '6px',
              width: '100%'
            }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <label style={{ display: 'block', marginBottom: '8px' }}>
          Дата поездки
        </label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => handleChange('date', e.target.value)}
          style={{ 
            padding: '12px', 
            border: '1px solid #ccc', 
            borderRadius: '6px',
            width: '100%'
          }}
        />
      </div>

      <button
        onClick={clickHandler}
        disabled={!isFormValid}
        style={{
          padding: '15px 30px',
          background: isFormValid ? '#007bff' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: isFormValid ? 'pointer' : 'not-allowed',
          width: '100%',
          fontSize: '16px'
        }}
      >
        Найти билеты
      </button>

      {!isFormValid && (
        <div style={{ 
          marginTop: '15px', 
          padding: '12px', 
          background: '#fff3cd', 
          border: '1px solid #ffeaa7',
          borderRadius: '6px',
          fontSize: '14px',
          textAlign: 'center'
        }}>
          Заполните все поля для поиска билетов
        </div>
      )}
    </div>
  );
};

export default MainForm;
