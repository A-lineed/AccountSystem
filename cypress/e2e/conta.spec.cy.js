/// <reference types="cypress" />

import loc from '../support/locators'

describe('Should test at a functional level', () => {
    before(() => {
        cy.login('alineedvania2018@outlook.com', '85850219')
    })
    it('Must add an account', () => {
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.MENU.ADICIONAR).click()
        cy.get(loc.ADICIONAR.NOME).type('Conta teste')
        cy.get(loc.ADICIONAR.BTN_SALVAR).click()
        cy.get(loc.ALERT).should('contain', 'Conta adicionada com sucesso!')
    })

    it.only('Must change an account', () => {
        cy.get(loc.MENU.CONTAS).click()
        cy.get(loc.MENU.LISTAR).click()
        cy.get(loc.LISTAR.XP_BTN_ALTERAR).click()
        cy.get(loc.LISTAR.NOME)
            .clear()
            .type('Conta alterada')
        cy.get(loc.LISTAR.BTN_SALVAR).click()
        cy.get(loc.ALERT).should('contain', 'Conta alterada com sucesso!')
    })
})