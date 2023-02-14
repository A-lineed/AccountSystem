/// <reference types="cypress" />

import loc from '../support/locators'

describe('Should test at a functional level', () => {
    before(() => {
        cy.login('alineedvania2018@outlook.com', '85850219')
    })

    it('Should get balance ', () => {
       cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta alterada')).should('contain', '2000')
    })
})