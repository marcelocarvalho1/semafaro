const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarelo');
const verde = document.querySelector('.verde');

let contador = 0; // Inicializando o contador em 0 para começar com a luz verde

// Função para mostrar a mensagem na página
function mostrarMensagem(mensagem) {
    var mensagemElemento = document.getElementById('mensagem');

    if (mensagemElemento) {
        mensagemElemento.innerText = mensagem;
    } else {
        console.log(mensagem);
    }
}

setInterval(() => {
    if (contador < 1) { // Condição ajustada para começar do verde
        verde.classList.add('verde-flore');
        vermelho.classList.remove('vermelho-flore');
        amarelo.classList.remove('amarelo-flore');
        mostrarMensagem('Sinal Verde: SIGA!');

    } else if (contador === 1) {
        verde.classList.remove('verde-flore');
        vermelho.classList.remove('vermelho-flore');
        amarelo.classList.add('amarelo-flore');
        mostrarMensagem("Sinal Amarelo: ATENÇÃO!");

    } else if (contador === 2) {
        verde.classList.remove('verde-flore');
        vermelho.classList.add('vermelho-flore');
        amarelo.classList.remove('amarelo-flore');
        mostrarMensagem('Sinal Vermelho: PARE!');
    } else if (contador === 3) {
        contador = -1; // Reinicia o contador para voltar a 0
    }
  
    contador += 1;
}, 2000); 
