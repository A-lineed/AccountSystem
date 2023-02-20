/// <reference types="cypress" />

describe('Should test at a API level', () => {
    before(() => {

    })
    it('login with valid user', () => {
        cy.request({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body: {
                email: "linegata_tjs@hotmail.com",
                redirecionar:false,
                senha: "85850219"
            }
        }).its('body.token').should('not.be.empty')
    })
})