import axios from 'axios';
import React, {useEffect, Fragment} from 'react';
import  '../estilo_app.css';


function Posicao() {

    let data = new Date()
    let hora24 = data.getHours()
    let amPm = ''

    if(hora24 > 12) {

        amPm = 'PM'

    } else {
        amPm = 'AM'
    }

    //Convertendo a hora para o sistema de 12 horas
    let data_convertida = data.toLocaleTimeString('pt-PT', {hour12: true})
    let data_pt = data_convertida.split(' ')
    let data_formatada = data_pt[0].split(':')
    let hora = data_formatada[0]
    let minutos = data_formatada[1]
    let segundos = data_formatada[2]

    //Transformando em milissegundos
    let hora_completa = (parseInt(hora)  * 3600000) + (parseInt(minutos) * 60000) + (parseInt(segundos) * 1000)

    console.log('Hora: ' + hora_completa)


    useEffect(function () { navigator.geolocation.getCurrentPosition((posicao) => {
         
            getPosicao(posicao.coords.latitude, posicao.coords.longitude);
           
    })})

   

    function getPosicao(lat, long) {

        axios.get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}&date=today`)
        .then(res => {
            let por_do_sol = res.data['results'].sunset
            let nascer_do_sol = res.data['results'].sunrise

            //Pôr do sol
            let hora_por = por_do_sol.split(' ')
            let manha_tarde = hora_por[1]
            let separacao_p = hora_por[0].split(':')
            let hora_sunset = parseInt(separacao_p[0]) * 3600000
            let min_sunset = parseInt(separacao_p[1]) * 60000 
            let seg_sunset = parseInt(separacao_p[2]) * 1000 

            let anoitecer = hora_sunset + min_sunset + seg_sunset
            
            //Nascer do sol
            let hora_nascer = nascer_do_sol.split(' ')
            let manha_tarde_dia = hora_nascer[1]
            let separacao_n = hora_nascer[0].split(':')
            let hora_sunrise = parseInt(separacao_n[0]) * 3600000
            let min_sunrise = parseInt(separacao_n[1]) * 60000 
            let seg_sunrise = parseInt(separacao_n[2]) * 1000 

            let nascer_sol = hora_sunrise + min_sunrise + seg_sunrise


            console.log('Nascer: ' + nascer_sol)
            console.log('Anoitecer: ' + anoitecer)
            
            let espaco = document.getElementsByClassName('espaco').item(0)
            
            //Lógica: Quando chegar nessa hora anoitecerá e acenderá as lâmpadas
            if (amPm === manha_tarde && hora_completa >= anoitecer) {
                espaco.classList.add('mudanca') 
                for(let i = 0; i < 12; i++) {
                    let elemento = document.getElementById(i)   
                    elemento.classList.remove('dia')
                    elemento.classList.add('noite') }
                
            } else if (amPm === manha_tarde_dia) {
                espaco.classList.remove('mudanca')
                
            } else if (hora_completa > nascer_sol) {
                espaco.classList.remove('mudanca')
            }     
            
        }).catch ((erro) => {console.log('Erro:' + erro.message)})
}
        
    return( 

        <Fragment>

        </Fragment>
    )

}


export default Posicao;
