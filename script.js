// ===============================
//   FORMULÁRIO DE CONTATO
// ===============================

const form = document.getElementById("formContato");
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputMensagem = document.getElementById("mensagem");
const resultado = document.getElementById("resultado");

if (form) {
    form.addEventListener("submit", function (evento) {
        evento.preventDefault();

        const nome = inputNome.value.trim();
        const email = inputEmail.value.trim();
        const mensagem = inputMensagem.value.trim();

        resultado.textContent = "";
        resultado.style.color = "red";

        if (!nome) {
            resultado.textContent = "Por favor, preencha o nome.";
            return;
        }

        if (!email) {
            resultado.textContent = "Por favor, preencha o e-mail.";
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            resultado.textContent = "Digite um e-mail válido.";
            return;
        }

        if (!mensagem) {
            resultado.textContent = "Por favor, escreva sua mensagem.";
            return;
        }

        resultado.style.color = "green";
        resultado.textContent = "Mensagem enviada com sucesso! (simulação)";

        inputNome.value = "";
        inputEmail.value = "";
        inputMensagem.value = "";
    });
}

// ===============================
//   TEMA CLARO / ESCURO
// ===============================

const botaoTemaDesktop = document.getElementById("toggleTema");
const botaoTemaMobile = document.getElementById("toggleTemaMobile");
const corpo = document.body;

function atualizarIconesTema() {
    const usandoEscuro = corpo.classList.contains("dark-mode");
    const icone = usandoEscuro ? "☀️" : "🌙";

    if (botaoTemaDesktop) botaoTemaDesktop.textContent = icone;
    if (botaoTemaMobile) botaoTemaMobile.textContent = icone;
}

function aplicarTema(tema) {
    if (tema === "escuro") {
        corpo.classList.add("dark-mode");
    } else {
        corpo.classList.remove("dark-mode");
        tema = "claro";
    }
    localStorage.setItem("tema", tema);
    atualizarIconesTema();
}

// carrega tema salvo
const temaSalvo = localStorage.getItem("tema") || "claro";
aplicarTema(temaSalvo);

function alternarTema() {
    const novoTema = corpo.classList.contains("dark-mode") ? "claro" : "escuro";
    aplicarTema(novoTema);
}

if (botaoTemaDesktop) {
    botaoTemaDesktop.addEventListener("click", alternarTema);
}

if (botaoTemaMobile) {
    botaoTemaMobile.addEventListener("click", alternarTema);
}

// ===============================
//   MENU MOBILE (HAMBÚRGUER)
// ===============================

const btnMobile = document.getElementById("btnMobile");
const menuMobile = document.getElementById("menuMobile");

if (btnMobile && menuMobile) {
    btnMobile.addEventListener("click", () => {
        btnMobile.classList.toggle("ativo");
        menuMobile.classList.toggle("ativo");
    });

    // quando clicar em um link do menu, fecha o menu
    const linksMobile = menuMobile.querySelectorAll("a");
    linksMobile.forEach(link => {
        link.addEventListener("click", () => {
            menuMobile.classList.remove("ativo");
            btnMobile.classList.remove("ativo");
        });
    });
}
