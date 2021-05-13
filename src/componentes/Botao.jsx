import React, {useState} from 'react';
import  '../estilo_app.css';

function Botao() {
        const [click, setClick] = useState(0)

        function ligarDesligarGeral() {  
            for(let i = 0; i < 12; i++) {
                let elemento = document.getElementById(i)
                
                 if (click === 0) {              
                    elemento.classList.remove('dia')
                    elemento.classList.add('noite')
                    setClick(1)}
                else if(click === 1)  {
                    elemento.classList.remove('noite')
                    elemento.classList.add('dia')
                    setClick(0) }  } }
        return(

            <div className='botao' onClick={() => ligarDesligarGeral()} id='botao'>
            </div>
            
        )
}

export default Botao;