// bloqueia acesso direto sem login
if(!sessionStorage.getItem("dono")){
document.body.innerHTML = "Acesso restrito";
}

// senha do dono
const senhaCorreta = "MeuSite@2026#Seguro!";

function login(){
let senha = document.getElementById("senha").value;

if(senha === senhaCorreta){

// guarda sessão do dono
sessionStorage.setItem("dono", "true");

document.getElementById("login").style.display="none";
document.getElementById("painel").style.display="block";

mostrarParticipantes();

}else{
document.getElementById("erro").innerText="Senha errada";
}
}

function logout(){
sessionStorage.removeItem("dono");
location.reload();
}

// exemplo de participantes (simulação)
function mostrarParticipantes(){

let participantes = [
"João - 931000000",
"Ana - 923000000",
"Carlos - 924000000"
];

let lista = document.getElementById("lista");
lista.innerHTML = "";

participantes.forEach(p=>{
let li = document.createElement("li");
li.textContent = p;
lista.appendChild(li);
});

}
