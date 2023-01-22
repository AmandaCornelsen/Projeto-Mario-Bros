/*
Obj1 - Quando o usuário clicarno botão "veja o trailer", devemos abrir o modal com o vídeo do trailer
  - passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js
  - passo 2 - dar um jeito de identificar quando o usuário clilcar no botão
  - passo 3 - dar um jeito de pegar o elemento da modal no js
  - passo 4 - abrir a modal na tela

Obj2- quando o usuário clicar no X, devemos fechar o modal
 - passo 1 - dar um jeito de pegar o elemento de fechar a modal no js
 - passo 2 - dar um jeito de identificar quando o usuário clicar no X 
 - passo 3 - fechar o modal 
*/

//Obj1 - Quando o usuário clicarno botão "veja o trailer", devemos abrir o modal com o vídeo do trailer

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector (".fechar-modal");
const video = document.getElementById("video")
const modal = document.querySelector (".modal")
const linkDoVideo = video.src

console.log(botaoTrailer); 
console.log("mostra o objeto da modal", modal);
console.log(video.src);
console.log(botaoFecharModal);
console.log( document.querySelector(".botao-trailer")); 
console.log('mostrar o document', document);

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => { 
     alternarModal();
     video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "")
})














