/* Selecionando o link com a palavra Menu */
const botaoMenu = document.querySelector(".titulo-menu a");
/* Selecionando a Lista de links do menu */
const listaDelinks = document.querySelector(".links-menu");

// Ouvinte de Eventos para o click no botão menu
botaoMenu.addEventListener("click", function( event){
    /* Anulando o comportamento padrão de recarregar a página através de um link */
    event.preventDefault();
   /*  Para abrir/fechar a lista de links usando o toggle na classe aberto */
    listaDelinks.classList.toggle("aberto");

    if(listaDelinks.classList.contains("aberto")){
        botaoMenu.innerHTML = "Fechar &times;";
    } else {
        botaoMenu.innerHTML = "Menu &equiv;";
    }
    
})

