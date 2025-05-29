//Função que executa o áudio com a função play
function tocaSom (seletorAudio) {
    //Constante que irá receber o valor da id de áudio
    const elemento = document.querySelector(seletorAudio);

    //Condição para executar o som caso ele seja válido e da tag audio
    if (elemento != null && elemento.localName === 'audio') {
        //Execução do áudio
        elemento.play();
    } else {
        //Mensagem de erro no console caso seja inválido
        console.log('Elemento não encontrado ou seletor inválido');
    }    
}

//Constante que seleciona todos os elementos com a classe .tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

//Loop de repetição
//Enquanto o valor de contador for menor que a extensão da listaDeTeclas, executar o bloco de código
//Com o loop for ao invés do while, é possível declarar a variável do contador dentro dele mesmo
//A estrutura fica assim: variável; condição; ação de incrementar +1 ao final
//O length ajuda o loop a percorrer a lista por toda sua extensão, parando no último item
//Caso ele não estivesse aplicado, criaria um loop infinito
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    //Constante que recebe os elementos com a classe tecla e especifica elas de acordo com a variável contador
    //Dessa forma vai atribuir um número para cada elemento de acordo com sua posição no HTML
    const tecla = listaDeTeclas[contador];
    //Constante que seleciona a classe de índice 1 no HTML, correspondente à classe de cada som específico
    const instrumento = tecla.classList[1];
    //Constante que seleciona a classe do instrumento e atribui o valor de acordo com o índice
    const idAudio = `#som_${instrumento}`;
    //Seleciona a tecla, adiciona o comando de clique e executa uma função anônima
    // ~~Não pode ser a função tocaSom direto pois o navegador identifica como erro
    tecla.onclick = function () {
        //Executa a função tocaSom tendo como parâmetro o id de cada som especificado na constante instrumento
        tocaSom(idAudio);
    }
    //Seleciona uma tecla e ao pressionar adiciona a classe CSS à ela
    tecla.onkeydown = function (evento) {
        // || significa ou - Space OU Enter
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    //Ao soltar a tecla, remove a classe
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
