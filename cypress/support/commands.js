// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loc from './locators'

Cypress.Commands.add('login', (user, password) => {
    cy.visit('https://seubarriga.wcaquino.me/login')
    cy.get(loc.LOGIN.USER).type('alineedvania2018@outlook.com')
    cy.get(loc.LOGIN.PASSWORD).type('85850219')
    cy.get(loc.LOGIN.BTN_LOGIN).click()
    cy.get(loc.ALERT).should('contain', 'Bem vindo, Aline Edvania de Franca!')
})

Cypress.Commands.add('getToken', (user, passwd) => {
    cy.request({
        method: 'POST',
        url: 'https://barrigarest.wcaquino.me/signin',
        body: {
            email: "aline",
            redirecionar: false,
            senha: "123"
        }
    }).its('body.token').should('not.be.empty')
})

Cypress.Commands.add('resetRest', () => {
    cy.getToken('aline', '123').then(token => {
        cy.request({
            method: 'GET',
            url: 'https://barrigarest.wcaquino.me/reset',
            headers: { Authorization: `JWT ${token}` }
        }).its('status').should('be.equal', 200)

    })
})

Cypress.Commands.add('getAccountByName', name => {
    cy.getToken('aline', '123').then(token => {
        cy.request({
            method: 'GET',
            url: 'https://barrigarest.wcaquino.me/contas/',
            headers: { Authorization: `JWT ${token}` },
            qs: {
                nome: name
            }
        }).then(res => {
            return res.body[0].id
        })
    })
})
