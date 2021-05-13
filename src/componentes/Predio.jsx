import React from 'react';
import Janela from './Janela';
import  '../estilo_app.css';
import Porta from './Porta';

function Predio() {
            const janelas = []
          
            for (let i = 0; i < 12; i++) {
              janelas.push(<Janela key={i} id = {i}/>)
            }
            
            return (
              <div className='predio' id='predio'>
                {janelas}
                <Porta />
              </div>
            )}

export default Predio;