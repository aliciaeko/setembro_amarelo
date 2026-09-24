const botao = document.getElementById("botao-alerta");
const maisAlertas = document.getElementById("mais-alertas");

botao.addEventListener("click", function () {

    maisAlertas.style.display = "block";
    botao.style.display = "none";

});