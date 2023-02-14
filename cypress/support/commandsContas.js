
import loc from './locators'


Cypress.Commands.add('menuAdicionarConta', () => {
    cy.get(loc.MENU.CONTAS).click()
    cy.get(loc.MENU.ADICIONAR).click()
})

Cypress.Commands.add('menuListarConta', () => {
    cy.get(loc.MENU.CONTAS).click()
    cy.get(loc.MENU.LISTAR).click()
})


Cypress.Commands.add('inserirConta', conta => {
    cy.get(loc.ADICIONAR.NOME).type('Conta teste')
    cy.get(loc.ADICIONAR.BTN_SALVAR).click()
})
