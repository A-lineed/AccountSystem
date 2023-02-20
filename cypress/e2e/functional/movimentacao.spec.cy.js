/// <reference types="cypress" />

import loc from '../../support/locators'

describe('Should test at a functional level', () => {
    before(() => {
        cy.login('alineedvania2018@outlook.com', '85850219')
    })

    it('Should create a transaction', () => {
        cy.get(loc.MENU.MOVIMENTACAO).click()
        cy.get(loc.MOVIMENTACAO.DT_MOVIMENTACAO).type('14/02/2023')
        cy.get(loc.MOVIMENTACAO.DT_PAGAMENTO).type('17/02/2023')
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Movimentação para teste')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Teste')
        cy.get(loc.MOVIMENTACAO.VALOR).type('1000')
        cy.get(loc.MOVIMENTACAO.PAGO).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.ALERT).should('contain', 'Movimentação adicionada com sucesso!')
        cy.get('[href="/extrato"]').click()

    })
})
