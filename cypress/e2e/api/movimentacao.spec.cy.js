/// <reference types="cypress" />

describe('Should test at a API level', () => {
    let token
    before(() => {
        cy.getToken('aline', '123')
            .then(tkn => {
                token = tkn
            })
    })
    beforeEach(() => {
        cy.resetRest()
    })

    it('Should create a transaction', () => {
        cy.getAccountByName('Conta para movimentacoes')
            .then(contaId => {
                cy.request({
                    method: 'POST',
                    url: 'https://barrigarest.wcaquino.me/transacoes',
                    headers: { Authorization: `JWT ${token}` },
                    body: {
                        conta_id: contaId,
                        data_pagamento: "21/02/2023",
                        data_transacao: "21/02/2023",
                        descricao: "desc",
                        envolvido: "inter",
                        status: true,
                        tipo: "REC",
                        valor: "123"
                    }
                }).as('response')

            })
        cy.get('@response').its('status').should('be.equal', 201)
        cy.get('@response').its('body.id').should('exist')
    })
})

