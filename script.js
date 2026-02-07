const btnNo = document.querySelector(".no");
const content = document.querySelector(".content");
const content2 = document.querySelector(".content2");

function clicouNao() {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;

    btnNo.style.transform = `translate(${x}px, ${y}px)`;
}

function clicouSim() {
    content.style.display = "none";
    content2.style.display = "flex";
}
