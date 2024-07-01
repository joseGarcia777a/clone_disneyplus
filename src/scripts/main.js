document.addEventListener('DOMContentLoaded' , function() {
    // o DOMContentLoaded fica vendo observando os elementos do html
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    //clientHeight ve o tamanho que uma div, section, ou outro elemento tem.
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        // window.scrolly ver qual e a posicao atual do scroll na pagina.
        const posicaoAtual = window.scrollY;

        if(posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    });



    //secoes de atracoes, programacao das abas
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeTodasAbas();
            removeBotaoAtivo();
            aba.classList.add('shows__list--is-active');
            botao.target.classList.add('shows__tabs__button--is-active');
        });
    };

    //secao FAQ, accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
        
    }
});

function abreOuFechaResposta (elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
};

function removeBotaoAtivo () {
    const button = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < button.length; i++) {
        button[i].classList.remove('shows__tabs__button--is-active');
    }
};

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
};

function ocultaElementosDoHeader() {
    const header = document.querySelector('.header');
    header.classList.add('header--is-hidden');
};

function exibeElementosDoHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('header--is-hidden');
};