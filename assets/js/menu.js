// ========== Menu Mobile ========== //
const iconeMenu = document.getElementById('iconeMenu');
const iconeFechar = document.getElementById('iconeFechar');
const navegacao = document.querySelector('.navegacao');

iconeMenu.addEventListener('click', function() {
    navegacao.classList.add('visivel');
});
iconeFechar.addEventListener('click', function() {
    navegacao.classList.remove('visivel');
});


// ========== Menu Desktop ========== //
const cabecalho = document.querySelector(".cabecalho");
const posicaoExibicao = 75;

window.addEventListener("scroll", function() {
    if (window.pageYOffset > posicaoExibicao) {
        cabecalho.classList.add("destacado");
    } else {
        cabecalho.classList.remove("destacado");
    }
});
