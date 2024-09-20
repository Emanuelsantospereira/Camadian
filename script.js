document.getElementById('cadastroBtn').addEventListener('click', function() {
    document.getElementById('cadastroForm').style.display = 'block';
    document.getElementById('comprarForm').style.display = 'none';
});

document.getElementById('comprarBtn').addEventListener('click', function() {
    document.getElementById('comprarForm').style.display = 'block';
    document.getElementById('cadastroForm').style.display = 'none';
});

function adicionarAoCarrinho() {
    alert('Produto adicionado ao carrinho!');
}

function enviarCadastro() {
    alert('Cadastro enviado com sucesso!');
}

function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
}
// Funções de exibição de formulários
function adicionarAoCarrinho() {
    alert('Produto adicionado ao carrinho!');
}

function enviarCadastro() {
    alert('Cadastro enviado com sucesso!');
}

function finalizarCompra() {
    alert('Compra finalizada com sucesso!');
}

function enviarContato() {
    alert('Sua mensagem foi enviada!');
}

function rastrearProduto() {
    const codigo = document.getElementById('codigoRastreamento').value;
    if (codigo) {
        alert(`Rastreamento do produto: Código ${codigo} recebido!`);
    } else {
        alert('Por favor, insira um código de rastreamento.');
    }
}

// Mostrar/ocultar formulários
document.getElementById('cadastroBtn').addEventListener('click', function () {
    document.getElementById('cadastroForm').style.display = 'block';
    document.getElementById('comprarForm').style.display = 'none';
});

document.getElementById('comprarBtn').addEventListener('click', function () {
    document.getElementById('cadastroForm').style.display = 'none';
    document.getElementById('comprarForm').style.display = 'block';
});

// Adicione isso ao seu script.js ou diretamente dentro de uma tag <script> no final do seu HTML

document.getElementById('openCart').addEventListener('click', function() {
    // Substitua 'pagina-checkout.html' pela URL da sua página de checkout
    window.location.href = 'file:///C:/Users/Valter/Desktop/Site%20escola/pagina-checkout.html';
});


// Script para alternar entre o modo claro e escuro
const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Verifica se o usuário já escolheu um tema
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

// Alterna o tema quando o botão é clicado
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode'); // Salva a preferência
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode'); // Salva a preferência
    }
});

