/// <reference types="cypress" />

describe('Should test at a functional level', () => {
    before(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')
        cy.get('#email').type('alineedvania2018@outlook.com')
        cy.get('#senha').type('85850219')
        cy.get('.btn').click()
        cy.get('.alert').should('contain', 'Bem vindo, Aline Edvania de Franca!')
    })
    it('Must add an account', () => {
        cy.get('.dropdown-toggle').click()
        cy.get('[href="/addConta"]').click()
        cy.get('#nome').type('Conta teste')
        cy.get('.btn').click()
        cy.get('.alert').should('contain', 'Conta adicionada com sucesso!')
    })
})