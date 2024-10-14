/* Selecionando os elementos que serão manipulados */
const formulario = document.querySelector("form");
const campoCep = formulario.querySelector("#cep");
const campoEndereco = formulario.querySelector("#endereco");
const campoBairro = formulario.querySelector("#bairro");
const campoCidade = formulario.querySelector("#cidade");
const campoEstado = formulario.querySelector("#estado");
const botaoBuscar = formulario.querySelector("#buscar");
const mensagemStatus = formulario.querySelector("#status");

/* Capturando o clique no botão Buscar */

botaoBuscar.addEventListener("click", function() {
    /* Verificando se o cep não tem 9 digitos */

    if ( campoCep.value.length !== 9) {
        // informar o usuário sobre o erro
        mensagemStatus.textContent = "Digite um CEP válido";
        mensagemStatus.style.color = "purple";

        // Para completamente a execução do script
        return;
        
    }
    //Guardando o valor do cep digitado
    let cepDigitado = campoCep.value;
   
    
    /* AJAX - Asyncronous  Javascript And XML 
    Técnica de comunicação (transmissão, recebimento) de dados muito usada entre sistemas e tecnologias diferentes*/
    

}); //final do evento do botão

