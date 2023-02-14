/// <reference types="cypress" />

describe('Should test at a functional level', () => {
    before(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')
    })
    it('login with valid user', () => {
        cy.get('#email').type('alineedvania2018@outlook.com')
        cy.get('#senha').type('85850219')
        cy.get('.btn').click()
        cy.get('.alert').should('contain', 'Bem vindo, Aline Edvania de Franca!')

    })
})