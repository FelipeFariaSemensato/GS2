import './style.css';
export default function Home() {
  return (
      <div className="water-consumption">
      <div className="water-drop">
        <img src="/washing.png" width={900}/>
      </div>
      <div className='text'>
      <h1>Consumo de Água</h1>
      <p>Em média, cada pessoa consome cerca de 110 litros de água por dia.</p>
      <p>Esse uso inclui atividades como banho, escovar os dentes, lavar louça, cozinhar e beber.</p>
      <p>A conscientização sobre o uso responsável da água é crucial para a preservação desse recurso essencial.</p>
      <p>Acesse nossa ferramenta pelo cabeçalho clicando na gota e receba sua média de gasto por dia e dicas para melhorar.</p>
      </div>
    </div>
  );
}
