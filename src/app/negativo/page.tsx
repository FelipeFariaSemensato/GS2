import './style.css'
import React from 'react';

const WaterUsageAlert = () => {
  return (
    <div className='waterUsageAlert'>
      <h2>Você consome muita água por dia!!!</h2>
      <p>Sua média de gasto de água por dia excede 110 litros por dia, seus maiores gastos são (insere aqui aonde passa da média), recomendamos que (insere aqui comentário personalizado)</p>
      <p>Seu gasto por dia: <span>X</span> litros</p>
      <div className='recommendations'>
        <h3>Dicas para economizar água:</h3>
        <ul>
          <li>Feche a torneira enquanto escova os dentes</li>
          <li>Use um regador para regar as plantas</li>
          <li>Conserte vazamentos imediatamente</li>
        </ul>
      </div>
    </div>
  );
};

export default WaterUsageAlert;
