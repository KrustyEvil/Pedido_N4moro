// Configuração dos elementos do DOM
const btnSim = document.getElementById("sim");
const btnNao = document.getElementById("nao");
const mensagem = document.getElementById("mensagem");

// Variável para contar tentativas de clique no "NÃO"
let tentativas = 0;

// ===== BOTÃO "NÃO" FUGE DO MOUSE ===== //
btnNao.addEventListener("mouseover", () => {
    // Gera posições aleatórias na tela
    const randomX = Math.random() * (window.innerWidth - btnNao.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - btnNao.offsetHeight);
    
    // Aplica a nova posição
    btnNao.style.position = "absolute";
    btnNao.style.left = randomX + "px";
    btnNao.style.top = randomY + "px";

    // Diminui a opacidade para deixar mais difícil (opcional)
    btnNao.style.opacity = "0.9";
});

// ===== BOTÃO "NÃO" PARECE DE FUGIR APÓS 5 TENTATIVAS ===== //
btnNao.addEventListener("click", () => {
    tentativas++;
    if (tentativas >= 5) {
        btnNao.textContent = "Cê me pegou! ❤️";
        btnNao.style.position = "static";
        btnNao.style.transform = "scale(1.2)";
        btnNao.style.opacity = "1";
        btnNao.style.transition = "all 0.3s";
    }
});

// ===== BOTÃO "SIM" DISPARA CONFETE E MOSTRA MENSAGEM ===== //
btnSim.addEventListener("click", () => {
    // Esconde os botões e mostra a mensagem
    mensagem.classList.remove("hidden");
    btnSim.style.display = "none";
    btnNao.style.display = "none";

    // ===== EFEITOS DE CONFETE ===== //
    // Configuração básica
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },  // Confetes saem da parte inferior
    });

    // Efeito extra após 300ms (opcional)
    setTimeout(() => {
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { x: 0.3, y: 0.7 },  // Sai do lado esquerdo
            colors: ["#ff0000", "#00ff00", "#0000ff"],  // Cores personalizadas
        });
    }, 300);

    // Terceira explosão (opcional)
    setTimeout(() => {
        confetti({
            particleCount: 100,
            spread: 50,
            shapes: ["circle", "square"],  // Formatos variados
        });
    }, 600);
});

// ===== VERIFICA SE A BIBLIOTECA DE CONFETE FOI CARREGADA ===== //
// (Mensagem de console para debug)
if (typeof confetti === "function") {
    console.log("Confetes carregados! 🎉");
} else {
    console.error("Erro: Biblioteca de confetes não carregada.");
}