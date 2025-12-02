const form = document.getElementById("formContato");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputMensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");
const botaoTema = document.getElementById("toggleTema");

// --- Validação ---
form.addEventListener("submit", function(evento) {
    const nome = inputNome.value.trim();
    const email = inputEmail.value.trim();
    const mensagem = inputMensagem.value.trim();

    resultado.textContent = "";
    resultado.style.color = "red";

    if (nome === "") {
        resultado.textContent = "Por favor, digite seu nome.";
        return;
    }

    if (email === "") {
        resultado.textContent = "Por favor, digite seu e-mail.";
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        resultado.textContent = "Por favor, digite um e-mail válido.";
        return;
    }

    if (mensagem === "") {
        resultado.textContent = "Por favor, digite sua mensagem.";
        return;
    }

    resultado.style.color = "green";
    resultado.textContent = "Mensagem enviada com sucesso!";

    inputNome.value = "";
    inputEmail.value = "";
    inputMensagem.value = "";
});

// --- TEMA CLARO / ESCURO ---
// Carregar tema salvo
if (localStorage.getItem("tema") === "escuro") {
    document.body.classList.add("dark-mode");
    botaoTema.textContent = "☀️";
} else {
    botaoTema.textContent = "🌙";
}

// Alternar tema
botaoTema.addEventListener("click", function () {
    const modoEscuro = document.body.classList.toggle("dark-mode");

    if (modoEscuro) {
        botaoTema.textContent = "☀️";
        localStorage.setItem("tema", "escuro");
    } else {
        botaoTema.textContent = "🌙";
        localStorage.setItem("tema", "claro");
    }
});
