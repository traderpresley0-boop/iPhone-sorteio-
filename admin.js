// senha simples (depois podemos melhorar)
const senhaCorreta = "12345";

function login(){
let senha = document.getElementById("senha").value;

if(senha === senhaCorreta){
document.getElementById("login").style.display="none";
document.getElementById("painel").style.display="block";
mostrarParticipantes();
}else{
document.getElementById("erro").innerText="Senha errada";
}
}

function logout(){
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

participantes.forEach(p=>{
let li = document.createElement("li");
li.textContent = p;
lista.appendChild(li);
});
}
