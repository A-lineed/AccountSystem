const locators = {
    LOGIN: {
        USER: '#email',
        PASSWORD: '#senha',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        CONTAS: '.dropdown-toggle',
        ADICIONAR: '[href="/addConta"]',
        LISTAR:    '[href="/contas"]',
        MOVIMENTACAO: '[href="/movimentacao"]'
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
    MOVIMENTACAO: {
        DT_MOVIMENTACAO: '#data_transacao',
        DT_PAGAMENTO: '#data_pagamento',
        DESCRICAO: '#descricao',
        INTERESSADO: '#interessado',
        VALOR: '#valor',
        BTN_SALVAR: '.btn'
    },
    ALERT: '.alert'
}

export default locators;
