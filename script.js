document.getElementById("formCadastro").addEventListener("submit", function(e){
e.preventDefault();

document.getElementById("mensagem").innerText =
"✅ Cadastro feito! Aguarde validação.";

gerarLink();
});

function gerarLink(){
let codigo = Math.random().toString(36).substring(2,8);
let link = window.location.href + "?ref=" + codigo;
document.getElementById("linkConvite").value = link;
}

function copiarLink(){
let input = document.getElementById("linkConvite");
input.select();
document.execCommand("copy");
alert("Link copiado!");
}
