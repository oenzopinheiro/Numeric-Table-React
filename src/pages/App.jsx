import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'

function App() {
  const [number, setNumber] = useState('');
  const [table, setTable] = useState('');

  const calc = () => {
    const numberValue = parseFloat(number);

    if (numberValue <= 10) {
      let tableHTML = '';
      for (let i = 1; i <= 10; i++) {
        tableHTML += `${numberValue} x ${i} = ${numberValue * i}<br>`;
      }
      setTable(tableHTML);
    } else {
      setTable('Por favor, insira um número menor ou igual a 10.');
    }
  };

  return (
    <div className="container">
      <h1>Tabuada</h1>
      <div className="div-up">
        <input
          type="text"
          placeholder="Digite um número"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={calc}>Gerar</button>
      </div>
      <div className="div-result" dangerouslySetInnerHTML={{ __html: table }} />
    </div>
  );
}

export default App;
