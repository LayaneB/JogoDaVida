import './App.css';
import op from './components/opgol.png';
import Board from './components/board/Board';
import React from 'react';


function App() {

    return (
    <div className="App">
      <header className="App-header">
        <div id = "App-header-container">
          <img src = {op} alt= ""/> 
        </div>
      </header>

      <body ClassName ="App-body">
        <div ClassName="App-body-container">
          <Board />
        </div>
        <div className="App-body-buttons">
          <button type="button" class="btn">Povoar</button>
          <button type="button" class="btn">Iniciar</button>
          <button type="button" class="btn">Próximo</button>
          <button type="button" class="btn">Reset</button>
        </div>
      </body>
      <footer>
        By Layane Bastos
      </footer>

    </div>
  );
  
}

export default App;
