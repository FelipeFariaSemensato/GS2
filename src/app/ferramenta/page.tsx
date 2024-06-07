"use client";
import { useState } from 'react';
import './style.css';

function App() {
  const [louca, setLouca] = useState('');
  const [dentes, setDentes] = useState('');
  const [banho, setBanho] = useState('');
  const [roupas, setRoupas] = useState('');
  const [cozinhar, setCozinhar] = useState('');
  const [agua, setAgua] = useState('');
  const [resultado, setResult] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loucaValue = parseFloat(louca);
    const dentesValue = parseFloat(dentes);
    const banhoValue = parseFloat(banho);
    const roupasValue = parseFloat(roupas);
    const cozinharValue = parseFloat(cozinhar);
    const aguaValue = parseFloat(agua);

    let consumoTotal = (loucaValue / 60) + (dentesValue / 60) + (banhoValue / 60) + (roupasValue / 60) + cozinharValue;
    consumoTotal += (aguaValue * 200) / 1000;

    setResult(consumoTotal.toFixed(2));

    console.log('Consumo Total de Água:', consumoTotal, 'metros cúbicos');
  };

  return (
    <div className='fundo'>
      <div className="global">
        <form onSubmit={handleSubmit}>
          <h2>Calculadora de Consumo de Água</h2>
          <div className="form-group">
            <label htmlFor="louca">Tempo que usa lavando louça</label>
            <input
              type="text"
              className="form-control"
              id="louca"
              value={louca}
              onChange={(e) => setLouca(e.target.value)}
              placeholder="Ex: 30 minutos"
            />
          </div>
          <div className="form-group">
            <label htmlFor="dentes">Tempo que usa escovando os dentes</label>
            <input
              type="text"
              className="form-control"
              id="dentes"
              value={dentes}
              onChange={(e) => setDentes(e.target.value)}
              placeholder="Ex: 2 minutos"
            />
          </div>
          <div className="form-group">
            <label htmlFor="banho">Tempo que usa tomando banho</label>
            <input
              type="text"
              className="form-control"
              id="banho"
              value={banho}
              onChange={(e) => setBanho(e.target.value)}
              placeholder="Ex: 10 minutos"
            />
          </div>
          <div className="form-group">
            <label htmlFor="roupas">Tempo que usa lavando roupas</label>
            <input
              type="text"
              className="form-control"
              id="roupas"
              value={roupas}
              onChange={(e) => setRoupas(e.target.value)}
              placeholder="Ex: 1 hora"
            />
          </div>
          <div className="form-group">
            <label htmlFor="cozinhar">Copos de água pra cozinhar</label>
            <input
              type="text"
              className="form-control"
              id="cozinhar"
              value={cozinhar}
              onChange={(e) => setCozinhar(e.target.value)}
              placeholder="Ex: 2 copos"
            />
          </div>
          <div className="form-group">
            <label htmlFor="agua">Copos de água por dia</label>
            <input
              type="text"
              className="form-control"
              id="agua"
              value={agua}
              onChange={(e) => setAgua(e.target.value)}
              placeholder="Ex: 8 copos"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Calcular
          </button>
        </form>
        {resultado && <p>Resultado: {resultado} metros cúbicos</p>}
      </div>
    </div>
  );
}

export default App;