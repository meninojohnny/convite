function clicouNao() {
    var top = gerarNumero(200, -200) + "px";
    var letf = gerarNumero(50, -200) + "px";

    document.querySelector(".button2").style.top = top;
    document.querySelector(".button2").style.left = letf;
}

function clicouSim() {
    document.querySelector(".content").style.display = "none"
    document.querySelector(".content2").style.display = "flex"

}

function gerarNumero(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

