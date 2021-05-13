import React from 'react';
import Predio from './componentes/Predio';
import Botao from './componentes/Botao';
import Chao from './componentes/Chao';
import Posicao from './componentes/Api';


function App() {

  return (
      <div className='espaco'>
        <Predio />
        <Botao />
        <Chao />
        <Posicao />

      </div>
      
  );
}

export default App;
