import './style.css'
import React from 'react';

const WaterUsageAlert = () => {
  return (
    <div className='waterUsageAlert'>
      <h2>Parabens você está na média</h2>
      <p>Você gasta apenas X litros por dia, deveria se orgulhar por isso. Gastar menos água é um importante passo para ajudar os oceanos parabéns</p>
      <p>Seu gasto por dia: <span>X</span> litros</p>
      <div className='smile'>
        <img src='/happy.png'/>
      </div>
    </div>
  );
};

export default WaterUsageAlert;
