/*Funções da Troca de Imagens da área do "Comprar"*/

function click1() {
  let imagem_mae = document.getElementById("img1");
  imagem_mae.src = "images/Samba_OG_Shoes_Green_IE0872_01_standard.png";
}

function click2() {
  let imagem_mae = document.getElementById("img1");
  imagem_mae.src = "images/Samba_OG_Shoes_Green_IE0872_06_standard.png";
}

function click3() {
  let imagem_mae = document.getElementById("img1");
  imagem_mae.src = "images/Samba_OG_Shoes_Green_IE0872_41_detail.png";
}

function click4() {
  let imagem_mae = document.getElementById("img1");
  imagem_mae.src = "images/Samba_OG_Shoes_Green_IE0872_42_detail.png";
}

/*Funcoes de Alertas*/

function shopping() {
  window.alert("Carrinho indisponível");
}

function user() {
  window.alert("Função Indisponível, lamentamos.");
}

/*Script do Dialog*/
let button = document.getElementById("botao1");
let bu = document.getElementById("ok");
let modal = document.querySelector("dialog");

button.onclick = function () {
  modal.showModal();
};

function ok() {
  modal.close();
  window.alert("Login feito com Sucesso!!");
}
