
# Desafio Front-End

Neste projeto foi utilizado *__html, css, javascript, onde demonstro meus conhecimentos sobre React JS.__*

A api consumida foi: [Sunset sunrise]( https://sunrise-sunset.org/api)

### Explicação
Consiste em um prédio, com 12 janelas, que ao clicar em qualquer janela ela ligará a luz(amarela), e ao clicar novamente na mesma, apagará. 

Há também um botão para ligar todas de uma vez ou apagar(Botão vermelho canto superior direito). 

Caso seja noite onde o usuário esteja, o app se iniciará com as lâmpadas ligadas, e o inverso de dia. O _background color_ também mudará, com uma pequena animação;


### Estrutura
A estrutura que segue este projeto é:

Uma div, Espaco, que contém os componentes: _Predio, Botao, Chao e Api_;

O componente Predio contém os componentes: _Janela e Porta_;

No componente Api está contido a lógica para consumir a api, que me retornará a hora do nascer do sol(sunrise) e a do pôr do sol(sunset), fazendo a lógica automática para ligar todas as lâmpadas ou não. Nesta parte foi usada a _**biblioteca axios.**_
