const locators = {
    LOGIN: {
        USER: '#email',
        PASSWORD: '#senha',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        CONTAS: '.dropdown-toggle',
        ADICIONAR: '[href="/addConta"]',
        LISTAR:    '[href="/contas"]'
    },
    ADICIONAR: {
        NOME: '#nome',
        BTN_SALVAR: '.btn'

    },
    LISTAR: {
        NOME: '#nome',
        BTN_SALVAR: '.btn',
        XP_BTN_ALTERAR: '[href="/editarConta?id=1597203"] > .glyphicon',
        RESET: '[href="/removerConta?id=1597203"] > .glyphicon'
    },
    ALERT: '.alert'
}

export default locators;
