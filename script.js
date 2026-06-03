// Seleciona o botão pelo ID
const botao = document.getElementById('btnAlerta');

// Adiciona um evento de clique ao botão
botao.addEventListener('click', function() {
    alert('Olá! Obrigado por interagir com o site.');
});

// Efeito de mudar a cor de fundo do menu ao rolar a página
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#111'; // Cor mais escura ao rolar
        header.style.padding = '15px 10%';    // Menu fica ligeiramente mais fino
    } else {
        header.style.backgroundColor = '#1a1a1a'; // Cor original
        header.style.padding = '20px 10%';
    }
});