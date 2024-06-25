document.addEventListener('DOMContentLoaded' , function() {
    // o DOMContentLoaded fica vendo observando os elementos do html
    const buttons = document.querySelectorAll('[data-tab-button]');

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

    function removeBotaoAtivo () {
        const button = document.querySelectorAll('[data-tab-button]');

        for (let i = 0; i < button.length; i++) {
            button[i].classList.remove('shows__tabs__button--is-active');
        }
    }

    function escondeTodasAbas() {
        const tabsContainer = document.querySelectorAll('[data-tab-id]');

        for (let i = 0; i < tabsContainer.length; i++) {
            tabsContainer[i].classList.remove('shows__list--is-active');
        }
    }
});