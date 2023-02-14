/// <reference types="cypress" />

import loc from '../support/locators'

describe('Should test at a functional level', () => {
    before(() => {
        cy.visit('https://seubarriga.wcaquino.me/login')
    })
    it('login with valid user', () => {
        cy.get(loc.LOGIN.USER).type('alineedvania2018@outlook.com')
        cy.get(loc.LOGIN.PASSWORD).type('85850219')
        cy.get(loc.LOGIN.BTN_LOGIN).click()
        cy.get(loc.ALERT).should('contain', 'Bem vindo, Aline Edvania de Franca!')
    })
})