/// <reference types="cypress" />

import loc from '../support/locators'
import '../support/commandsContas'

describe('Should test at a functional level', () => {
    before(() => {
        cy.login('alineedvania2018@outlook.com', '85850219')
    })
    it('Must add an account', () => {
        cy.menuAdicionarConta()
        cy.inserirConta()
        cy.get(loc.ALERT).should('contain', 'Conta adicionada com sucesso!')
    })

    it.only('Must change an account', () => {
       cy.menuListarConta()
        cy.get(loc.LISTAR.XP_BTN_ALTERAR).click()
        cy.get(loc.LISTAR.NOME)
            .clear()
            .type('Conta alterada')
        cy.get(loc.LISTAR.BTN_SALVAR).click()
        cy.get(loc.ALERT).should('contain', 'Conta alterada com sucesso!')
    })
})