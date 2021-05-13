import React, {useState} from 'react';
import  '../estilo_app.css';


function Janela(props) {
        let [aState, setState] = useState(0)

        function acenderApagar() {
            let objeto = document.getElementById(props.id)
            if (aState === 0 && objeto.classList[1] === 'dia') {
                
                objeto.classList.remove('dia')
                objeto.classList.add('noite')
                setState(1)
            }
            else if(aState === 1 && objeto.classList[1] === 'noite')  {
                let objeto = document.getElementById(props.id)
                objeto.classList.remove('noite')
                objeto.classList.add('dia')
                setState(0)
    
            }
            else if (objeto.classList[1] === 'dia') {
                
                objeto.classList.remove('dia')
                objeto.classList.add('noite')
                setState(1)
            }
            else if(objeto.classList[1] === 'noite')  {
                let objeto = document.getElementById(props.id)
                objeto.classList.remove('noite')
                objeto.classList.add('dia')
                setState(0) }
        }

        return(
            <div className='janela dia' onClick={() => acenderApagar()} id={props.id}> 

            </div>
        )
}

export default Janela;